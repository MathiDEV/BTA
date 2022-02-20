import time
from idle_time import IdleMonitor
import json
from datetime import datetime
from src import actions
from pynput import keyboard
from threading import Thread
import subprocess
import requests

computer_code = "190688"
pressed_keys = ""
pressed = False
process = {}
user_automations = {}

system_actions = {
    "lock": actions.lock_screen,
    "rickroll": actions.rickroll,
    "photo": actions.photo,
    "wait": actions.wait,
    "shell_run": actions.shell_run,
    "sound": actions.sound,
    "send_keys": actions.send_keys,
    "write": actions.write,
    "python": actions.python,
}

def refresh_automations():
    global user_automations
    user_automations = {}
    body = {"code": computer_code}
    automations = json.loads(requests.post('https://api-bta.tk/actions/automations',
                                    json=body
                                    ).text)
    for auto in automations:
        action = json.loads(auto["action"])
        user_automations[str(auto["id"])] = action
        if action["trigger"]:
            user_automations[str(auto["id"])]["tiggered"] = [False] * len(action["trigger"])


refresh_automations()

def on_release(q):
    global pressed_keys, pressed
    pressed = True
    if hasattr(q, "char"):
        pressed_keys += q.char
    elif q == keyboard.Key.space:
        pressed_keys += " "
    if len(pressed_keys) > 20:
        pressed_keys = pressed_keys[1:]


keyboard.Listener(on_release=on_release).start()


def process_listener():
    global process
    temp_process = {}
    new_process = []
    ex = subprocess.Popen(['sh', '../automation/src/get_process.sh'], stdout=subprocess.PIPE)
    std, _ = ex.communicate()
    for proc in std.decode().splitlines():
        if proc.startswith("kworker"):
            continue
        if not proc in process:
            new_process.append(proc)
        temp_process[proc] = (
            1 if not proc in temp_process else temp_process[proc] + 1)
    for proc in temp_process:
        if (proc not in process or temp_process[proc] > process[proc]) and not proc in new_process:
            new_process.append(proc)
    process = temp_process
    return new_process


process_listener()


def check_conditions(conditions):
    global pressed_keys, pressed
    triggers_cond = {
        "inactivity": False,
        "hour": False,
        "minute": False,
        "typed": False,
        "process": False
    }
    now = datetime.now()
    for cond in triggers_cond:
        if cond not in conditions:
            triggers_cond[cond] = True
        else:
            if cond == "inactivity":
                triggers_cond[cond] = conditions["inactivity"] < monitor.get_idle_time(
                )
            elif cond == "hour":
                triggers_cond[cond] = conditions["hour"] == int(
                    now.strftime("%H"))
            elif cond == "minute":
                triggers_cond[cond] = conditions["minute"] == int(
                    now.strftime("%M"))
            elif cond == "typed":
                if conditions["typed"] == True:
                    triggers_cond[cond] = pressed
                    pressed = False
                else:
                    if conditions["typed"].lower() in pressed_keys:
                        triggers_cond[cond] = True
                        pressed_keys = ""
                    else:
                        triggers_cond[cond] = False
            elif cond == "process":
                triggers_cond[cond] = conditions["process"] in process_listener()
    return all(value for value in triggers_cond.values())


def is_triggered(triggers, auto_index):
    for i, trigger in enumerate(triggers):
        if user_automations[auto_index]["tiggered"][i]:
            continue
        if check_conditions(trigger):
            if not any(cond in trigger for cond in ["typed", "process"]):
                user_automations[auto_index]["tiggered"][i] = True
            return True
    return False


def run_action(conditions):
    if conditions == True:
        return True
    else:
        for cond in conditions:
            if check_conditions(cond):
                return True
        return False


monitor = IdleMonitor.get_monitor()


def reset_cond(condition):
    for auto_i in user_automations:
        auto = user_automations[auto_i]
        if auto["trigger"]:
            for j, trigger in enumerate(auto["trigger"]):
                if condition in trigger:
                    user_automations[auto_i]["tiggered"][j] = False


print("Checking for automations")
last_values = {
    "inactivity": 0,
    "hour": "",
    "minute": ""
}
counter = 0
while (True):
    if counter == 10:
        refresh_automations()
    now = datetime.now()
    if monitor.get_idle_time() < last_values["inactivity"]:
        reset_cond("inactivity")
    if now.strftime("%H") != last_values["hour"]:
        reset_cond("hour")
    if now.strftime("%M") != last_values["minute"]:
        reset_cond("minute")
    last_values["inactivity"] = monitor.get_idle_time()
    last_values["hour"] = now.strftime("%H")
    last_values["minute"] = now.strftime("%M")
    for auto_i in user_automations:
        auto = user_automations[auto_i]
        if auto["trigger"] == False:
            continue
        if is_triggered(auto["trigger"], auto_i):
            for action in auto["actions"]:
                if run_action(action["condition"]) and action["action"] in system_actions:
                    for i in range(action["repeat"] if "repeat" in action else 1):
                        params = (action["params"]
                                  if "params" in action else [])
                        system_actions[action["action"]](*params)
    time.sleep(1)
    counter += 1

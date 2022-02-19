import time
import random
import cv2
import webbrowser
import os
from pynput.keyboard import Key, Controller
from playsound import playsound


def lock_screen():
    os.system("gnome-screensaver-command -l")

def rickroll():
    webbrowser.open("https://shattereddisk.github.io/rickroll/rickroll.mp4")
    keyboard = Controller()
    keyboard.press(Key.f11)
    keyboard.release(Key.f11)

def photo():
    cam = cv2.VideoCapture(0)
    result, image = cam.read()
    if result:
        cv2.imwrite('photos/photo-%d.jpg' % random.randint(1111, 9999), image)

def wait(delay):
    time.sleep(min(delay, 10))

def shell_run(cmd):
    os.system(cmd)

def sound(file):
    playsound("audio/%s" % file)

def browser(url):
    webbrowser.open(url)

def send_keys(*keys):
    keycodes = {
        " " : Key.space,
        "ctrl" : Key.ctrl,
        "alt" : Key.alt,
        "shift" : Key.shift,
        "win" : Key.cmd
    }
    keyboard = Controller()
    for key in keys:
        if key in keycodes:
            keyboard.press(keycodes[key])
        else:
            keyboard.press(key.lower())
    for key in keys:
        if key in keycodes:
            keyboard.release(keycodes[key])
        else:
            keyboard.release(key.lower())

def write(text):
    keyboard = Controller()
    for key in text:
        if key.isupper():
            keyboard.press(Key.shift)
        else:
            keyboard.release(Key.shift)
        if key == " ":
            keyboard.press(Key.space)
            keyboard.release(Key.space)
        else:
            keyboard.press(key)
            keyboard.release(key)
    keyboard.release(Key.shift)

def python(code):
    eval(code)

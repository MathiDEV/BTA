# BTA
Basic Triggerable Automations (PoC)

> ⚠️ Disclaimer: This project was done for an event of our first year of EPITECH studies, the goal was to develop a software project within 24 hours, all the good practice of software developpement but we are sure that this project can lead to good evolutions.

My dear teammates ❤️ :

[Izimio](https://github.com/Izimio) - [ZerLock](https://github.com/ZerLock) - [ZiplEix](https://github.com/ZiplEix) - [ImperialCrowns](https://github.com/ImperialCrowns)

## Desktop
BTA Desktop is a Software where you can create automations for your computer.
Automations are stored on a database as JSON object and interpreted by Python script "run_automations.py" in automations directory.

Automations are built on a Scratch like interface thanks to Google visual programming API "Blocky".

![BTA Desktop](https://raw.githubusercontent.com/MathiDEV/BTA/main/assets/BTADesktop.png)

## Mobile

Mobile app is designed with Ionic Framework and based on React.

With the mobile app you can trigger your computer's automations. Your phone becomes a real remote, you'll be able to interact with a lot of functionalities by pairing your phone to your computer with a unique code generated for each user !

![BTA Mobile](https://raw.githubusercontent.com/MathiDEV/BTA/main/assets/BTAMobile.png)

## API

Made with ExpressJS, the API is the heart of our project, you can find the different endpoints below :

- /auth
    - GET **/** (to get all the codes)
    - POST **/register** (to create a brand new code)
    - POST **/connect** (to check if a code given as parameter is found inside the DB)
    - PUT **/regenerate** (to regenerate a code)
- /actions
    - POST **/add**         (to add a new action to the db, inform the name, the action (JSON FORMAT) a block (XML FORMAT) and your code)
    - PUT **/modify_base** (modify the name and color of an action)
    - PUT **/modify_core** (modify the action (JSON) and the block (XML) of an action)
    - GET **/** (get all the actions)
    - POST **/automations** (get all the actions depending on a code)
    - POST **/automations_m** (get all the actions depending on a code for mobile version)
    - PUT **/trigger_up** (modify to 1 the action depending on an id and a code)
    - PUT **/trigger_down** (modify to 0 the action depending on a code)

## Automations

You can create a lot of automations, triggered by a lot of events !

### Triggers : 

|Condition | Type | Description | Example |
|----------|------|-----------|---------|
| hour | **int** | Triggers if the hours value changes to the set value | **"hour": 20** <br>_> Triggers if the time changes to 8:00 p.m._|
| minute | **int** | Triggers if the minutes value changes to the set value | **"minute": 45** <br>_> Triggers every hour at XX:45_|
| inactivity | **int** | Triggers if the PC is idle for n seconds | **"inactivity": 10** <br>_> Triggers after 10 seconds of idling|
| typed | **string** | Triggered if the user types the given sequence of characters.<br>(Can be set to `true`, in which case fires on every keyboard key pressed) | **"typed": "epitech"** <br> _> Triggers if "epitech" is typed on the keyboard_|
| process | **string** | Fires if a process with the specified name starts | **"process": "zsh"** <br>_> Fires on every new instance of "zsh"_|

### Actions :
|Action | Description | Parameters |
|-|--|--|
| lock | Lock the screen | N/A |
| rickroll | Opens a full screen rickroll | N/A |
| photo | Take a picture via the webcam | N/A |
| wait | Pause between two actions | arg1 : delay in seconds (**int**) |
| sound | Plays a sound located in the "audio" folder | arg1: the file name (**string**) |
| send_keys | Execute a key combo | variadic arguments: the key combo to execute (keys are **strings**, special keys are `ctrl`, `alt`, `shift`, `win`) |
| write | Write text on the keyboard | arg1: text to write (**string**) |
| shell_run | Execute a shell command | arg1: the command to execute (**string**) |
| python | Execute python code | arg1: the code to execute (**string**) |



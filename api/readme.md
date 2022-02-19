API
--
to run : npm start

all the endpoints
- /auth
    - **/** (to get all the codes)
    - **/register** (to create a brand new code)
    - **/connect** (to check if a code given as parameter is found inside the DB)
- /actions
    - **/add** (to add a new action to the db, inform the name, the action (JSON FORMAT) a block (XML FORMAT) and your code)
    - **/** (get all the actions)
    - **/automations** (get all the actions depending on a code)
    - **/trigger_up** (modify to 1 the action depending on an id and a code)
    - **/trigger_down** (modify to 0 the action depending on a code)
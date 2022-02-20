API
--
to run : npm start

all the endpoints
- /auth
    - GET **/** (to get all the codes)
    - POST **/register** (to create a brand new code)
    - POST **/connect** (to check if a code given as parameter is found inside the DB)
    - PUT **/regenerate** (to regenerate a code)
- /actions
    - POST **/add** (to add a new action to the db, inform the name, the action (JSON FORMAT) a block (XML FORMAT) and your code)
    - PUT **/modify_base** (modify the name and color of an action)
    - PUT **/modify_core** (modify the action (JSON) and the block (XML) of an action)
    - GET **/** (get all the actions)
    - POST **/automations** (get all the actions depending on a code)
    - POST **/automations_m** (get all the actions depending on a code for mobile version)
    - POST **/trigger_up** (modify to 1 the action depending on an id and a code)
    - POST **/trigger_down** (modify to 0 the action depending on a code)

const JSONGenerator = new Blockly.Generator('JSON');

function generate_action(action, condition, repeat, args) {
    let res_action = { action: action, condition: condition }
    if (repeat != 1)
        res_action.repeat = repeat
    if (args && args.length > 0)
        res_action.params = args
    return JSON.stringify(res_action)
}

function get_parents_block(block) {
    let parents = []
    while (block.parentBlock_) {
        parents.push(block.parentBlock_)
        block = block.parentBlock_
    }
    return parents
}

function get_condition_repeat(block) {
    result = {condition: true, repeat: 1}
    for (parent_block of get_parents_block(block)) {
        if (parent_block.type == "if_event") {
            let event_groups = JSONGenerator.statementToCode(parent_block, 'EVENT_GROUPS');
            result.condition = '[' + event_groups + ']'
        } else if (parent_block.type == "repeat_event") {
            result.repeat = parseInt(parent_block.getFieldValue('OCCURENCES'))
        }
    }
    return result
}

JSONGenerator['evt_any_key'] = function (block) {
    return '"typed": true';
};

JSONGenerator['evt_typed'] = function (block) {
    var textValue = block.getFieldValue('TEXT');
    var code = '"' + textValue + '"';
    return '"typed": ' + code;
};

JSONGenerator['evt_inactivity'] = function (block) {
    var textValue = block.getFieldValue('TIME');
    return '"inactivity": ' + textValue;
};

JSONGenerator['evt_hours'] = function (block) {
    var textValue = block.getFieldValue('TIME');
    return '"hours": ' + textValue;
};

JSONGenerator['evt_minutes'] = function (block) {
    var textValue = block.getFieldValue('TIME');
    return '"minutes": ' + textValue;
};

JSONGenerator['evt_process'] = function (block) {
    var textValue = block.getFieldValue('PROCESS');
    return '"process": "' + textValue + '"';
};

JSONGenerator['event_group'] = function (block) {
    const events =
        JSONGenerator.statementToCode(block, 'EVENTS');
    return '{' + events + '}';
};

JSONGenerator['trigger_block'] = function (block) {
    const event_groups = JSONGenerator.statementToCode(block, 'EVENT_GROUPS');
    const actions = JSONGenerator.statementToCode(block, 'ACTIONS');
    const code = '"trigger" : [' + event_groups + '], "actions" : [' + actions + ']';
    return code;
};

JSONGenerator['act_lock'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("lock", modifiers.condition, modifiers.repeat, false)
};

JSONGenerator['act_picture'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("photo", modifiers.condition, modifiers.repeat, false)
};

JSONGenerator['act_rickroll'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("rickroll", modifiers.condition, modifiers.repeat, false)
};

JSONGenerator['act_sound'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("sound", modifiers.condition, modifiers.repeat, [block.getFieldValue('SOUND')])
};

JSONGenerator['act_send_keys'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("send_keys", modifiers.condition, modifiers.repeat, [block.getFieldValue('COMBO').split("+")])
};

JSONGenerator['act_write'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("write", modifiers.condition, modifiers.repeat, [block.getFieldValue('TEXT')])
};

JSONGenerator['act_exec_shell'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("exec_shell", modifiers.condition, modifiers.repeat, [block.getFieldValue('COMMAND')])
};

JSONGenerator['act_python'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("python", modifiers.condition, modifiers.repeat, [block.getFieldValue('COMMAND')])
};

JSONGenerator['wait'] = function (block) {
    let modifiers = get_condition_repeat(block)
    return generate_action("wait", modifiers.condition, modifiers.repeat, [block.getFieldValue('DELAY')])
};

JSONGenerator['if_event'] = function (block) {
    const actions = JSONGenerator.statementToCode(block, 'ACTIONS');
    return actions
};

JSONGenerator['repeat_event'] = function (block) {
    const actions = JSONGenerator.statementToCode(block, 'ACTIONS');
    return actions
};

JSONGenerator.scrub_ = function (block, code, opt_thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = '';
    if (nextBlock) {
        nextCode = opt_thisOnly ? '' : ',\n' + JSONGenerator.blockToCode(nextBlock);
    }
    return code + nextCode;
};

function get_action() {
    let json_object = '{"name": "Mon action 1",' + JSONGenerator.workspaceToCode(Blockly.mainWorkspace) + '}'
    let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
    json_object = json_object.replace(regex, '');
    json_object = JSON.parse(json_object);
    console.log(JSON.stringify(json_object))
    return JSON.stringify(json_object);
}

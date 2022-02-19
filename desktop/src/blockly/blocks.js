Blockly.Blocks['trigger_block'] = {
    init: function () {
        this.appendDummyInput("ICON").appendField(new Blockly.FieldImage("media/trigger.png", 26, 26, "*"))
        this.jsonInit({
            message0: 'Trigger on %1',
            args0: [{ type: "input_statement", name: "EVENT_GROUPS" }],
            message1: 'Actions %1',
            args1: [{ type: "input_statement", name: "ACTIONS" }],
            colour: "#f5aa42",
        });

    }
};

Blockly.Blocks['trigger_manually'] = {
    init: function () {
        this.appendDummyInput("ICON").appendField(new Blockly.FieldImage("media/tap.png", 26, 26, "*"))
        this.jsonInit({
            message0: 'Trigger manually',
            message1: 'Action %1',
            args1: [{ type: "input_statement", name: "ACTIONS" }],
            colour: "#f5aa42",
        });

    }
};

Blockly.Blocks['event_group'] = {
    init: function () {
        this.jsonInit({
            message0: 'Event %1',
            args0: [{ type: "input_statement", name: "EVENTS" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#ffd333",
        });
    }
};

Blockly.Blocks['evt_any_key'] = {
    init: function () {
        this.jsonInit({
            message0: 'Any key pressed',
            previousStatement: null,
            nextStatement: null,
            colour: "#f56342",
        });

    }
};

Blockly.Blocks['evt_typed'] = {
    init: function () {
        this.jsonInit({
            message0: 'Typed %1',
            args0: [{ type: "field_input", name: "TEXT", text: "EPITECH" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#f56342",
        });

    }
};

Blockly.Blocks['evt_inactivity'] = {
    init: function () {
        this.jsonInit({
            message0: 'Idling during %1 seconds',
            args0: [{ type: "field_input", name: "TIME", text: "25", check: "Number" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#f56342",
        });

    }
};

Blockly.Blocks['evt_hours'] = {
    init: function () {
        this.jsonInit({
            message0: 'Hours indicates %1',
            args0: [{ type: "field_input", name: "TIME", text: "14", check: "Number" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#f56342",
        });

    }
};

Blockly.Blocks['evt_minutes'] = {
    init: function () {
        this.jsonInit({
            message0: 'Minutes indicates %1',
            args0: [{ type: "field_input", name: "TIME", text: "30", check: "Number" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#f56342",
        });

    }
};

Blockly.Blocks['evt_process'] = {
    init: function () {
        this.jsonInit({
            message0: '%1 opened on computer',
            args0: [{ type: "field_input", name: "PROCESS", text: "zsh" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#f56342",
        });

    }
};

Blockly.Blocks['if_event'] = {
    init: function () {
        this.jsonInit({
            message0: 'If events %1',
            args0: [{ type: "input_statement", name: "EVENT_GROUPS" }],
            message1: 'Do %1',
            args1: [{ type: "input_statement", name: "ACTIONS" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#3399ff",
        });

    }
};

Blockly.Blocks['repeat_event'] = {
    init: function () {
        this.jsonInit({
            message0: 'Repeat %1 times %2',
            args0: [{ type: "field_input", name: "OCCURENCES", text: "1", check: "Number" }, { type: "input_statement", name: "ACTIONS" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#3399ff",
        });

    }
};

Blockly.Blocks['wait'] = {
    init: function () {
        this.jsonInit({
            message0: 'Wait %1 second(s)',
            args0: [{ type: "field_input", name: "DELAY", text: "1", check: "Number" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#3399ff",
        });

    }
};


Blockly.Blocks['act_lock'] = {
    init: function () {
        this.jsonInit({
            message0: 'Lock computer',
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });

    }
};

Blockly.Blocks['act_rickroll'] = {
    init: function () {
        this.jsonInit({
            message0: 'Rickroll',
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });

    }
};

Blockly.Blocks['act_picture'] = {
    init: function () {
        this.jsonInit({
            message0: 'Take a picture with webcam',
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });

    }
};

Blockly.Blocks['act_shell_run'] = {
    init: function () {
        this.jsonInit({
            message0: 'Run %1 in terminal',
            args0: [{ type: "field_input", name: "COMMAND", text: "ls -la" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });

    }
};

Blockly.Blocks['act_python'] = {
    init: function () {
        this.jsonInit({
            message0: 'Run %1 with Python',
            args0: [{ type: "field_input", name: "COMMAND", text: "os.system(\"ls -la\")" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });

    }
};

Blockly.Blocks['act_send_keys'] = {
    init: function () {
        this.jsonInit({
            message0: 'Execute key combo %1',
            args0: [{ type: "field_input", name: "COMBO", text: "ctrl+C" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });
    }
};

Blockly.Blocks['act_sound'] = {
    init: function () {
        this.jsonInit({
            message0: 'Play sound %1',
            args0: [{ type: "field_input", name: "SOUND", text: "birds.mp3" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });

    }
};

Blockly.Blocks['act_write'] = {
    init: function () {
        this.jsonInit({
            message0: 'Write %1 on keyboard',
            args0: [{ type: "field_input", name: "TEXT", text: "Hello World" }],
            previousStatement: null,
            nextStatement: null,
            colour: "#7a33ff",
        });
    }
};

// {type:"logic_null",message0:"%{BKY_LOGIC_NULL}",output:null,style:"logic_blocks",tooltip:"%{BKY_LOGIC_NULL_TOOLTIP}",helpUrl:"%{BKY_LOGIC_NULL_HELPURL}"}
// {type:"logic_boolean",message0:"%1",args0:[{type:"field_dropdown",name:"BOOL",options:[["%{BKY_LOGIC_BOOLEAN_TRUE}","TRUE"],["%{BKY_LOGIC_BOOLEAN_FALSE}","FALSE"]]}],output:"Boolean",style:"logic_blocks",tooltip:"%{BKY_LOGIC_BOOLEAN_TOOLTIP}",helpUrl:"%{BKY_LOGIC_BOOLEAN_HELPURL}"}
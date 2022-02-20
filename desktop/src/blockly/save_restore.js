function save_workspace() {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
    console.log(Blockly.Xml.domToText(xml))
    return Blockly.Xml.domToText(xml);
}

function restore_workspace(data) {
    var xml = Blockly.Xml.textToDom(data)
    Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml)
}
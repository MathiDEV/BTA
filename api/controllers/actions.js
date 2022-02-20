var db = require('../config/database.js');

var colors = ['#B03A2E', '#6C3483', '#148F77', '#B7950B', '#AF601A', '#839192', '#2E4053', '#2E86C1', '#943126', '#BA4A00'];

colors[Math.floor(Math.random() * colors.length)];

function check_validity(elem) {

    if (elem == undefined || elem.length == 0)
        return 0
    return 1
}

exports.add = (req, res, next) => {
    const name = req.body.name
    const action = req.body.action
    const block = req.body.block
    const code = req.body.code
    const color = colors[Math.floor(Math.random() * colors.length)];

    if (check_validity(name) && check_validity(action) && check_validity(block) && check_validity(color)) {
        db.execute('SELECT * FROM `code_digit` WHERE code = (?)', [code], function (err, results, fields) {
            if (results[0]) {
                db.execute('INSERT INTO `actions` (name, color, action, block, code) VALUES (?, ?, ?, ?, ?)', [name, color, action, block, code], function (err, results, fields) {
                    if (!err) {
                        res.status(200).json({ name: name, color: color, action: action, block: block, id: results.insertId });
                    }
                    else
                        res.status(404).json([]);
                })
            } else {
                res.status(400).json([]);
            }

        })
    } else {
        res.status(400).json([]);
    }
}

exports.modify_base = (req, res, next) => {
    const name = req.body.name
    const id = req.body.id
    const code = req.body.code
    const color = req.body.color

    if (check_validity(name) && check_validity(id) && check_validity(code) && check_validity(color)) {
        db.execute('SELECT * FROM `actions` WHERE code = ? AND id = ?', [code, id], function (err, results, fields) {
            if (results && results[0]) {
                db.execute('UPDATE `actions` SET name = (?), color = (?) WHERE code = ? AND id = (?)', [name, color, code, id], function (err, results, fields) {
                    if (results.affectedRows != 0) {
                        res.status(200).json({});
                    }
                    else
                        res.status(404).json([]);
                })
            } else {
                res.status(400).json([]);
            }

        })
    } else {
        res.status(400).json([]);
    }
}

exports.delete = (req, res, next) => {
    const id = req.body.id
    const code = req.body.code

    if (check_validity(action) && check_validity(id) && check_validity(code) && check_validity(block)) {
        db.execute('SELECT * FROM `actions` WHERE code = (?) AND id = (?)', [code, id], function (err, results, fields) {
            if (results[0]) {
                db.execute('DELETE FRON `actions` WHERE code = ? AND id = (?)', [code, id], function (err, results, fields) {
                    if (results.affectedRows != 0) {
                        res.status(200).json({});
                    }
                    else
                        res.status(400).json([]);
                })
            } else {
                res.status(40).json([]);
            }

        })
    } else {
        res.status(400).json([]);
    }
}

exports.modify_core = (req, res, next) => {
    const action = req.body.action
    const id = req.body.id
    const code = req.body.code
    const block = req.body.block

    if (check_validity(action) && check_validity(id) && check_validity(code) && check_validity(block)) {
        db.execute('SELECT * FROM `actions` WHERE code = (?) AND id = (?)', [code, id], function (err, results, fields) {
            if (results[0]) {
                db.execute('UPDATE `actions` SET action = (?), block = (?) WHERE code = ? AND id = (?)', [action, block, code, id], function (err, results, fields) {
                    if (results.affectedRows != 0) {
                        res.status(201).json({});
                    }
                    else
                        res.status(400).json([]);
                })
            } else {
                res.status(400).json([]);
            }

        })
    } else {
        res.status(400).json([]);
    }
}

exports.getAllActions = (req, res, next) => {
    db.execute('SELECT * FROM `actions`', function (err, results, fields) {
        if (!err) {
            res.status(200).json(results);
            return
        }
        else
            res.status(400).json({ error: "error" });
    })
}

exports.getAllAutomation = (req, res, next) => {
    const code = req.body.code

    if (check_validity(code)) {
        db.execute('SELECT id, name, color, action, block, is_active FROM `actions` WHERE code = ?', [code], function (err, results, fields) {
            if (results[0]) {
                res.status(202).json(results);
            }
            else
                res.status(404).json([]);
        })

    } else {
        res.status(400).json(req.body);
    }
}

exports.getAllAutomation_m = (req, res, next) => {
    const code = req.body.code

    if (check_validity(code)) {
        db.execute('SELECT id, name, color FROM `actions` WHERE code = ?', [code], function (err, results, fields) {
            if (results[0]) {
                res.status(202).json(results);
            }
            else
                res.status(400).json([]);
        })
    } else {
        res.status(400).json([]);
    }
}

exports.trigger_up = (req, res, next) => {
    const code = req.body.code
    const id = req.body.id

    if (check_validity(id) && check_validity(code)) {
        db.execute('UPDATE `actions` SET is_active = 1 WHERE  code = ? AND id = ?', [code, id], function (err, results, fields) {
            if (results.affectedRows != 0) {
                res.status(200).json({ msg: "ok" });
            }
            else
                res.status(400).json([]);
        })

    } else {
        res.status(400).json([]);
    }
}

exports.trigger_down = (req, res, next) => {
    const code = req.body.code
    if (check_validity(code)) {
        db.execute('SELECT id, actions FROM `actions` WHERE  code = ? AND is_active = 1', [code], function (err, results, fields) {
            const row = results
            db.execute('UPDATE `actions` SET is_active = 0 WHERE code = ? AND is_active = 1', [code], function (err, results, fields) {
                if (results.affectedRows != 0) {
                    res.status(200).json(row);
                }
                else
                    res.status(400).json([]);
            })
        })
    } else {
        res.status(400).json([]);
    }
}

exports.getXml = (req, res, next) => {
    db.execute('SELECT block FROM `actions` WHERE id = ?', [req.body.id], function (err, results, fields) {
        if (results[0]) {
            res.status(200).json(results);
            return
        }
        else
            res.status(400).json([]);
    })
}

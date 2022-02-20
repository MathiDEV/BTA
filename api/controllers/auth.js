
var db = require('../config/database.js');

exports.register = (req, res, next) => {

    let code = Math.floor(100000 + Math.random() * 900000);
    db.execute('INSERT INTO `code_digit` (code) VALUES (?)', [code], function (err, results, fields) {
        if (!err) {
            res.status(201).json({ code });
            return
        }
        else
            res.status(400).json([]);
    })
}

exports.re_generate = (req, res, next) => {
    let previous = req.body.code
    let code = Math.floor(100000 + Math.random() * 900000);

    db.execute('UPDATE `code_digit` SET code = ? WHERE  code = ?', [code, previous], function (err, results, fields) {
        if (results.affectedRows != 0) {
            db.execute('UPDATE `actions` SET code = ? WHERE  code = ?', [code, previous], function (err, results, fields) {
                if (results.affectedRows != 0) {
                    res.status(200).json({ code });
                }
                else
                    res.status(200).json({ code });
            })
        }
        else
            res.status(400).json([]);
    })
}

exports.getAllCodes = (req, res, next) => {

    db.execute('SELECT * FROM `code_digit`', function (err, results, fields) {
        if (!err) {
            res.status(200).json(results);
            return
        }
        else
            res.status(400).json([]);
    })
}

exports.connect = (req, res, next) => {
    let code = req.body.code

    if (code == undefined)
        res.status(400).json(false);
    else {
        db.execute('SELECT * FROM `code_digit` WHERE code = (?)', [code], function (err, results, fields) {
            if (results[0]) {
                res.status(200).json(true);
                return
            }
            else
                res.status(400).json(false);
        })
    }
}

var User = require(`../models/User`)
var jwt = require(`jsonwebtoken`)
var helpers = require(`../helpers/helpers`)

module.exports = {
    create: function (req, res) {
        User.create(req.body)
            .then((result) => {
                res.status(200).json({
                    _id: result._id,
                    name: result.name,
                    email: result.email,
                    password: result.password
                })
            }).catch((err) => {
                res.status(500).send(err)
            });
    },
    findAll: function (req, res) {
        res.send(`findAll`)
    },
    findOne: function (req, res) {
        res.send(`findone`)
    },
    update: function (req, res) {
        res.send(`update`)
    },
    delete: function (req, res) {
        res.send(`delete`)
    },
    login: function (req, res) {
        User.findOne({
            email: req.body.email
        }).then((result) => {
            console.log(result);
            console.log(helpers.compare(req.body.password, result.password));
            
            result ?
                helpers.compare(req.body.password, result.password) ?
                    jwt.sign(req.body, process.env.JWT_SECRET, function (err, encoded) {
                        err ?
                            res.status(500).send(err) :
                            res.status(201).json({
                                access_token: encoded
                            })
                    }) :
                    res.status(400).json({ msg: `Salah email/password` }) :
                res.status(400).json({ msg: `Salah email/password` })
        }).catch((err) => {

        });
    }
};

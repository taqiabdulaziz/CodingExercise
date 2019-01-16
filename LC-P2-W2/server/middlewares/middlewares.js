const jwt = require(`jsonwebtoken`)

module.exports = {
    checkToken: function (req, res, next) {
        if (!req.headers['access-token']) {
            res.status(400).json({msg: `tolong sertakan token jwt yang benar`})
        } else {
            jwt.verify(req.headers['access-token'], process.env.JWT_SECRET, function (err, decoded) {
                if (err) {
                    res.status(400).json({msg: `tolong sertakan token jwt yang benar`})
                } else {
                    req.decoded = decoded
                    next()
                }
            })
        }
    }
};

var bcrypt = require(`bcryptjs`)

module.exports = {
    hash: function (password) {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        return hash
    },
    compare: function (plainPasword, hashedPassword) {
        return bcrypt.compareSync(plainPasword, hashedPassword)
    }
};

var mongoose = require(`mongoose`)
var Schema = mongoose.Schema
var helpers = require(`../helpers/helpers`)

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return User.findOne({
                    email: v,
                    _id: {
                        $ne: this._id
                    }
                }).then((result) => {
                    if (result) {
                        throw "Email sudah ada"
                    }
                }).catch((err) => {
                    throw err
                });
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    foods: [{
        title: String,
        ingredients: [{
            type: String
        }],
        category: {
            type: String,
        }
    }]
})

userSchema.pre('save', function () {
    this.password = helpers.hash(this.password)
    this.foods.category = "WAOW"
})

var User = mongoose.model(`User`, userSchema)
module.exports = User
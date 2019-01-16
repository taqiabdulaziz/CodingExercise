var mongoose = require(`mongoose`)
var Schema = mongoose.Schema
var helpers = require(`../helpers/helpers`)

var foodSchema = new Schema({
    title: String,
    ingredients: [{
        type: String
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: `User`
    }
})

var Food = mongoose.model(`Food`, foodSchema)
module.exports = Food
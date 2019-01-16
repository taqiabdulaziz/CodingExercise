const axios = require(`axios`)
const User = require(`../models/User`)
const jwt = require(`jsonwebtoken`)

module.exports = {
    findAll: function (req, res) {
        axios.get(`https://resepis.herokuapp.com/generate_access_token?github_username=atrastudhi`)
            .then((result) => {

                return axios.get(`https://resepis.herokuapp.com/recipes?access_token=${result.data.access_token}`)
            })
            .then((recipes) => {
                res.status(200).json(recipes.data)

            }).catch((err) => {

                res.status(500).send(err.data)
            });
    },
    update: function (req, res) {

        User.findOne({ email: req.decoded.email })
            .then((result) => {
                result.foods.push(req.body)
                console.log(result);

                return result.save()
            }).then((userData) => {
                res.send(userData.foods)
            }).catch((err) => {
                console.log(err);

                res.send(err)
            });
    }
};

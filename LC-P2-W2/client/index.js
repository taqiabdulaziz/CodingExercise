var app = new Vue({
    el: '#app',
    data: {
        isLogin: false,
        myFoodList: [],
    },
    methods: {
        login() {
            axios.post('http://localhost:3000/login', {
                email: this.email,
                password: this.password
            }).then((result) => {
                this.isLogin = true
                console.log(this.myFoodList);

                swal("Login Success");
                localStorage.token = result.data.access_token
                axios.get('http://localhost:3000/foods', {
                    headers: {
                        "Access-token": localStorage.token
                    }
                })
                    .then((result) => {
                        console.log(result);
                        let obj = {
                            title: "title",
                            ingredients: []
                        }
                        result.data.forEach((element, index) => {
                            obj.title = element.title
                            element.ingredients.split(`--`).forEach((data, indexIngredient) => {
                                obj.ingredients.push(data)

                            })
                            this.myFoodList.push(obj)
                            obj = {
                                title: "title",
                                ingredients: []
                            }

                        });
                        

                    }).catch((err) => {
                        console.log(err);

                    });
            }).catch((err) => {
                console.log(err);

                swal("Username/password salah");

            });
        },
        logout() {

        }
    },
    created() {

    },
})
var studentObj = {
    name: 'awtian',
    age: '23',
    dob: 'october',
    id: '333',
    gender: 'male',
    hobbies: ['code', 'read'],
    setName: n => {
        this.name = n;
    },
    setAge: function(age) {
        this.age = a;
    },
    setDOB: function (dob){
        this.dob = dob;
    },
    setGender: function(g){
        this.gender = g;
    },
    addHobby: function(hob) {
        this.hobbies.push(hob);
    },
    removeHobby: function(hob) {
        let x = this.hobbies.indexOf(hob);
        this.hobbies.splice(x, 1)
    },

    getData: function(){ 
        return `Nama: ${this.name} \nUmur: ${this.age}\nTanggal Lahir: ${this.dob}\nID: ${this.id}\nHobbies: ${this.hobbies}`
    },
}

console.log(studentObj.getData());
studentObj.removeHobby('read');
console.log(studentObj.getData());
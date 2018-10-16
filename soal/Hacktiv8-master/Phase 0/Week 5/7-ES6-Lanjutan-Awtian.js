class Student {
    constructor(n,a,dob,g,id,hob) {
        this.n = n;
        this.a = a;
        this.dob = dob;
        this.id = id;
        this.hob = [hob];
    }

    setName(n) {
        this.n = n;
    }

    setAge(a) {
        this.a = a;
    }

    setDOB(dob){
        this.dob = dob;
    }
    
    setGender(g){
        this.g = g;
    }
    addHobby(hob) {
        this.hob.push(hob);
    }
    removeHobby(hob) {
        let x = this.hob.indexOf(hob);
        this.hob.splice(x, 1)
    }

    getData(){ 
        return `Nama: ${this.n} \nUmur: ${this.a}\nTanggal Lahir: ${this.dob}\nID: ${this.id}\nHobbies: ${this.hob}`
    }
}

//Tests
let awt = new Student(`awt`,23,`october`,`male`,`333`,`code`);
    console.log(awt.getData());
awt.setName(`awtian akbar`);
    console.log('');
    console.log(awt.getData());

awt.addHobby(`reading`);
    console.log('')
    console.log(awt.getData());

awt.removeHobby(`code`);
    console.log('')
    console.log(awt.getData());
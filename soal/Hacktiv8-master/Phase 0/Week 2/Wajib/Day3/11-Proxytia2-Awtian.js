var nama = 'awtian';
var peran = 'Ksatria';
var tahunLahir= 1994;
var umur = 2017 - tahunLahir;
var playerHealth= tahunLahir*Math.random();
var monsterHealth= tahunLahir*Math.random();
var kodeMonster= Math.floor(Math.pow(100, Math.random()));

if(nama===''){
    peran= 'Kacung'
}
else {
    if(peran==='Ksatria') {
    console.log(`Selamat datang di di dunia Proxytia, ${nama}.`) 
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
    }
    
    else if(peran==='Tabib') {    
    console.log(`Selamat datang di di dunia Proxytia, ${nama}.`)
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka :)`)
    }

    else if(peran==='Penyihir') {
    console.log(`Selamat datang di di dunia Proxytia, ${nama}.`)
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenangananmu!`)
    }

    else {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
    }
}

for(var i = 0; i <= tahunLahir; i++) {
    
    if (i%umur==0) {
        console.log(`${peran} ${nama} menyerang monster!`);
        monsterHealth = monsterHealth-umur;
    }

    else if (i%kodeMonster==0) {
        console.log(`monster menyerang ${peran} ${nama}!`);
        playerHealth= playerHealth-kodeMonster;
    }
    else if (i%umur==0 && i%kodeMonster==0) {
        console.log('Health keduanya bertambah')
        monsterHealth= monsterHealth+umur;
        playerHealth= playerHealth+kodeMonster;
    }
}

if (playerHealth>monsterHealth) {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
}
else if (playerHealth<monsterHealth) {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
}

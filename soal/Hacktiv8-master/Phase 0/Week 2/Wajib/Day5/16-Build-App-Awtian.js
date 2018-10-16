console.log(`Kamu dapat memulai game menggunakan function start()`);

var questions= [[`Hewan apa yang paling cepat di dunia?`, `Cheetah`, `Falcon Peregrine`, `Singa`],
                [`Yang mana nih yang paling panjang skoy?`, `Sungai Nil`, `Sungai Amazon`, `Sungai Yangtze`],
                [`Negara mana hayo yang punya hutan terluas?`, `Brazil`, `Kanada`, `Russia`]];

function start() {
    console.log(`Apakah kamu murid Hacktiv8 fase-0? jawab dengan fase0('y'/'n')`)
}

function fase0(ans) {
    if (ans=='y') {
        console.log(`Oke, pertanyaan pertama!`);
        console.log(`Apakah instructor kita baik?`);
        console.log('1. Baik banget');
        console.log('2. Jahat kaya ibu tiri');
        console.log('3. Jahat kaya ibu kos')
        console.log(`Jawab menggunakan j1(angkajawaban)`)
            }
     else {
         console.log('Maaf game ini cuma khusus murid fase-0 hacktiv8!');
    }
    return ''
}

function j1(ans) {
    if (ans = 1) {
        console.log(`Murid yang baik, untuk melanjutkan silahkan masukkan h8() pada console anda!`);
    }

    else {
        console.log('GANTI JAWABAN LO SEKARANG SEBELUM DI LIAT INSTRUCTOR! BURUAN!!!');
    }
    return ''
}

function h8() {
     for (var i=0; i < questions.length; i++) {
         console.log(`${i+1}. ${questions[i][0]}`);
         console.log(`a. ${questions[i][1]}`);
         console.log(`b. ${questions[i][2]}`);
         console.log(`c. ${questions[i][3]}`)
         console.log(`----------------------`);
     }
    console.log(`Untuk menjawab gunakan function jawab(jawaban soal1,jawaban soal 2,jawaban soal3)\n Gunakan tanda kutip dua untuk jawabannya`);
    return ''
}

function jawab(an1,an2,an3) {
    if (an1=='b') {
        console.log('Jawaban soal 1 kamu benar!');
    }
    else {
        console.log('Jawaban soal 1 kamu salah!');
    }

    if (an2=='b') {
        console.log('Jawaban soal 2 kamu benar!');
    }
    else {
        console.log('Jawaban soal 2 kamu salah!');
    }

    if (an3=='a') {
        console.log('Jawaban soal 3 kamu benar!');
    }
    else {
        console.log('Jawaban soal 3 kamu salah!');
    }

    if (an1=='b' && an2=='b' && an3=='a') {
        console.log(`Anda sudah menyelesaikan quiz nga jelas ini. MAKASIH! -awtian`);
    }

    else {
        console.log(`Masih ada yang salah tuh, yuk coba lagi!`);
    }
    return ''
}
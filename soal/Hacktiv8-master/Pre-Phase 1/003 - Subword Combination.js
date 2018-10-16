function getCombinations(value) {
	//write your code here
	let combo = [];
	for (let i = 0; i < value.length; i++) {
		const element = value[i];
		let answer = '';
		for (let j = i; j < value.length; j++) {
			const element = value[j];
			answer += element;
			combo.push(answer);
		}
	}
	console.log(combo);
// 	return combo;
} 

// Contoh 1 : 
getCombinations('cros')

//Result yang diharapkan, ada 10 kombinasi, yaitu : 
// ["c", "cr", "cro", "cros", "r", "ro", "ros", "o", "os", "s"]



// Contoh 2 : 
getCombinations('artic')

//Result yang diharapkan, ada 15 kombinasi, yaitu : 
// ["a", "ar", "art", "arti", "artic", "r", "rt", "rti", "rtic", "t", "ti", "tic", "i", "ic", "c"]



// Contoh 3 : 
getCombinations('darwin')

//Result yang diharapkan, ada 21 kombinasi, yaitu : 
// ["d", "da", "dar", "darw", "darwi", "darwin", "a", "ar", "arw", "arwi", "arwin", "r", "rw", "rwi", "rwin", "w", "wi", "win", "i", "in", "n"]


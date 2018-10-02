
function tampilAngkaGanjil(stringAngka){
    var temp = ''
    for (let i = 0; i < stringAngka.length; i++) {
        if (parseInt(stringAngka.charAt(i))%2==1) {
            temp += stringAngka.charAt(i)
        }
    }
    console.log(temp);
  }
//Test case
tampilAngkaGanjil('12345678') // '1357'
tampilAngkaGanjil('1346789') // '1379'
tampilAngkaGanjil('1298967') // '1997'
tampilAngkaGanjil('43447453') // '3753'
tampilAngkaGanjil('46824') // ''

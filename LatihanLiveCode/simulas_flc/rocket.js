/*
DOMINO CARD

Buatlah sebuah function bernama domino yang menerima satu parameter berupa number. function domino akan membuat sebuah kotak dengan simbol # dengan panjang dan tinggi sesuai number parameter. Kemudian, di bagian paling tengah dari kotak dituliskan kembali simbol # sepanjang sizenya dan setelah kotak terbagi dua maka di masing-masing sub kotak pada bagian tengahnya dituliskan angka domino.

NOTE ANGKA YANG BERADA DITENGAH SUB KOTAK ADALAH ANGKA RANDOM DARI ANGKA DOMINO (1-6)

Contoh untuk input 9:

#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
Contoh untuk input 10:

##########
#        #
#    6   #
#        #
##########
##########
#        #
#    2   #
#        #
##########
*/

function domino(size) {
  var result = '';
  var mid1;
  var mid2;
  //find mid from size
  if (size % 2 !== 0) {
    mid1 = Math.ceil(size/2-1);
    var midTop = Math.ceil(mid1/2);
    var midBot = mid1 + midTop;
  }
  else {
    mid1 = size/2-1;
    mid2 = size/2;
    midTop = Math.ceil(mid1/2);
    midBot = mid2 + midTop;  
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size-1) {
        result += '#';
      }
      else if (i === mid1 || i === mid2) {
        result += '#';
      }
      else {
        if (j === 0 || j === size-1) {
        result += '#';
        }
        else if (i === midTop && j === mid1) {
          result += Math.ceil(Math.random() * 6);          ;
        }
        else if (i === midBot && j === mid1) {
          result += Math.ceil(Math.random() * 6);
        }
        else {
          result += ' ';
        }
      }
    }
    console.log(result);
    result = '';
  }
}

domino(9);
/*
NOTE: angka di dalam domino bisa berbeda
#########
#       #
#   3   #
#       #
#########
#       #
#   5   #
#       #
#########
*/

domino(12);
/*
NOTE: angka di dalam domino bisa berbeda
############
#          #
#    5     #
#          #
#          #
############
############
#          #
#    1     #
#          #
#          #
############
*/

domino(10);
/*
NOTE: angka di dalam domino bisa berbeda
##########
#        #
#    6   #
#        #
##########
##########
#        #
#    6   #
#        #
##########
*/

domino(21);
/*
NOTE: angka di dalam domino bisa berbeda
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
#                   #
#                   #
#                   #
#                   #
#         4         #
#                   #
#                   #
#                   #
#                   #
#####################
*/
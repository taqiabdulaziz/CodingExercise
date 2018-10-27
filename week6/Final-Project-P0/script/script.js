/*eslint-disable*/
var url = "";
var submitData;
var xhttp = new XMLHttpRequest();
var arr;
var checkFromHome = false;


function submitAction(params) {
  deleteElement();
  submitData = document.getElementById("first_name").value;
  url =
    "https://newsapi.org/v2/everything?q=" +
    submitData +
    "&apiKey=553ba9189dc8497d94184f651eb212ea";
  load(url);
}

if (checkFromHome == false) {
  url =
    "https://newsapi.org/v2/everything?q=" +
    parent.document.URL.substring(
      parent.document.URL.indexOf("?") + 1,
      parent.document.URL.length
    ) +
    "&apiKey=553ba9189dc8497d94184f651eb212ea";
  load(url);
  checkFromHome = true;
  //test
}

function arrowUp() {
  document.body.scrollTop = 0 //BUAT SAFARI
  document.documentElement.scrollTop = 0; //BUAT CHROME DKK
}

//PASSING DATA DARI HALAMAN UTAMA KE HALAMAN PENCARIAN
function passData(params) {
  submitData = document.getElementById("first_name1").value;
  window.location.href = "search.html?" + submitData;
  url =
    "https://newsapi.org/v2/everything?q=" +
    "awkarin" +
    "&apiKey=553ba9189dc8497d94184f651eb212ea";
  load(url);
}

//BUAT HTTP REQUEST KE JSON URL
function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      arr = JSON.parse(xhr.responseText);
      for (let i = 0; i < arr.articles.length; i++) {
        addElement(arr, i);
      }
    }
  };
  
  xhr.open("GET", url, true);
  xhr.send("");
}

//ADDING HTML STRUCTURE AND APPLY DATA
function addElement(arr, num) {
  var imgSrc;
  var description;

  var wrapper = document.getElementById("wrapper");
  var newDiv1 = document.createElement("div");
  var newDiv2 = document.createElement("div");
  var newDiv3 = document.createElement("div");
  var newDiv4 = document.createElement("div");
  var newDiv5 = document.createElement("div");
  var newDiv6 = document.createElement("div");
  var newDiv7 = document.createElement("div");
  var img1 = document.createElement("img");
  var desc = document.createElement("p");
  var link1 = document.createElement("a");

  wrapper.className = "container";
  newDiv1.className = "row";
  newDiv2.className = "col s12 m12";
  newDiv3.className = "card horizontal";
  newDiv4.className = "card-image";
  newDiv5.className = "card-stacked";
  newDiv6.className = "card-content";
  newDiv7.className = "card-action";
  img1.className = "responsive-img";

  //APPEND PROCESS

  wrapper.appendChild(newDiv1);
  newDiv1.appendChild(newDiv2);
  newDiv2.appendChild(newDiv3);
  newDiv3.appendChild(newDiv4);
  newDiv4.appendChild(img1);
  newDiv3.appendChild(newDiv5);
  newDiv5.appendChild(newDiv6);
  newDiv6.appendChild(desc);
  newDiv5.appendChild(newDiv7);
  newDiv7.appendChild(link1);

  link1.href = arr.articles[num].url

if (arr.articles[num].urlToImage == null) {
  img1.src = "asset/placeholder.jpeg"
} else {
  imgSrc = arr.articles[num].urlToImage;
  img1.src = imgSrc;
  
}

  description = document.createTextNode(arr.articles[num].description);
  linkText = document.createTextNode("Link To Source")
  
  link1.appendChild(linkText)
  desc.appendChild(description);

  var x = document.getElementById("wrapper1");

  document.body.insertBefore(wrapper, x);
}

function deleteElement(params) {
  var wrapper = document.getElementById("wrapper");
  if (wrapper != "") {
    wrapper.innerHTML = "";
  }
}

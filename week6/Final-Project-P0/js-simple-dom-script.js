/*eslint-disable*/
var url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=553ba9189dc8497d94184f651eb212ea"
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("data").innerHTML = myObj.articles;
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
// JavaScript Code Here
let color1 = "black";
setInterval(function(){
    if(color == "black"){
        document.getElementById("title").style.color = "white";
        color = "white";
    } else {
        document.getElementsById("title").style.color = "black";
        color1 = "black";
    }
}, 1000);
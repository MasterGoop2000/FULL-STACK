// JavaScript Code Here
let color = "black";
setInterval(function(){
    if(color == "black"){
        document.getElementById("title").style.color = "white";
    } else {
        document.getElementById("title").style.color = "black";
    }
})
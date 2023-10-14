// JavaScript Code Here
let color = "black";
setInterval(function(){
    if(color == "black"){
        document.getElementsByClassName("title").style.color = "white";
    } else {
        document.getElementsByClassName("title").style.color = "black";
    }
})
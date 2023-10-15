// JavaScript Code Here
let color = "black";
setInterval(function(){
    if(color == "black"){
        let thing = document.getElementsByClassName("title").style.color = "white";
        for(var i = 0; i < thing.length; i++){
            collection[i].style.color = "white";
        }
        color = "white";
    } else {
        let thing = document.getElementsByClassName("title").style.color = "white";
        for(var i = 0; i < thing.length; i++){
            collection[i].style.color = "black";
        }
        color = "black";
    }
}, 1000);
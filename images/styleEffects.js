// JavaScript Code Here
let color1 = "black";
setInterval(function(){
    if(color == "black"){
        let thing = document.getElementsByClassName("title").style.color = "white";
        for(var i = 0; i < thing.length; i++){
            collection[i].style.color = "white";
        }
        color1 = "white";
    } else {
        let thing = document.getElementsByClassName("title").style.color = "white";
        for(var i = 0; i < thing.length; i++){
            collection[i].style.color = "black";
        }
        color1 = "black";
    }
}, 1000);
// JavaScript Code Here
let color1 = "black";
let thing = document.getElementsByClassName("title");
setInterval(function(){
    if(color == "black"){
        
        for(var i = 0; i < thing.length; i++){
            collection[i].style.color = "white";
        }
        color1 = "white";
    } else {
        
        for(var i = 0; i < thing.length; i++){
            collection[i].style.color = "black";
        }
        color1 = "black";
    }
}, 1000);
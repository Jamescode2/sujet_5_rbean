window.onload = function() {
    let square = document.getElementById("square");
    let blue = document.getElementById("blue");
    let red = document.getElementById("red");
    let yellow = document.getElementById("yellow");
    let green = document.getElementById("green");
    let black = document.getElementById("black");
    
    
    
    blue.addEventListener("mouseover", function () {
        square.style.backgroundColor = "blue";
    });
    
    red.addEventListener("mouseover", function () {
        square.style.backgroundColor = "red";
    });
    
    yellow.addEventListener("mouseover", function () {
        square.style.backgroundColor = "yellow";
    });
    
    green.addEventListener("mouseover", function () {
        square.style.backgroundColor = "green";
    });
    
    black.addEventListener("mouseover", function () {
        square.style.backgroundColor = "black";
    });
     
}

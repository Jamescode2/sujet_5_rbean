document.title = "My first (dynamic) webpage";
document.querySelector("h2:first-of-type").addEventListener('click', function() {
    alert("Sir Edmund Spenser (1590)");
});
document.querySelector("h2:last-of-type").addEventListener('click', function(){
    alert("Folk Song (unknown)");
});

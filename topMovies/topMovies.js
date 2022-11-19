let update = document.getElementById('update');
let ol = document.querySelector('ol');

update.addEventListener('click', () => {
    document.querySelector('h2').textContent = "2019 edition";

    let newLi = document.createElement("li");
    newLi.textContent = "Avengers: Endgame (2019)";

    let first = ol.firstElementChild;
    ol.insertBefore(newLi, first);

    ol.removeChild(ol.lastElementChild);
})




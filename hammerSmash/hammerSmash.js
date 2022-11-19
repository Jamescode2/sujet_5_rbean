window.onload = function () {
    let img = document.querySelector('tr td img');

    img.addEventListener('click', () => {
        let row = Math.floor(Math.random() * 3 + 1);
        let column = Math.floor(Math.random() * 3 + 1);
        document.querySelector('tr:nth-child(' + row + ') td:nth-child(' + column + ')').appendChild(img);
    })
}

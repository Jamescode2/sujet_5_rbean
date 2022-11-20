window.onload = function () {
    let total = parseFloat(document.getElementById('total').textContent);

    function checked(n) {
        let tr = document.querySelector('tr:nth-child(' + n + ')');
        let first = document.querySelector('tr:nth-child(' + n + ') input[type="checkbox"]');

        first.addEventListener('click', () => {
            first.setAttribute("checked", "");
            if (first.checked == true) {
                total += parseFloat(tr.lastElementChild.textContent.substring(1));
                document.getElementById('total').innerHTML = total;
            } else {
                total -= parseFloat(tr.lastElementChild.textContent.substring(1));
                document.getElementById('total').innerHTML = total;
            }
        });
    }
    checked(1);
    checked(2);
    checked(3);
    checked(4);
    checked(5);
    checked(6);
}


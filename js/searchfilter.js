function searchProducts() {
    var input, filter, ul, li, h4, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.content');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        h4 = li[i].getElementsByTagName('h4')[0];
        txtValue = h4.textContent || h4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sortProducts(order) {
    var sortedProducts = products.slice(); 
    sortedProducts.sort(function (a, b) {
        var priceA = parseFloat(a.price.replace('€ ', ''));
        var priceB = parseFloat(b.price.replace('€ ', ''));

        if (order === 'asc') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });


    document.querySelector('.content').innerHTML = '';
    sortedProducts.forEach(createProduct);
}
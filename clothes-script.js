// Sorting Function
document.getElementById('sort-price').addEventListener('change', function () {
    let products = [...document.querySelectorAll('.product-box')];
    let container = document.querySelector('.products-container');
    let order = this.value;

    products.sort((a, b) => {
        let priceA = parseInt(a.getAttribute('data-price'));
        let priceB = parseInt(b.getAttribute('data-price'));

        return order === 'low-to-high' ? priceA - priceB : priceB - priceA;
    });

    container.innerHTML = '';
    products.forEach(product => container.appendChild(product));
});

// Price Filtering
document.getElementById('price-range').addEventListener('input', function () {
    let maxPrice = parseInt(this.value);
    document.getElementById('price-value').textContent = `$${maxPrice}`;

    document.querySelectorAll('.product-box').forEach(product => {
        let price = parseInt(product.getAttribute('data-price'));
        product.style.display = price <= maxPrice ? 'block' : 'none';
    });
});

// Buy Now Button Click Event
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function () {
        alert("Feature Coming Soon! Stay Tuned.");
    });
});

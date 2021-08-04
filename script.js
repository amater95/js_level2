const products = [
    { id: 1, title: 'мышь', price: 200 },
    { id: 2, title: 'клавиатура', price: 500 },
    { id: 3, title: 'монитор', price: 15000 },
    { id: 4, title: 'колонки', price: 3500 },
    { id: 5, title: 'сетевая плата', price: 750 },
    { id: 6, title: 'видеокарта', price: 100000 },
    { id: 7, title: 'блок питания', price: 5000 },
    { id: 8, title: 'куллер', price: 1000 },
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}руб</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

/*const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};*/


const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
};


renderPage(products);

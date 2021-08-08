class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = []; //массив товаров с версткой
        this._fetchProducts();
        this.render(); //вывод товаров на страницу
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'мышь', price: 200 },
            { id: 2, title: 'клавиатура', price: 500 },
            { id: 3, title: 'монитор', price: 15000 },
            { id: 4, title: 'колонки', price: 3500 },
            { id: 5, title: 'сетевая плата', price: 750 },
            { id: 6, title: 'видеокарта', price: 100000 },
            { id: 7, title: 'блок питания', price: 5000 },
            { id: 8, title: 'куллер', price: 1000 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    totalSum() {
        let sum = 0;
        this.goods.forEach((product) => {
            sum += product.price;
        });
        document.querySelector('.sum').innerHTML = `Сумма заказа: ${sum} рублей`;
    }
}


class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
    }
    render() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <p>${this.price}руб</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class CartList {
    constructor() {

    }
    // метод для очистки корзины
    clearAll() {

    }
    //метод подсчета суммы купленных товаров
    totalSum() {

    }
    //метод оплаты товаров
    pay() {

    }
}

class CartItem {
    constructor() {

    }
    //удаляет один элемент из корзины
    deleteItem() {

    }
    //добавляет один элемент, который уже есть в корзине
    sumItem() {

    }

}

let list = new ProductList();
list.totalSum();

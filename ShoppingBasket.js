class ShoppingBasket {
    constructor() {
        this.items = []
    };
    addItem(item) {
        this.items.push(item);
    };
    getTotalPrice() {
        if (this.items.length == 0) { 
            return 0;
        } else {
            let total = 0;
            let prices = this.items.map((item) => item.getPrice());
            prices.forEach((i) => total += i);
            return total
    }
};
};

module.exports = ShoppingBasket;
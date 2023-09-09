class Candy { 
    constructor(name, price) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string')
        }

        if (typeof price !== 'number') {
            throw new Error('Price must be a number')
        }
        
        this.name = name; // string
        this.price = price; // number
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
};

module.exports = Candy;

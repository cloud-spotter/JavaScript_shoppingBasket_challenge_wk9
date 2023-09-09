const Candy = require('./candy.js')

// Commented-out parts were for hardcoded examples before I'd written the Candy class
describe ('Candy', () => {
    it('constructs with a name and a price attribute', () => {
        // let candyDouble = {
        //     name: () => 'Mars',
        //     price: () => 5
        // }
        const candy = new Candy('Mars', 5);
        expect(candy.name).toBe('Mars'); 
        expect(candy.price).toBe(5);
    })
    
    it('returns the name of a candy object when #getName is called', () => {
        // let candyDouble = {
        //     getName: () => 'Mars',
        //     getPrice: () => 5
        // } 
        const candy = new Candy('Mars', 5);
        expect(candy.getName()).toBe('Mars');
    });

    it('returns the price of a candy object when #getPrice is called', () => {
        const candy = new Candy('Mars', 5);
        expect(candy.getPrice()).toBe(5);
    });

    // Additional tests to check if the wrong data types are passed to Candy
    it('should throw an error if name is not a string', () => {
        expect(() => new Candy(123, 5)).toThrow('Name must be a string');
    });

    it('should throw an error if price is not a number', () => {
        expect(() => new Candy('Mars', 'five')).toThrow('Price must be a number');
    });
})
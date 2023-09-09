const ShoppingBasket = require('./ShoppingBasket.js');

describe ('ShoppingBasket', () => {
    // Declare basket variable without initialising, so it can be assigned/used
    // in each test with a new ShoppingBasket instance
    let basket;
    
    //Define mock Candy object(s) with methods to mimic the real Candy class behaviour
    //This isolates the unit being tested (ie ShoppingBasket) from external dependencies 
    const mockMarsCandy = {
        getName: () => "Mock Mars",
        getPrice: () => 4.99,
    };
    const mockFlakeCandy = {
        getName: () => "Mock Flake",
        getPrice: () => 3.99,
    }
    // Establish a new ShoppingBasket instance for each test, 
    // so tests don't affect each other.  
    beforeEach(() => {
        basket = new ShoppingBasket();
    });
    
    // Tests for behaviour
    it(`#getTotalPrice returns the total price of items in the basket, 
        when one Candy item is added to it`, () => {
        basket.addItem(mockMarsCandy);
        expect(basket.getTotalPrice()).toBe(4.99);
        });
    
    it(`#getTotalPrice returns the total price of all items in the basket,
        when multiple different Candy items are added to it`, () => {
        basket.addItem(mockMarsCandy);
        basket.addItem(mockFlakeCandy);
        expect(basket.getTotalPrice()).toBe(8.98)
    });

    it(`#getTotalPrice returns 0,  
    if the basket is empty`, () => {
    expect(basket.getTotalPrice()).toBe(0);
    });
});
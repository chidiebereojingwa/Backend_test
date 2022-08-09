const lib = require("../lib")

describe('absolute', () => {

    // For Positive numbers
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1)
    });
    
    // For negative numbers
    it('should return a negative number if input is negative', () => {
        const result = lib.absolute(-2);
        expect(result).toBe(2)
    });
    
    // For zero numbers
    it('should return a 0 number if input is 0', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0)
    });
})


// Testing Strings

describe('greet', ()=>{
    it('it should return the greeting message', () => {
       const result = lib.greet('Chidi');
       expect(result).toMatch(/Chidi/);
    })
})


// Testing arrays 

describe("getCurrencies", () => {
    it('should return arrays of currencies', () => {
        const result = lib.getCurrencies();

        // Proper way
        expect(result).toContain('USD');
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
    })
});

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

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello()).toBe('string');
    })})
    it('should return a string when called', function() {
    expect(typeof sayHello()).toBe("string");
});
    it('should return the string "Hello, Yish!" when executed', function() {
    expect(sayHello("Yish")).toBe("Hello, Yish!");
});
    it('should return the string "Hello, Blaze!" when executed', function() {
    expect(sayHello("Blaze")).toBe("Hello, Blaze!");
});
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, World!" when executed', function(){
    expect(sayHello()).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed', function() {
    expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed', function(){
    expect(sayHello(false)).toBe("Hello, World!")
});

describe('isFive', function(){
    it('should be a defined function', function(){
     expect(isFive(5)).toBe(true)
    })
    it('should return a boolean regardless of input', function(){
    expect(isFive()).toBe(false)
    })
    it('should return true when 5 is executed', function(){
        expect(isFive(5)).toBe(true)
    })
});

describe('isEven', function() {
    it('should return a boolean regardless of input', function () {
        expect(isEven()).toBe(false)
    })
    it('should return true when executed with 2', function(){
        expect(isEven(2)).toBe(true)
    })
    it('should return true when executed with -4', function(){
        expect(isEven(-4)).toBe(true)
    })
    it('should return false when executed with 3', function(){
        expect(isEven(3)).toBe(false)
    })
    it('should return true when executed with "8"', function(){
        expect(isEven("8")).toBe(true)
    })
});

describe('isVowel', function(){
    it('should return a boolean', function() {
    expect(isVowel()).toBe(false)
    })
    it('should not accept true', function() {
    expect(isVowel(true)).toBe(false)
    })
    it('should not accept false', function () {
        expect(isVowel(false)).toBe(false)
    })
    it('should not accept an empty value', function() {
     expect(isVowel()).toBe(false)
    })
});

describe('add', function(){
    it('should be a defined function', function(){
        expect(typeof add).toBe('function')
    })
    it('should return NaN when not given an input', function() {
        expect(add()).toBeNaN()
    })
    it('should return 5 when given 2 and 3', function(){
     expect(add(2,3)).toBe(5)
    })
    it('should return -12 when given -3 and -9', function() {
        expect(add(-3, -9)).toBe(-12)
    })
    it('should return NaN when given "banana" and "split"', function() {
        expect(add("banana", "split")).toBeNaN()
    })
    it('should return 11 when given 5 and 6', function() {
        expect(add(5, 6)).toBe(11)
    })
});

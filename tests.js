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
    it('should return the string "Hello, Pat!" when executed', function() {
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
    });
    it('should return a boolean regardless of input', function(){
    expect(isFive()).toBe(false)
    });
});

describe('isEven', function() {
    it('should return a boolean regardless of input', function () {
        expect(isEven()).toBe(false)
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
})

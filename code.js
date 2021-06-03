// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}



function sayHello(name) {
    if (typeof(name) != "string"){
        return "Hello, World!";
    }
        return "Hello, " + name + "!";
}

function isFive(input){
    return (input == 5);
}

function isEven(x){
    return (x % 2 === 0);
}

function isVowel(char) {
    return ( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === "A" || char === 'E' || char === 'I' || char === 'O' || char === "U")
}

function add(x,y){
    return Number(x) + Number(y)
}




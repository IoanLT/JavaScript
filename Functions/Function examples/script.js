
// function declaration (allows hoisting)
function greet(){
    console.log("This is a function declaration");
}
// calling the function
greet();
greet();
greet();

// function expression (doesn't allow hoisting)
const speak = function(){
    console.log("This is a function expression");
};
// calling the function
speak();
speak();
speak();


// parameters and arguments
const greeting = function(name, time){
    console.log(`Good ${time} ${name}!`);
};
// calling the function
greeting("Nelu", "morning");


// passing default values to the function parameters
const defGreeting = function(name = "Neneci", time = "evening"){
    console.log(`Good ${time} ${name}!`);
};
// calling the function without arguments
defGreeting();
// calling the function with arguments
defGreeting("Doru", "morning");


// Returning values
const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};

console.log(calcArea(5));


// Arrow functions
const calcArea2 = (radius) => {
    let area = 3.14 * radius**2;
    return area;
}
// Can also be written 
// const calcArea2 = radius => 3.14 * radius**2;

console.log(calcArea2(7));
const name = "Nelu";

// functions
const greet = () => "Hello";

let resultOne = greet();
console.log(resultOne);

// Methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);


// Callback and forEach

let people = ["mario", "luigi", "ryu", "nelu", "chun-li"];

people.forEach(function(person, index){
    console.log(person, index);
});


const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

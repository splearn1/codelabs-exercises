//GLOBAL VARIABLES can be used anywhere
//LOCAL VARIABLES can only be used within a block of code

function user() {
    let firstName = "John";
    let lastName = "Smith";
    let age = 25;
    let country = "England";
    console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`);
}

let firstName = 'James';

user();

let game = "Sonic";

if(true) {
    let game = "Mario";
    console.log(game);
}

console.log(game);
const prompt = require("prompt-sync")();
// const prompt = require("prompt-sync")({ sigint: false });
// { sigint: true } is optional but () is required
function f1() {

    let name = prompt("Please ener your name and press Enter:");
    let age = prompt("How old are you?");
    console.log(`Hello ... ${name}! \n You are ${age} years old. `);
    // console.log(`After 20 yerars, you will be ${age + 20} years old. `);
    console.log(`After 20 yerars, you will be ${Number(age) + 20} years old. `);

}

f1();
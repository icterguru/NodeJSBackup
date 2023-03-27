const prompt = require("prompt-sync")();
// const prompt = require("prompt-sync")({ sigint: false });
// { sigint: true } is optional
function f1() {

    let name = prompt("Please ener your name and press Enter:");
    console.log(`Hello ... ${name}! \nHow are you doing today?`);
}

f1();
const prompt = require("prompt-sync")({ sigint: true });

function f1() {

    let name = prompt("Please ener your name and press Enter:");
    console.log(`Hello ... ${name}! \nHow are you doing today?`);
}

f1();
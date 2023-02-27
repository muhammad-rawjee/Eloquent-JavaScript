const prompt = require('prompt-sync')();
let theNum = Number(prompt("Pick a number: "));

if (!Number.isNaN(theNum)){
    console.log("Number is: " + theNum * theNum);
}

let number = 0;
while (number <= 12){
    console.log(number)
    number += 2
}

let yourName;

do {
    yourName = prompt("Who are you?");
} while(!yourName);

console.log(yourName);

for (let number = 0; number <= 12; number += 2){
    console.log(number);
}
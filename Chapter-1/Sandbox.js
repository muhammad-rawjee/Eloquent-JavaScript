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
console.log();
let result = 1;

for (let counter = 0; counter < 10; counter += 1){
    result *= 2;
}

console.log(result);

for (let current = 20; current += 1;){
    if (current % 7 == 0){
        console.log(current);
        break;
    }
}
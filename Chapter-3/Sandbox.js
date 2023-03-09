const square = function(x){
    return x * x;
}

console.log(square(12));

const power_1 = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power_1(2,10));

const hummus = (factor) => {
    const ingredient = (amount, unit, name) => {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += "s"
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
}

hummus(2);

/*
function chicken(){
    return egg();
}

function egg(){
    return chicken();
}

console.log(chicken() + " came first");
*/

function minus(a, b){
    if (b === undefined){
        return -a;
    }
    else{
        return a - b;
    }
}

console.log(minus(4,2));

// Closure

function multiplier(factor){
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(10));

// Recursion 

function power(base, exponent){
    if (exponent == 0){
        return 1;
    }
    else{
        return base * power(base, exponent - 1);
    }
}

console.log(power(2,3));


function findSolution(target){
    function find(current, history){
        if (current == target){
            console.log(`${history}`)
            return history
        }
        else if (current > target){
            console.log(`${history}`)
            return null;
            
        }
        else{
            console.log(`${history}`)
            return find(current * 3, `(${history} * 3)`) ||
                   find(current + 5, `(${history} + 5)`)
            
        }
    }
    return find(1, "1")
}

console.log(findSolution(14));

function printFarmInventory(cows, chickens){
    let cowString = String(cows);
    while (cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chickens);
    while (chickenString.length < 3){
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}



const zeroPad = (number, width) => {
    let string = String(number);
    while (string.length < width){
        string = "0" + string;
    }
    return string;
};

const printFarm = (cows, chickens, pigs) => {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
};

printFarm(7, 16, 3);


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

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2,2));

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

const countChar = (stringVal, countChar) => {
    count = 0
    for (let i = 0; i < stringVal.length; i ++){
        if (stringVal[i] == countChar){
            count++;
        }
    }
    return count;
};

console.log(countChar("ABBBBBBBBBBBBBBB", "B"));

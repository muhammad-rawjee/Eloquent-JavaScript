size = 8;

odd_pattern = ""
even_pattern = ""

for (let counter = 0; counter < size; counter++){
    if (counter % 2 == 0){
        odd_pattern += " ";
        even_pattern += "#";
    }
    else{
        odd_pattern += "#";
        even_pattern += " ";
    }
}

for (let counter = 0; counter < size; counter++){
    if (counter % 2 == 0){
        console.log(odd_pattern);
    }
    else{
        console.log(even_pattern);
    }
}

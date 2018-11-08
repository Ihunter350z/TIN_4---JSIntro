function palindrome(input){
    let x = input.lenght;

    for (i = 0; i< x; i++){
        if(input[i] !== input[x-1-i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("Dod"));
console.log(palindrome("regular"));
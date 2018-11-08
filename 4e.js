function longest(input) {

    let arr = input.split(" ");
    let res = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > res.length) {
            res = arr[i];
        }
    }
    return res;
}


output = longest("the definition of the longest word is required");
console.log(output)
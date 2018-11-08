function binary(num, arr) {
    var min = 0;
    var max = arr.length - 1;
    while (min <= max) {
        m = Math.floor((min + max) / 2);
        if (arr[m] === num)
            return m;
        else if (arr[m] < num)
            min = m + 1;
        else
            max = m - 1;
    }
    return -1;
}
let num = 17;
let arr = [10, 12, 15, 17, 26, 32];
console.log(binary(num, arr));
function amountToCoins(num, arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (num >= arr[i]) {
            a = Math.floor(num / arr[i]);
            c = a * arr[i];
            num = (num - c);
            for (let b = 0; b < a; b++)
                res.push(arr[i]);
        }
    }
    return res;
}
console.log(amountToCoins(43, [25, 10, 5, 2, 1]));
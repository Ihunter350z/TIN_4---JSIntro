function iterative (n){
    var res =1;
    for (var i = 2; i<=number; i++){
        res*= i;
    }
    return res;
}
console.log(iterative(5));


function recursive(n){ return n<2 ? 1:n* recursive(n-1);};
console.log(recursive(3));
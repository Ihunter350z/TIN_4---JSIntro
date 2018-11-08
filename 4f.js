function prime(input) {
  for(var i = 2; i < input; i++)
    if(input % i === 0) return false;
  return input !== 1 && input !== 0;
}

console.log(prime(9));
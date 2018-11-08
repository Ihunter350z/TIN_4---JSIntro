function s(arr){
arr.sort();
return [arr[1],arr[arr.length-2]];

}

console.log(s([5,10,15,20]));
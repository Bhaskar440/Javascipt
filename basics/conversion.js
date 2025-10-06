let a = 0;
console.log(typeof(a))
//first a= 5, typeof is number, then a = "5",typeof is string, typeof a="5abc" is also string
let b = Boolean(a);
console.log(typeof(b));
//after conversion typeof is number
console.log(b);
//after printing the b the output is NaN which is not a number 
// null me same cheez return krri object with false and 0 me bhi smae 
var f = 5
var p = String(f)
console.log(typeof p);
//yaha type of me string hai value me 5 which is a number
console.log("4"+ 4+ 4);
//yaha shuru me string hai to 444 dedia 
console.log(4+4+"4");
//yaha 84 aagya 
console.log(4+"4"+4);
//yaha 444 aagya 
console.log(true)
console.log("2">10);
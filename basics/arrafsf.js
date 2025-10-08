let myarr = [1,54,5,5,1]
console.log(myarr.push(4));
const arr= new Array(1,3,4,5,6,5,5,5,5,5,5,5,678,87,5,4)
console.log(arr) //without loop whole array will get printed
arr.pop()
console.log(arr)
const prr = arr.join();
console.log(prr)//here string k form me ajata because output me braces ni aate or normal array print krne me [] so that's the difference 
//then comes the slice and splice array function
const qrr = ["a","b","c"]
const crr = [true,false]
//qrr.push(crr);//idhar second array merge hok array as an element aagyi
// qrr.concat(crr)
// const drr= qrr.concat(crr)
// const drr = [...qrr,...crr] ye the array spread krna  
// console.log(drr) 
const an_array=[0,[1],[4,34,3],5]
const the_array = an_array.flat(Infinity)//yaha seedha ye array k saare elements fekta kch na daaye baaye seedha output
console.log(the_array)
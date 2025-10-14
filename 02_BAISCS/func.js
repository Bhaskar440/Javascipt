// function add2(num1,num2) ye function jb 2 hi item ho keval add krne k liye ya limited number
// {
//     console.log(num1+num2)
// }
// add2(3,4);
// const add1=()=>{
//     console.log(num1+num2)
// }
// add2(3,1)
function calculate(...num1){ // yaha pe 3 dots means rest operator yaani jitne arguments ho sb array form me store hote jayenge , practical example jb add krte cart me items in shopping site
    return num1;
}
console.log(calculate(1,2,2,22,2.2,100))
// function calculate1(_val1, _val2, ...num1)
// {
//     return num1
// }
// console.log(1,2,2,2,224,123)
const user ={
    name:"Bhaskar",
    age:10
}
function handleObt(){
    console.log(`username is ${user.name}`)
}
handleObt(user)//yaha bhale hi hum user as an argument paas kre na kre vo globally pick krlega
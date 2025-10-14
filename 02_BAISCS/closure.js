if(true){
    var a =1
 //   let b =2
 //   const c =3
}
console.log(a) //var print hoga 
//console.log(b) // let ni 
//console.log(c)// c  bhi nahi printhhoga 
a =5
if(true)
{
    var a =1 
    console.log(a)
}
console.log(a)
//here comes the hoisting 
console.log(jodo(5))
function jodo(num){
    return num+1;
}
//here function is declared in different way so its not hoisted  
console.log(add3(4))
const add3= function (num){
    return num+2;
}

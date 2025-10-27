const arr = [1,2,4,5,6]
//const num = arr.map((item)=>item+1).map((items)=>items*10)// chaining of function using map, beech me variable us function k koi bhi ralhdo
//console.log(num)
// //lets learn the reduce method 0
//console.log(total)
// now lets dive into real world scenario 
const shop = [
    {item1:"BTECH",price:500},
    {item2:"BCA",price:200},
    {item3:"MBA",price:300},
    {item4:"MBBS",price:1200}
]
const total = shop.reduce((acc,cur)=>acc+cur.price,0)
console.log(total)
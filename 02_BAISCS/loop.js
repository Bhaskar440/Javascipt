// for(i=0;i<3;i++)
// {
//     for(_=0;_<3;_++)
//     {
//         console.log(_)
//     }
//     console.log(i)
// }
const map = new Map()
map.set("FR","FRANCE")
map.set("USA","UNITED STATES OF AMERICA")
//console.log(map)
for(const [key,value] of map )
{
    console.log(key,value)
}
const her= {
    1:"JOJO",
    2:"ESHU"
}
// for(const ob of her){
//     console.log(ob)
// // }//aise me map print na hota i.e not iterable 
 const arr = ["a","b","c","d"]
// arr.forEach(function (item){ // ye hota hai callback function 
//     console.log(item)
// })
arr.forEach((item,index,arr)=>{//arrow function k saath saath item index, item, list bhi print kradeta 
console.log(item,index,arr)
})
// ab isk baad iteration in array object
const drr = [
    {
        "roll":1,
        "name":"Bhas"
    },
    {
        "roll":2,
        "name":"Sam"
    }
]
drr.forEach((item)=>{
    console.log(item)
})

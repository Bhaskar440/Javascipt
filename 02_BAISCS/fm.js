// const table = ["cpp","java","python","js"]
// const value = table.forEach((item)=>{
//     console.log(item)
// })
// console.log(value) 
// in short above program me return kchni karata i.e undefined
const arr = [1,2,3,4,5,6,7,8,9]
// const nums=arr.filter((num)=> num>4)
// console.log(nums)
//filter hok value miljyengi 

//lets try with for each loop 
const prr= []
// arr.forEach(item=>{
//     if(item>4)
//     {
//         prr.push(item)
//     }
// })
// console.log(prr)
//ek khali array banak store karadi
const books=[
    {title:"Book one",genre:"fiction",publish:1921,edition:2010},
    {title:"Book two",genre:"science",publish:1922,edition:2011},
    {title:"Book three",genre:"non-fiction",publish:1923,edition:2012},
    {title:"Book four",genre:"history",publish:1924,edition:2013},
    {title:"Book five",genre:"fiction",publish:1925,edition:2014},
    {title:"Book six",genre:"science",publish:1926,edition:2015},
    {title:"Book seven",genre:"non-fiction",publish:1927,edition:2016},
    {title:"Book eight",genre:"history",publish:1928,edition:2017} 
]
//const output = books.filter((item)=>item.genre=='science') ek ye method hai 
const output = books.filter((item)=>{return item.genre=='science'})
console.log(output)
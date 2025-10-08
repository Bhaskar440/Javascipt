const student = {
    name:"Bhaskar",
    "fullname":"BS",
    age : 24,
    isLoggedin : true
};
console.log(student.name)//normal jaise access hota object 
console.log(student["name"])// string datatype me hai to output le jata 
console.log(student["fullname"])
//student.name = "lallan"
//console.log(student.name); uper name change krne k baad object ka name bhi change ho jata
//Object.freeze(student)
console.log(student)
student.greeting = function()
{
    console.log(`namaste ${this.age}`)
}
console.log(student.greeting())
//how Nesting works in, how output is taken  
const student = {
    email :"gmail.com",
    fullname:{
        firstname:{
            name:"Bhaskar"
        }
    }
}
// console.log(student.fullname)
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// //obj3= obj1+obj2//yaha pr output pe object object object object ara
// const obj3= {obj1 + obj2}
// console.log(obj3)
const course = {
    name:"JS",
    teacher:"Bhaskar",
    price:990

};
//console.log(course.price)
const {teacher} = course;//jb aise 2-3 baar kch print krna ho of object to ye fashion is better
//uper wale k name bhi change kr skte teacher:guru krk fir log me output guru likhna hai, its over
console.log(teacher)

const image={
    "name":132
}
console.log(image.name)
const obj1=[
    {},
    {},
    {}
];
//this is how api gets written
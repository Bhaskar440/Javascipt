const user={
    name:"Bhaskar",
    country:"India",
    welcomeMessage: function(){
        console.log(`hello ${this.name}, how are you?`)
        console.log(this)
    }
}//this keyword current scenario ko print krta
// user.welcomeMessage()
// user.name="HEAD"
// user.welcomeMessage()
function chai(){
    console.log(this)//yaha pe isne bs contained node environment sb print hojata 
}
//chai()
function chai1(){
    username: "Bhaskar"
    console.log(this.username)// within function ye return undefined krega whereas object me uper dekho print krdeta hai 
} 
//chai1()
const addi=(num1,num2)=>(num1*num2) //yaha pe return inside{} hota to bhi same ata 
//{
 //   return num1*num2
//}
console.log(addi(4,5))
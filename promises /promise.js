// const ar = setTimeout(function(){
//     console.log("Jai Mata Di")
// },1000);
//yaha pe we made promise but execution is Jai mata di only 
const promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Jai Mata Di");
        resolve();
    },2000)
})
//ye hai resolve state joki uper call kiya hai or yaha 2 part me hora hai 
promise.then(function(){
    console.log("hello world")
})

//ab isko without variable store karaye direct then lagake krte hai or yaha pe resolve then ko batadeta
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Bharat mata ki jai")
        resolve();
    },3000)
}).then(function(){
    console.log("ASYNC is also completed");
})

const Promise1 = new Promise(function(resolve, reject){ // Corrected 'P' and argument order
    setTimeout(function(){
        resolve({username:"chai",usercast:"pandit"}) // The Promise is fulfilled with this object
    }, 3000)
})

Promise1.then(function(user){
    console.log(user) // This function r uns after the Promise is fulfilled
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve ({username:"Bhaskar",usercast:"Pandit"})
        }
        else{
            reject("something is different")
        }
    },2000)
})
promiseFour.then(function(user){
    console.log(user);
})
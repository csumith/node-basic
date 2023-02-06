/* console.log("this is my first world")

setTimeout(() => {
    console.log("this is my second world")
}, 3000);

console.log("this is my third world") */


// a =10;
// b=0;

// setTimeout(()=>{
//    console.log("The value of a+b=" ,a+b)
// },2000)

// console.log("the value of a+b is=", a+b) // to solve this problem  


let a=10;
let b=0;

let Takingdata = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(30)
    },2000)
})
Takingdata.then((data)=>{
 let b=data;
 console.log("The value of a+b is =",a+b)

})
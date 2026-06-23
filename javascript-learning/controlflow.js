//control flow
// console.log("A")
// console.log("B")
// console.log("C")

// let age = 44
// if(age>22){
//     console.log("He is adult")
// }
// else if(age>30){
// console.log("he is old")
// }

// else{
//     console.log("he is a minor1")
// }

// let day = 78

// switch(day){
//     case 1:{
//         console.log("sunday")
//         break;
 
//     }
//     case 2 :{
//         console.log("monday")
//         break;
//     }
//     case 3: {
//         console.log("tuesday")
//         break;
//     }
//     default:{
//         console.log("not a day")
//     }
// }

//exception handling

// let age = -5;

// if(age<0){
//  throw new Error("age cannot be negative")
// }


// let user = null;
// try{
// // llll=99
// let x;
// console.log(user.name)
// }
// catch(e){
// console.log("error occurred")
// // console.log(e.name)
// // console.log(e.stack)
// console.log(e.message)
// }

// finally{
//     console.log("it always executes")
// }
// console.log("hi")
try{
    let a = 0
    let b = 0
if(b===0){
    throw new Error("cannot divide zero")
}

}
catch(e){
console.log(e.message)
}


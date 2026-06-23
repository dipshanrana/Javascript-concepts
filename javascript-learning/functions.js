// // // function greet(){
// // //     console.log("helloworld")
// // // }
// // greet()

// // // function greet(name){
// // //     console.log("hello "+name)
// // // }

// // greet(2)

// // //default parameters

// // function greet(name = "guest"){
// //     console.log(name)
// // }
// // greet("helloworld")

// // function sum(...num){
// //     return num
// // }

// // let a = sum(1,2,3,4)

// // console.log(a[1])

// const add = (a,b)=> {
//     return a+b
// }

// let a = add(1,2)

// console.log(a)


// const sum = (a,b)=>a+b;

// let b = sum(3,4)
// console.log(b)

// const square = c => c*c

// let c = square(4)
// console.log(c)


// const hello = () => console.log("hello")

// hello()


// const user = {
//     name: "dipshan",
//     greet(){
//         console.log(this.name)
//     }
// }

// user.greet()

//IIFE(Immediately Invoked Function Expression)
// (function(){
//     console.log("executed");
// })();

// (function(name){
//     console.log("executed parameter")
// })();

// (function(){
//     let secret = "dipshan";
//     console.log(secret);
//     console.log("helloworld")
// })();



// console.log("helloworld")

//arguments objects

// function show(){
//     console.log(arguments.length)
//     // show()
// }

// show("dipshan","rana")


// const test = (...args)=>{
//     console.log(args)
// }

// test("dipshan","rana","bhat")


// console.log(parseInt("3333"))

// console.log(parseFloat("33.33"))


// setTimeout(()=>{
//     console.log("hello")
// },2000)

// setInterval(()=>{
//     console.log("I am interval")
// },1000)

// const id = setTimeout(()=>{
//     console.log("hello i am timeout")
// },5000)

// clearTimeout(id)


// const interval = setInterval(()=>{
//     console.log("hello i am interval")
// },1000)

// clearInterval(interval)


//lexical scopint

function outer(){
    let x = 10;

    function inner(){
        x++;
        console.log(x)
    }
    return inner;
    // inner();
}

const counter = outer()
counter()
counter()
counter()
// inner()

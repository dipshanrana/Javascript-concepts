//setTimeout
//it schedules a function to run once after a specified delay

// const timer = setTimeout(()=>{
// console.log("helloworld")
// },1)
// console.log("end")

// console.log(timer)
// clearTimeout(timer)

//setInterval

// const id = setInterval(()=>{
//     console.log("helloworld")
//     clearInterval(id)
// },1000)

// const id1 = setInterval(()=>
// console.log("I am dipshan ranabhat")
// ,1000)


// setTimeout(() => {
//     clearInterval(id)
//     clearInterval(id1)
// }, 5000);


setTimeout(() => {
    console.log("I am executed immediately")
}, 1000);

setTimeout(console.log("helloworld"),1000)
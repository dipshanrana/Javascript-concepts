// function greet(){
//     console.log(this.name)
//     // console.log("Helloworld")
// }
// const user = {
//     name:"dipshan"
// }

// greet.call(user)

// function introduce(city, address){
//     console.log(this.name + " from " + city + address)

// }

// // const user = {
// //     name: "dipshan"
// // }

// introduce.call(user,"pokhara"," bijayapur ")


//function borrowing using call


// const user1 = {
//     name:"Dipshan",
//     greet(){
//         console.log(this.name)
//     }
// }

// const user2 = {
//     name: "Nishan"
// }

// user1.greet.call(user2)


//apply() is similar to call difference is how we pass the argument


// function introduce(city,country){
//     console.log(this.name)
//     console.log(city)
//     console.log(country)
// }

// const user = {
//     name: "Dipshan"
// }

// introduce.apply(user,["pokhara","Nepal"])


//bind returns a new function

function greet(){
    console.log(this.name)
}

const user = {
    name:"Dipshan"
}

const newFunction = greet.bind(user)
newFunction()


function add (a,b){
    console.log(this.name)
    console.log(a+b)
}

const result = add.bind(user)


result(20,20)
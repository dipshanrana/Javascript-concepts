// let person = {
//     name:"dipshan",
//     age:33,
//     greet(){
//         console.log(this.age)
//     },
//     address:{
//         city: "Pokhara",
//         country: "nepal"
//     },
//     skills:[ "java","Javascript","html","css"]

// }
// // person.address = "pokhara"
// person.school = "amarsingh"

// // person.address = "okay"

// // delete person.address;


// // let person = new Object();

// // person.name = "dipshan"
// // person.age  = 22
// // person.address = "pokhara"
// // console.log(person.address)
// console.log(person.name)
// console.log(person["name"])
// console.log(person.fine)
// person.greet()
// console.log(person.address.country)
// console.log(person.address)

// console.log(person)
// console.log(person.skills[0])

// let students = [
//     {
//         name:"dipshan",
//         class:"BIT",
//         address:"Pokhara"
//     }
//     ,
//     {
//         name: "smirti",
//         class:"BIT",
//         address: "Lekhnath"
//     }
// ]

// console.log(students[1].address)


const user = {
    greet(){
        console.log("HI i amd " +this.name)
    }
}

user.name = "dipshan"
user.address = "Pokhara"
user.age = 33

console.log(user)

console.log(user.greet())

const user1 = new Object()
user1.name = "dipshan"
console.log(user1)
console.log(user1)

console.log(user["address"])

delete user1["name"]
console.log(user1)

console.log(typeof(user1))

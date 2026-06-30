// // "use strict"
// const user = {
//     name:"dipshan",
//     greet(){
//         console.log(this)
//         // console.log(this.name)
//     }
// }

// user.greet()

// function greet(){
//     console.log(this)
// }

// greet()

// console.log(this)


const hello = ()=> {
    console.log(this)
}
hello()


const user = {
    name: "dipshan",
    greet(){
        function say(){
            console.log(this)
        }
        say()
    }
}

user.greet()


const user1 = {
    name:"dipshan",
    greet(){
        const say = ()=>{
            console.log(this)
        }
        say()
    }
}

user1.greet()
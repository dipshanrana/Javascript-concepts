//callback

// function greet(name){
//     console.log("Hello"+name)
// }

// function processUser(callback){
//     callback(" Dipshan")
// }

// processUser(greet)

//asynchronous callback

// console.log("Start")

// setTimeout(()=>{
//     console.log("Hello dipshan")
// },1000)

// console.log("End")

//callback hell
//This is callback hell - login-getprofile-getposts-displayposts- print "Done"
//Multiple nested callbacks
//Pyramid of Doom - the shape of code callback hell forms

//Promises - An object that represents the eventual completion(success) or failure of an asynchronous operation
//Promises states - Pending , Fulfilled or Rejected

// const promise = new Promise((resolve,reject)=>{

//     let success = false;

//     if(success){
//         resolve("Payment Successfull")
//     }
//     else{
//         reject("Payment Failed")
//     }
// })

// promise
//         // .then((result)=>{
//         //     console.log(result)
//         // })
       
//        .catch((error)=>{
//             console.log(error)
//         })

function login(){
    return new Promise((resolve,reject)=>{
        console.log("Logging in ...")
        setTimeout(()=>{
            resolve( console.log("User logged in"))
        })
    },1000)
}


function getProfile(){
    return new Promise((resolve,reject)=>{
        console.log("Getting profile...")
        setTimeout(()=>{
            resolve({
                id:1,
                name:"dipshan"
            })
        },4000)
    })
}


function getPosts(profile){
    return new Promise((resolve,reject)=>{
        console.log("Getting posts for ",profile.name)

        setTimeout(()=>{
            resolve([
                "JavaScript Basics",
                "Learning Promises",
                "Understanding Async/Await"
            ])
        })
    },7000)
}

function displayPosts(posts){
    console.log("Posts:")
    posts.forEach(post=>{
        console.log(post)
    })
    return posts;
}


login()
    .then(getProfile)
    .then(getPosts)
    .then(displayPosts)
    .catch(console.error)
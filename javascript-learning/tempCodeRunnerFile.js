function login(){
    return new Promise((resolve,reject)=>{
        console.log("Logging in ...")
        setTimeout(()=>{
            resolve("User logged in")
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
        },1000)
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
    },1000)
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
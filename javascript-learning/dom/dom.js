// // //document - entire html page browser loaded
// // //the main dom api object : document
// // //the entry point is document - it represent the entire webpage

// // // const title = document.getElementById("1")

// // const items = document.getElementsByClassName("item")

// // const divs = document.getElementsByTagName("div")
// // // returns htmlcollection of elements
// // // htmlcollection is not equals to array
// // //htmlcollection - live update
// // //queryselector -static


// // //select first match
// // const querySelector = document.querySelector(".title")

// // const querySelectorAll = document.querySelectorAll(".item")

// // console.log(querySelector)

// // const heading = document.getElementById("title")
// const heading = document.querySelector("#title")
// console.log(heading)
// console.log(heading.textContent)
// // console.log(document)
// // document.title= "Helloworld, slight change in website title"
// // console.log(document.title)
// // console.log(document.body)

// const classSelector= document.querySelector(".check")
// console.log(classSelector)
// console.log(classSelector.textContent)

// const tagSelector = document.querySelector("p")
// console.log(tagSelector)
// console.log(tagSelector.textContent)

// const item = document.querySelector(".item")
// console.log(item)
// console.log(item.textContent)

// const allItem= document.querySelectorAll(".item")
// console.log(allItem)

// allItem.forEach(item=>{
//     console.log(item.textContent)
// })

// for(let items of allItem){
//     console.log(items.textContent)
// }

// //modifying inner html content

// const modify= document.querySelector("#info")

// modify.innerHTML = "<h1>Hello, I am Dipshan Ranabhat and I am a developer.</h1>"

// modify.style.color= "red"
// modify.style.fontSize= "6px";


// const box = document.querySelector("#box")
// box.innerHTML="<div>I am a box created by dipshan ranabhat </div>"
// box.style.backgroundColor= "red"
// const photo = document.querySelector("#photo")
// // photo.setAttribute(
// //     "src",
// //     "images.png",
   
// // )

// // photo.setAttribute(
// //      "alt",
// //     "no image found"
// // )

// //alternative way

// photo.src= "images.png"
// photo.alt= "no image found"

// const p= document.querySelector("#title1");
// p.textContent= "doing good"
// // p.innerHTML="<h1>doing good</h1>"

// p.classList.add("active")

const okay = document.querySelector("#title")

okay.textContent= "Helloworld , i am a java and frontend developer and engineer"

okay.style.color="red"

okay.classList.add("active")
okay.setAttribute("title","this is paragraph tagSelector")

// okay.addEventListener("click",()=>{
//     console.log("clicked")
//     greet()
// }
// )
okay.addEventListener("click",greet)

function greet(){
console.log("helloworld")
}

if(!null){
    console.log("i am dipshan ranabhat")
}
//document - entire html page browser loaded
//the main dom api object : document
//the entry point is document - it represent the entire webpage

// const title = document.getElementById("1")

const items = document.getElementsByClassName("item")

const divs = document.getElementsByTagName("div")
// returns htmlcollection of elements
// htmlcollection is not equals to array
//htmlcollection - live update
//queryselector -static


//select first match
const querySelector = document.querySelector(".title")

const querySelectorAll = document.querySelectorAll(".item")

console.log(querySelector)
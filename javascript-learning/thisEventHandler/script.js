const button = document.querySelector("#btn")
button.addEventListener("click",function(){
    console.log(this)
    console.log(this.id)
    console.log(this.textContent)
    this.style.background = "red"
    this.style.color= "white"
    this.textContent = "Clicked!"
    this.title = "I am a button"
})

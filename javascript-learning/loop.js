const user = {
    name : "Name",
    age: 20
}

for(let key in user){
    console.log(key, user[key])
}


const name = "dipshan"

for(let ch of name){
    console.log(ch)
}
for(const ch of name){
    console.log( ch)
}


let arr = [1,2,3,4,4]

for(let value in arr){
    console.log(arr[value])
}

for(let value of arr){
    console.log(value)
}


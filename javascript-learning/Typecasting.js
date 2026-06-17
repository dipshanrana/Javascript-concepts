// // let num = Number("1111")
// // console.log(num)

// // console.log("44"*"2")

// // console.log(Number("hello"))

// // let num1 = Number("hello")

// // console.log(num1)

// // console.log(Number(true))

// // console.log(parseInt("222a"))

// // console.log(parseInt("22.33"))


// // let text = String(num)
// // console.log(text)

// console.log(Boolean(0))
// console.log(Boolean(1))

// console.log(Boolean(null))
// console.log(Boolean(-1))

// let a = "33"
// let b = 4

// console.log(a+b)

// let c = a+b

// console.log(typeof(c))

// let d = b.toString();
// console.log(d)


// console.log("55"-33)

// console.log(true+3)


// console.log(5=="5")
// console.log(5==="5")


// let a = String(333)
// console.log(a)

// let b = Number("okay")
// b = 3
// console.log(b)


//structreud collections

// const student = {
//     name: "dipshan",
//     address: "pokhara",
//     age : 39
// }

// console.log(student.name)

// const colors = ["red", "blue","green"]

// console.log(colors[0])




// const jsonData = JSON.stringify(student)

// console.log(jsonData)


// const student1 = JSON.parse(jsonData);

// console.log(student1.name)


//keyed collections


// const map = new Map()

// const user  = new Map()

// user.set("name","Dipshan")
// user.set("age",21)

// console.log(user.get("name"))


// console.log(user.has("age"))
// console.log(user.has("address"))

// // user.delete("age")
// console.log(user.get("age"))


// // user.clear()

// console.log(user.get("age"))

// console.log(user.size)


// const map = new Map()

// map.set(1,"hello")
// console.log(map.get(1))

// map.set(true,"okay")
// console.log(map.get(true))


// const person = {
//     id:1
// }

// const map = new Map()

// map.set(person,"Student")

// console.log(map.get(person))

// console.log(person)


// const iter= new Map()

// map.set(1,"Dipshan")
// map.set(2,"Smirti")

// for(let [key,value] of map){
//     console.log(key,value)
// }


// for(let key of map.keys()){
//     console.log(key)
// }

// for(let values of map.values()){
//     console.log(values)
// }



// const obj = {}

// obj[1] = "dipshan";

// obj["1"] = "Dipshan"

// console.log(obj)


// const obj1 = {
//     1: "dipsshan",
//     "1": "Dipshan",
//     name:"helloworld"
// }

// console.log(obj1)
// console.log(obj1["1"])
// console.log(obj1.name)

// const wm = new WeakMap()

// let name = {name: "dipshan"}
// wm.set(name,"dipshan")

// console.log(wm)

// name= null;

// console.log(wm)

// const wm1 = new Map()

// let name1 = {name: "dipshan"}
// wm1.set(name1,"dipshan")

// console.log(wm1)

// name1 = null;

// console.log(wm1)

// console.log(wm.get(name))


//set 

// const set = new Set()

// set.add(10)
// set.add(10)
// set.add(22)
// set.add(11)

// console.log(set)

// set.add(true)
// set.add(false)

// set.add(true)
// set.add(true)

// set.add("dipshan")

// set.add("dipshan")

// console.log(set)

// console.log(set.size)

// set.add(100)

// console.log(set)

// console.log(set.has(10))

// console.log(set.has(11))

// console.log(set.has(13))

// set.delete(100)
// console.log(set)

// // set.clear()
// console.log(set)

// console.log(set.size)

// for(let value of set){
//     console.log(value)
// }

// const arr = [1,2,3,4,4,2,1,2,3]

// const unique = [...new Set(arr)]
// console.log(unique)

// const set1 = new Set([1,1,1,2,2,2,3,4,4,5,5,])

// console.log(typeof(unique))
// console.log(...arr)

// console.log(...set1)
// console.log(...unique)

// const set2 = new Set(set1)
// console.log(set2)



// const ws = new WeakSet([{1: "helloworld"},{2:"fine"}])
// console.log(ws)








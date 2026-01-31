//object is the collection of any type data//
// const person = {
// name : 'testing’,
// age : 20,
// hobbies : ['cricket’, 'listen music'],
// greet : function(){
// console.log("hello")
// }
// }

// // access values from object
// console.log(person.name)
// console.log(person['name'])

// // adding or modifying the data of object
// person.job = "react developer"
// person.salary = 50000
// console.log(person)

// delete person.salary
// console.log(person)

// nested object
// const person1 = {
// name : 'john’,
// age : 20,
// address :{
// city : "keshod",
// zipcode : '362220’,
// street : "123 main st."
// }
// }
// console.log(person1)
// console.log(person1?.address?.city)
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entries(person1))

// destructure object

const user = {
name : "user",
role : "Admin",
designation :"developer",
age : 20,
address :{
city : "keshod",
zipcode : '362220',
street : "123 main st."
}
}
// const {name,age,role} = user
// console.log(name,age,role)

// rename object properties
// const {name : profilNmae, age : profileAge} = user
// console.log(profilNmae, profileAge)

// set default value
// const {name, age, role, state = "Gujarat"} = user
// console.log(name, age, role, state)

// const array = [1,2,3]
// const moreElements = […array,4,5,6]
// console.log(moreElements)

//copied array
// const originalArrray = [1,2,3]
// const copiedArray = […originalArrray]
// console.log(copiedArray)

// merge array
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const mergeArray = […arr1,…arr2]
// console.log(mergeArray)

// spread operator
// const user1 = {
// name : "user1",
// city : "keshod",
// }
// console.log(user1)
// const newObj = {
// …user1,
// role : "React Developer"
// }
// console.log(newObj)

//merge obj
const obj1 = {
name : "name",
age :20
}
const obj2 = {
city : "keshod",
state : "gujarat",
age : 30
}
const obj3 = {...obj1, ...obj2}
console.log(obj3)
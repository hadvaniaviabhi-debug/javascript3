//String Methods//
// length()
// trim()
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// concat()
// split()

// let str = " Hello JavaScript World ! "
// console.log(str)
// console.log("length() : ",str.length)

// let trimText = str.trim(); //space remove
// console.log("trim() : ",trimText)

// console.log("toUpperCase() : ",str.toUpperCase())
// console.log("toLowerCase() : ",str.toLowerCase())

// console.log("includes() : ",str.includes("JavaScript"))

// console.log("indexOf() : ",str.indexOf("JavaScript"))

// console.log("slice() : ",str.slice(2,7))

// console.log("substring() : ",str.substring(2,7))

// console.log("replace() : ",str.replace("JavaScript","react"))

// let extraRext = " - HELLO JS";
// console.log("concat() : ",str.concat(extraRext))

// console.log("Split() : ",str.split(" "));

// Array Methods
// length()
// Push()
// Pop()
// unshift()
// shift()
// concat()
// includes()
// indexOf()
// splice()
// slice()
// join()
// delete()
// map()
// filter()
// find()
// forEach()
// sort()
// reverse()
// flat()

// let arr = ['one’,’two’,’three’,1,{name: 'name’}]
// console.log("Default Array : ",arr)

// console.log("length() : ",arr.length)

// console.log("push() : ", arr.push("new added element"))
// arr.push("new added element")
// console.log("array after push : ",arr)

// arr.pop();
// console.log('array after pop : ',arr)

// arr.unshift("first element")
// console.log('array after unshift : ',arr)

// arr.shift()
// console.log('array after shift : ',arr) //begining

// let newArr = ["str 1", "str 2"];
// let mixedArr = arr.concat(newArr)
// console.log("default Array after concat : ",arr)
// console.log("Array after concat : ",mixedArr)

// console.log("include() : ",arr.includes("three"))
// console.log("indexOf() : ",arr.indexOf("three"))

// console.log("slice : ",arr.slice(2,4))
// // console.log("splice() : ",arr.splice(2,4))
// console.log("old array : ",arr)

// console.log("join() : ",arr.join(", "))
// delete arr[4]
// console.log(arr)

// // ARRAY ITERATION METHOD //
// console.log("Array iteration method : ")
// let number = [1,2,3,4,5]

// console.log("map : ",number.map(num => num *2))
// console.log("after map old array : ",number)

// console.log("map : ",number.filter(num => num > 2))
// console.log("after filter old array : ",number)

// console.log("forEach : ")
// number.forEach(num => console.log(num))

// let num = [3,5,2,4,1]
// console.log("sort() : ",num.sort())
// console.log("reverse() : ",num.reverse())

// let nestedArray = [1,2,[3,4],[5,6]]
// console.log("default nested array : ",nestedArray)
// let flatArray = nestedArray.flat()
// console.log("flatArray",flatArray)

// array destructuring
// let array = [1,2,3,4,5]
// const [first, second, third] = array
// console.log(first)
// console.log(second)
// console.log(third)

// skipping values
// let array1 = [1,2,3,4]
// const [first, , third] = array1
// console.log(first)
// console.log(third)

// rest operator // spread
const num1 = [1,2,3,4,5]
const [fir, second,...rest] = num1
console.log(fir)
console.log(second)
console.log(rest)
let student ={
    name: "Hadvani Abhi",
    email:"HADVANIAVIABHI@GMAIL.COM",
    course:"js,react,node",
    marks: [45,78,60,90,33],
    hobbies: ["music","cricket","reading"],
    address: ["india",["gujarat","ahemedabad"]]
}



//string operation

//remove extra spaces from name and conver it to uppercase
console.log("remove extra spaces",student.name.trim())
console.log("convert in to uppercase",student.name.toUpperCase())


//convert email to lowercase 
console.log("convert in to toLowerCase",student.email.toLowerCase())


//check whether course  includes "react"
console.log("whether course  includes react",student.course.includes("react"));


//find the index of "node" in course
console.log("find the index of node in course",student.course.indexOf("node"));


//replace "javascript" with "js"
console.log("replace javascript with js",student.course.replace("javascript","js"));


//convert course string into an array
console.log("convert course string into an array",student.course.split(","));


//display the length of student name 
console.log("display the length of student name ",student.name.length);


//array operation

//add "swimming" to hobbies
student.hobbies.push("swimming");
console.log(student.hobbies);


//remove the last hobby
student.hobbies.pop();
console.log(student.hobbies);

//add "drawing" at the beginning of hobbies
student.hobbies.unshift("drawing");
console.log(student.hobbies);

//remove the first hobby 
student.hobbies.shift();
console.log(student.hobbies);


//merge hobby witih course arry 
console.log("merge hobby witih course arry ",[...student.hobbies, ...student.course.split(",")]);


//check if "react" exists in course array

//find index of "js" in course array 

//extract first two marks

//remove one failed subject mark (less than 40) using splice 

//convert hobbies array into  a string 
// WRITE YOUR CODE HERE
var studentList=["john","ben","sam","tim"];
console.log(studentList.length);
console.log("Welcome to the Class "+studentList[0]);
console.log("Welcome to the Class "+studentList[1]);
console.log("Welcome to the Class "+studentList[2]);
console.log("Welcome to the Class "+studentList[3]);

studentList[0] = "johnny"; // to change the variable

if(studentList[0] != "john"){
    console.log(studentList[0] + " is in class");
}
studentList.push("rick");
console.log(studentList);
studentList.unshift("bobby");
console.log(studentList);
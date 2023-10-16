//WRITE YOUR CODE BELOW
//var students=["ben","john","rob","carl","bob"];
//console.log(students.length);
//for(i = 0 ; i < students.length ; i++){
    //console.log("Great to see you, " +students[i]) + "!";
//}
//- Create a variable n with the value being a number
//- Write a for loop that prints all the odd numbers from 0 to n, including n (if n is odd)
//- Write a for loop that prints all the even numbers from 0 to n, including n (if n is odd)
//- Write a for loop that at every step prints "Yes!" if i is lower than 10, "Maybe!" if i is between 10 and 20, and "No!" if i is greater than 20.

var n = 50;
for(i = 0 ; i <= n ; i++){
    if(i%2 > 0){
        console.log(i + " is odd");
    }else{
        console.log(i + " is even");
    }

    if(i < 10){
        console.log("Yes!");
    }else if(i >= 10 && i <= 20){
        console.log("Maybe!");
    }else if(i > 20){
        console.log("No!");
    }
}
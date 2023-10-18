var person1Name="John Doe";
var person2Name="Jane Doe";

function sayHi(name) {
    console.log("Hi " + name + " welcome to our shop!");
}

sayHi("John Doe");
sayHi(person2Name);

function welcoemByAge(personName, yearOfBirth) {
    var age = 2023 - yearOfBirth;

    if(age >= 21) {
        console.log("Welcome " + personName + " have a bear!");
    }
    else{
        console.log("Welcome " + personName + " have a soda!");
    }
}

welcoemByAge(person1Name, 1995);
welcoemByAge(person2Name, 2014);
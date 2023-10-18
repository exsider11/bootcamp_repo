//WRITE YOUR CODE BELOW
var customerDrink={
    name:"ice latte",
    sugars:2,
    ready:false,
}
function write(){
    console.log(customerDrink.name);
}
write();
console.log(customerDrink.sugars);
if(customerDrink.ready==false){
    console.log("Still in order queue");
}
else if(customerDrink.ready==true){
    console.log("Ready for pick-up");
}

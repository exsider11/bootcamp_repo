//1 user can enter r p or s
//2 computer will always choose s
//3 determine who wins
var winCount = 0;
var lossCount = 0;

for(var i = 1; i > 0; ){
var response = prompt("type r p or s");
var rps={
    rock:"r",
    paper:"p",
    scissors:"s"
}
if(rps.rock == response){
    alert("you win");
    winCount++;
} 
else if(rps.scissors == response){
    alert("you tied");
}
else{
    alert("you lose");
    lossCount++;
}
    if(confirm("play again?") = true){
        i++;
    }
}
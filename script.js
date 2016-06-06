var target;
var guess1;
var guess2;
var finished = false;
var count = 0;
function on_load()
{
    var ran1 = Math.random() * 100;
    var ran2 = Math.floor(ran1);
    target = ran2 + 1;
    while(!finished)
        {
            guess1 = prompt("I am thinking of a number in the range 1 to 100"+ "\n\n What is the number?");
            guess2=parseInt(guess1);
            count+=1;
            finished=guessFunction();
        }  
}

function guessFunction()
{
    if(isNaN(guess2)){
        alert("It is not a number." + "\n\n Please enter a number in the range 1 to 100");
        return false;}
    
    if(guess2 < 1 || guess2 > 100){
        alert("The number is not in range");
        return false;}
    
    if(guess2 < target){
        alert("The number is too small");
        return false;}
    
    if(guess2 > target){
        alert("The number is too large");
        return false;}
    
    alert("You got it!!" + "\n The number is "+ target + "\n\n It took you "+ count + " guesses to get the number");
    return true;
}
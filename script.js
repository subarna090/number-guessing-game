var target;
var guess1;
var guess2;
var finished = false;
var count = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
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
    alert("Game over!!");
    
}

function guessFunction()
{
    if(isNaN(guess2)){
        alert("It is not a number." + "\n\n Please enter a number in the range 1 to 100");
        document.body.style.backgroundColor = getRandomColor();
        return false;}
    
    if(guess2 < 1 || guess2 > 100){
        alert("The number is not in range");
        document.body.style.backgroundColor = getRandomColor();
        return false;}
    
    if(guess2 < target){
        alert("The number is too small");
        document.body.style.backgroundColor = getRandomColor();
        return false;}
    
    if(guess2 > target){
        alert("The number is too large");
        document.body.style.backgroundColor = getRandomColor();
        return false;}
    
    alert("You got it!!" + "\n The number is "+ target + "\n\n It took you "+ count + " guesses to get the number");
    document.body.style.backgroundColor = getRandomColor();
    return true;
}
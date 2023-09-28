//this function called by button click; it will start our game
function playCraps(){
    console.log("playCraps function called");

    // first dice roll
    var die1 =rollDie();
    console.log("The first die roll is: " + die1);
    //second dice roll
    var die2 =rollDie();
    console.log("The first die roll is: " + die2);

    //add rolls together
    var sum = die1 + die2;
    console.log("The sum of the dice rolls is: "+ sum);
    
    //show the results of the first on the httml page 
    outputRes("die1Res", "Die 1 is: " +die1);

    //show the results of the second die on the httml page 
    outputRes("die2Res", "Die 2 is: " +die2);
    // show the sum of the dice om the html page
    outputRes("sumRes", "The sum is is: " +sum);
    
    //the logic for if we won, lost, or tied
    if(sum == 7 || sum== 11 ){
        //you lose
        outputRes("crapsRes", "You lose!");
        // this  changes the output to red for a loss
        document.getElementById("crapsRes").style.color = "red";

    }
    else if( die1 == die2 && die2 % 2==0){
        outputRes("crapsRes", "You Win!");
        //this changes the output to purple for a win
        document.getElementById("crapsRes").style.color = "purple";


    }
    // the catch all -the dice roll is a tie
    else{
        outputRes("crapsRes", "You pushed(you tied)!");
        document.getElementById("crapsRes").style.color = "green";

    }

}

//output our game results
function outputRes(htmlElement, theText){
    document.getElementById(htmlElement).innerHTML = theText; 
}
//this funtion will gernerate random number between 1 and 6
function rollDie(){
    // get a random number between 0 and 1, multiply by 6
    var die = 6 * Math.random();
    //return the die roll and make sure it is a whole number
    return Math.ceil(die)
}
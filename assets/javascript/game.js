
//empty array to push values randomly genorated 
var userArray = [];
var compArray =[];
var userSum = [];

//the computers random number
function myFunction() {
    var x = Math.floor((Math.random() * 16) + 4);
    document.getElementById("random").innerHTML = x;
    userArray.push(random);
    console.log(compArray.push('random'));
};

document.getElementById("blue").addEventListener("click", myFunction2);
//function for the blue image
function myFunction2() {
    var xBlue = Math.floor((Math.random() * 4) + 1);
    document.getElementById("blueP").innerHTML = xBlue;
    userArray.push(xBlue);
    console.log(userArray.push('xBlue'));
};

document.getElementById("green").addEventListener("click", myFunction3);
//function for the green image
function myFunction3() {
    var xGreen = Math.floor((Math.random() * 4) + 1);
    document.getElementById("greenP").innerHTML = xGreen;
    userArray.push(xGreen);
    console.log(userArray.push('xGreen'));
};

document.getElementById("red").addEventListener("click", myFunction4);
//function for the red image
function myFunction4() {
    var xRed = Math.floor((Math.random() * 4) + 1);
    document.getElementById("redP").innerHTML = xRed;
    userArray.push(xRed);
    console.log(userArray.push('xRed'));
};

document.getElementById("yellow").addEventListener("click", myFunction5);

//function for the yellow image 
function myFunction5() {
    var xYellow = Math.floor((Math.random() * 4) + 1);
    document.getElementById("yellowP").innerHTML = xYellow;
    //console.log()
    userArray.push(xYellow);
    console.log(userArray.push('xYellow'));
};

userSum = [1, 2, 3].reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(userSum);



// Store alert components in object
//let alertDiv = {
	//loose: '<div class="alert alert-danger" role="alert"><strong>Loser!</strong> HaHaHa you looseee!</div>',
	//win: '<div class="alert alert-success" role="alert"><strong>Wahoo you win!</strong> Lets play again!</div>',
	//draw: '<div class="alert alert-info" role="alert"><strong>Close!</strong> it was a draw, please reset and try again.</div>'


// Track player score
//let yourScore = 0;
//let myScore = 0;

//restart game 
//$(document).click(function(){
    //$(":reset");
  //});
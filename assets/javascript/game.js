
//the computers random number
function myFunction() {
    var x = Math.floor((Math.random() * 16) + 4);
    document.getElementById("random").innerHTML = x;
};

document.getElementById("blue").addEventListener("click", myFunction2);
//function for the blue image
function myFunction2() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("blueP").innerHTML = x;
};

document.getElementById("green").addEventListener("click", myFunction3);
//function for the green image
function myFunction3() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("greenP").innerHTML = x;
};

document.getElementById("red").addEventListener("click", myFunction4);
//function for the red image
function myFunction4() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("redP").innerHTML = x;
};

document.getElementById("yellow").addEventListener("click", myFunction5);

//function for the yellow image 
function myFunction5() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("yellowP").innerHTML = x;
    console.log()
};
//click on image and get a random number 
//$( ":yellow" ).click(function() {
    //var x = Math.floor((Math.random() * 4) + 1);
    //document.getElementById("yellowP").innerHTML = x;
   // console.log( x );
//});

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


function myFunction() {
    var x = Math.floor((Math.random() * 16) + 4);
    document.getElementById("random").innerHTML = x;
}


function myFunction2() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("blueP").innerHTML = x;
}


function myFunction3() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("greenP").innerHTML = x;
}


function myFunction4() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("redP").innerHTML = x;
}

document.getElementById("yellow").addEventListener("click", myFunction5);

function myFunction5() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("yellowP").innerHTML = x;
    console.log()
}

$( "img" ).click(function() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("yellowP").innerHTML = x;
    console.log( "You clicked an image!" );
});





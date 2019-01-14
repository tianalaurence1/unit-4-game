

function myFunction() {
    var x = Math.floor((Math.random() * 16) + 4);
    document.getElementById("random").innerHTML = x;
}


function myFunction2() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("blue").innerHTML = x;
}


function myFunction3() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("green").innerHTML = x;
}


function myFunction4() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("red").innerHTML = x;
}

document.getElementById("yellow").addEventListener("click", myFunction5);

function myFunction5() {
    var x = Math.floor((Math.random() * 4) + 1);
    document.getElementById("yellow").innerHTML = x;
    console.log()
}

$( "p" ).click(function() {
    console.log( "You clicked a paragraph!" );
});



 


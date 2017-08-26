//set variables
var wins = 0;
var losses = 0;
var score = 0;

$(document).ready(function() {
    //generate random number for guessing
    var randomNum = Math.floor((Math.random()) * 101 + 19);
        $(".randomnumber").append(randomNum);
        console.log(randomNum);

    //generate random number for crystals
    var red = Math.floor((Math.random()) * 11 + 1);
        $(".redcrystal").val(red);
        console.log(red);
    var blue = Math.floor((Math.random()) * 11 + 1);
        $(".bluecrystal").val(blue);
        console.log(blue);
    var green = Math.floor((Math.random()) * 11 + 1);
        $(".greencrystal").val(green);
        console.log(green);
    var purple = Math.floor((Math.random()) * 11 + 1);
        $(".purplecrystal").val(purple);
        console.log(purple);


    //generate on click event for crystals
    $(".redcrystal").on("click", function () {
        $(".totalscore").append(red)
        console.log();
    })
    $(".bluecrystal").on("click", function () {
        $(".totalscore").append(blue)
    })
    $(".greencrystal").on("click", function () {
        $(".totalscore").append(green)
    })
    $(".purplecrystal").on("click", function () {
        $(".totalscore").append(purple)
    })
});



//for loop for crystal random number
//function crystal (color) {
    //color = Math.floor((Math.random()) * 11 + 1);

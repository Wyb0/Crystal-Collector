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
        //note *couldn't use two classes in html for crystals
    var red = Math.floor((Math.random()) * 11 + 1);
        $(".redcrystal").val(red);
        var redadd = parseInt($(red));
        console.log(red)
    var blue = Math.floor((Math.random()) * 11 + 1);
        $(".bluecrystal").val(blue);
        var blueadd = parseInt($(blue));
        console.log(blue);
    var green = Math.floor((Math.random()) * 11 + 1);
        $(".greencrystal").val(green);
        var greenadd = parseInt($(green));
        console.log(green);
    var purple = Math.floor((Math.random()) * 11 + 1);
        $(".purplecrystal").val(purple);
        var purpleadd = parseInt($(purple));
        console.log(purple);
    //generate on click event for crystals
    $(".redcrystal").on("click", function () {
        var redfinal = score += red;
        $(".totalscore").html(redfinal);
        checkwin (score);
    })
    $(".bluecrystal").on("click", function () {
        var bluefinal = score += blue;
        $(".totalscore").html(bluefinal);
        checkwin (score);
    })
    $(".greencrystal").on("click", function () {
        var greenfinal = score += green;
        $(".totalscore").html(greenfinal);
        checkwin (score);
    })
    $(".purplecrystal").on("click", function () {
        var purplefinal = score += purple;
        $(".totalscore").html(purplefinal);
        checkwin (score);
        console.log(score)
    })  
//if else statements to define win-loss
   function checkwin () {
    if (score == randomNum) {
        wins++;
        $(".winstally").html("Wins: " + wins);
        };
    if (score > randomNum) {
        losses++;
        $(".lossestally").html("Losses: " + losses);
        };
    };

});





//for loop for crystal random number
//function crystal (color) {
    //color = Math.floor((Math.random()) * 11 + 1);

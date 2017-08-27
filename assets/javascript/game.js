//set variables
var wins = 0;
var losses = 0;
var score = 0;

$(document).ready(function() {
  
    //generate random number for guessing
    var randomNum = Math.floor((Math.random()) * 101 + 19);
       $(".randomnumber").append(randomNum);
       console.log('randomNum ', randomNum);
  
    //generate random number for crystals
    //note *couldn't use two classes in html for crystals
    //var red = Math.floor((Math.random()) * 11 + 1);
    //    $(".redcrystal").val(red);
    //    var redadd = parseInt($(red));
    //    console.log(red)
    //var blue = Math.floor((Math.random()) * 11 + 1);
    //    $(".bluecrystal").val(blue);
    //    var blueadd = parseInt($(blue));
    //    console.log(blue);
    //var green = Math.floor((Math.random()) * 11 + 1);
    //    $(".greencrystal").val(green);
    //    var greenadd = parseInt($(green));
    //    console.log(green);
    //var purple = Math.floor((Math.random()) * 11 + 1);
    //    $(".purplecrystal").val(purple);
    //    var purpleadd = parseInt($(purple));
    //    console.log(purple);

    function newValue () {
        var num = Math.floor((Math.random()) * 11 + 1);
        return num
    }

    var red = newValue ();
    var blue = newValue ();
    var green = newValue ();
    var purple = newValue ();
  
    //generate on click event for crystals
    $(".redcrystal").on("click", function () {
       var redfinal = score += red;
       $(".totalscore").html(redfinal);
       checkwin (score);
       console.log('red ', red);
    })
    $(".bluecrystal").on("click", function () {
       var bluefinal = score += blue;
       $(".totalscore").html(bluefinal);
       checkwin (score);
       console.log('blue ', blue);
    })
    $(".greencrystal").on("click", function () {
       var greenfinal = score += green;
       $(".totalscore").html(greenfinal);
       checkwin (score);
       console.log('green ', green);
    })
    $(".purplecrystal").on("click", function () {
       var purplefinal = score += purple;
       $(".totalscore").html(purplefinal);
       checkwin (score);
       console.log('purple ', purple);
    })  

    //reset game function
    function reset () {
        randomNum = Math.floor((Math.random()) * 101 + 19);
            $(".randomnumber").html("Random Number:" + randomNum);
            $(".totalscore").html(score = 0);
            console.log('randomNum ', randomNum);
            score = 0;
    }

    //if else statements to define win-loss
    function checkwin () {
        if (score == randomNum) {
           wins++;
           $(".winstally").html("Wins: " + wins);
           reset ();
           red = newValue ();
           blue = newValue ();
           green = newValue ();
           purple = newValue ();
           console.log('red ', red);
           console.log('blue ', blue);
           console.log('green ', green);
           console.log('purple ', purple);
        };
        if (score > randomNum) {
           losses++;
           $(".lossestally").html("Losses: " + losses);
           reset ();
           red = newValue ();
           blue = newValue ();
           green = newValue ();
           purple = newValue ();
           console.log('red ', red);
           console.log('blue ', blue);
           console.log('green ', green);
           console.log('purple ', purple);
        };
    };

});

//for loop for crystal random number
//function crystal (color) {
    //color = Math.floor((Math.random()) * 11 + 1);

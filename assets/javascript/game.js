var number = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["assets/images/blue.jpg", "assets/images/purple.jpg", "assets/images/yellow.jpg", "assets/images/green.jpg"];

function randomNum () { 
    number = Math.floor(Math.random() * 102) + 19;
}

function randomCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        $(".crystals").append(crystal);
    }
}

function restart() { 
    $(".guess").html(number);
    $(".score-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>").css({"text-decoration": "underline"});
    $(".total-num").html(counter=0);
    $(".crystals").empty();
}

function init() { 
    randomNum ();
    restart();
    randomCrystals();
}


randomNum ();
restart();
randomCrystals();



function onClick () {
    counter += parseInt($(this).attr("value"));
    $(".total-num").html(counter);
    if (counter == number) {
        wins++;
        init();
    }
    else if (counter > number) {
        losses++;
        init();
    };
    
};
$(document).on("click", ".crystal", onClick);
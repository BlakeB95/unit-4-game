$(document).ready(function() {

    //establishes the target num
    var rand = Math.floor(Math.random() * 50) + 10;
    $(".random-number").text(rand);

    //establishes the current score
    var score = 0;
    $(".user-score").text(score);
    
    var wins = 0;
    $(".wins").text(wins);
    var losses = 0;
    $(".losses").text(losses);

    function updateRand() {
        rand = Math.floor(Math.random() * 50) + 10;
        $(".random-number").text(rand);
    }
    function compareScore() {
        if(score == rand) {
            score = 0;
            wins ++;
            $(".wins").text(wins);
            $(".user-score").text(score);
            updateRand();
        }
        else if(score > rand) {
            score = 0;
            losses ++;
            $(".losses").text(losses);
            $(".user-score").text(score);
            updateRand();
        }
        else {
            $(".user-score").text(score);
            console.log("do nothing");
        }
    }
    
    //each crystal has a card that can be clicked to add to your score
    $(".yellow").on("click", function() {
        score += 4;
        compareScore();
    });

    $(".red").on("click", function() {
        score += 6;
        compareScore();
    });

    $(".green").on("click", function() {
        score += 3;
        compareScore();
    });

    $(".blue").on("click", function() {
        score += 7;
        compareScore();
    });


});

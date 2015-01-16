/*
 Name: Selena Vargas
 Date: 1/15/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
  /*  var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
*/

    var fighter1 = ["Spiderman", 20, 100]; //Created array for players
    var fighter2= ["Batman", 20, 100];     //Create array for players


    var round=0;

    function fight(){
        console.log ('in the fight function');

        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);

        for (var i=0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //inflict damage
            minDamage1-=f1;
            minDamage2-=f2;

            console.log(fighter1[0]+":"+minDamage1+" "+fighter2[0]+":"+minDamage2);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);
                break;
            };

        };

    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        if (playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if(playerTwoHealth<1){
            result =playerOneName+" WINS!!!"
        };

        return result;

    };

    /*******  The program gets started below *******/
    console.log('program starts')
    fight();

})();
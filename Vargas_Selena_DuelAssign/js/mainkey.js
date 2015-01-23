/*
 Name: Selena Vargas
 Date: 1/23/15
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){

    console.log(" ** FIGHT **"); //Print title to console.log

    //DEFINE YOUR dom pieces; Multiple ways to define/acces HTML tags
    var fighter1_txt = document.querySelector("#sm").querySelector("p"); //You don't need a # if  using getElementaryId
    var fighter2_txt = document.querySelector("#bm").querySelector("p"); //You don't need a # if  using querySelector
    var round_txt = document.querySelector("h5");  //Pull in text between the h4 or h5 tag
    var button = document.getElementById("fight_btn"); //Pull in main button that starts the game.

button.addEventListener("click", fight, false);

    //CREATE ARRAY OF OBJECT FOR 2 FIGHTERS
        var fighters = [
            {
                name:"Spiderman", //index0.name or index[0] with object-key "name" = Spiderman
                damage: 20,       //index0.damage
                health: 100       //index0.health

            },
            {
               name: "Batman", //index1.name or index[1] with object-key "name" = Batman
               damage: 20,     //index1.damage
               health: 100     //index1.health

            }];

    var round = 1;

    //INTIALIZE DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
   fighter1_txt.innerHTML = fighters[0].name + ": " +fighters[0].health;
   fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health;

    //REMOVE OLDSjs function, BUT need the below if we use addEventListener in line 15 above
    //function onClick() {
    //       fight();
    //}

    //CREATE "FIGHT" FUNCTION
    function fight(){
//alert(fighters[0].name+":"+fighters[0].health+" *START* "+fighters[1].name+":"+fighters[1].health);
        fighter1_txt.innerHTML = fighters[0].name +":   " + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name +":   " + fighters[1].health;

        //determine damage
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5);

        //inflict damage
        fighters[0].health -= f1;
        fighters[1].health -= f2;

        console.log(fighters[0].health, fighters[1].health);

        //check for winner
        var result = winnerCheck();
        console.log(result);

        round_txt.innerHTML = "ROUND #" + round + " Results:";
        round++;
        if(result === "no winner")
        {
                fighter1_txt.innerHTML = fighters[0].name + ":  " + fighters[0].health;
                fighter2_txt.innerHTML = fighters[1].name + ":  " + fighters[1].health;
        }else{
            fighter1_txt.innerHTML = result;
            fighter2_txt.innerHTML = "";

            //Disable the button - need the below if using addEvenListener
            button.removeEventListener("click", fight, false);
            //button.disabled = true;

            //button.onclick = "return false";

            document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
        }
    }

    function winnerCheck() {
        var result = "no winner";
        if (fighters[0].health < 1 && fighters[1].health < 1) {
            result = "You Both Die - GAME OVER!";
        } else if (fighters[0].health < 1) {
            result = fighters[1].name + "WINS!!!"
        } else if (fighters[1].health < 1) {

            result = fighters[0].name + "WINS!!!"
        }

        return result;

    }



    //player name
  /*  var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var round=0;

    function fight(){
        console.log ('in the fight function');

        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        for (var i=0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

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

    *******  The program gets started below *******/
   // console.log('program starts')
  //  fight();

})();
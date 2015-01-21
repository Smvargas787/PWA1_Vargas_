//Selena Vargas
//1/21/15

/*var access = document.getElementById("code9"); //accessing this document, getElement is giving us access
var code = access.innerHTML; //we are using this to get access to the actual text
code = code + " midnight";
code = code + "midnight";
alert(code); //added string to the line above and now we plan to alert it.
*/

function init() { //Put function to wrap around text because it's the first thing that gets called.

    var myGreenText = document.getElementById("mygreentext"); //Takes from html to show up on webpage
    myGreenText.innerHTML = "GREEN Alert: hit by phaser fire!"; //Takes the text from the html onto the webpage
    myGreenText.setAttribute("class" , "greentext"); //Sets the color to green due to the html code

    var myRedText = document.getElementById("myredtext");
    myRedText.innerHTML = "RED Alert: hit by the phaser fire!";
    myRedText.setAttribute("class" , "redtext"); //Sets the color to red due to the html code

    var myBlueText = document.getElementById("mybluetext");
    myBlueText.innerHTML = "BLUE Alert: hit by the phaser fire!";
    myBlueText.setAttribute("class" , "bluetext"); //Sets the color to blue due to the html code



    var myGreenText = document.getElementById("greenness");  //
    myGreenText.innerHTML = "GREEN PLANET";
    myGreenText.setAttribute("class" , "greentext");

    var myRedText = document.getElementById("redness");
    myRedText.innerHTML = "RED PLANET";
    myRedText.setAttribute("class" , "redtext");

    var myBlueText = document.getElementById("blueness");
    myBlueText.innerHTML = "BLUE PLANET";
    myBlueText.setAttribute("class" , "bluetext");

}
window.onload = init; //Waits for the window to complete load to access the html code




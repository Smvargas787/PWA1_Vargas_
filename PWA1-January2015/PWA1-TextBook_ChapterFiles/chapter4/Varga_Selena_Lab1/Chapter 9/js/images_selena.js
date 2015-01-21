
 /*
Selena Vargas
Assignment
Date: 1-21-15
 */

 window.onload = init;                                  //Telling JS to wait until page is fully loaded

 function init() {                                      //Setting up Event handler for window.onload event
    var images = document.getElementsByTagName("img");  //Getting access to Image Element ID again
    for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;                     //Telling JS to call "showAnswer" event handle
    }                                                   //...when user clicks on image
 }

 function showAnswer(eventObject){

    var image = eventObject.target;
    var name = image.id;
  console.log("Vance made me press " + name); //Sets up the consoles to repeat.
    name = "images/" + name + ".jpg";
    image.src = name;
  setTimeout(reblur, 2000, image);
 }

 function reblur(image){
    //var image = image.target
  var name = image.id;
    name = "images/" + name + "blur.jpg";
    image.src = name;
 }









 //function showAnswer() {  ///Declaring function for showing answer to user
 //var image = document.getElementById("zero"); //Getting access to Image Element ID again
 //  image.src = "images/zero.jpg"; //Changing source of Image Element on HTML page

 /* function showAnswer() {  ///Declaring function for showing answer to user
  var images = document.getElementsByTagName("img"); //Getting access to Image Element ID again
  for (var i = 0; i < images.length; i++){
  //image/zero.jpg
  images[i].onclick = showAnswer;
  }

  }
  */
/*
    Midterm Exam for PWA-1
    NAME: Selena Vargas
    DATE: 1/28/15
*/

(function(){  // CREATE SELF EXECUTING FUNCTION

i = 0; // DEFINE GLOBAL VARIABLE to count student objects during processing
var button = document.querySelector(".buttonred"); // SETUP GLOBAL BUTTON WITH DOM ELEMENT



// CREATE STUDENT ARRAY OF 2 OBJECTS
    var students = [
        {
            name:"James Bond", //index0.name or index[0] with object-key "name" = Spiderman
            address:{street: '3300 University Blvd', city: 'Winter Park', state: 'FL'},     //index0.damage
            gpa:[2.5, 3.5, 4.0],
            date: new Date()
        },
        {
            name: "Kevin Hart", //index1.name or index[1] with object-key "name" = Batman
            address: {street: '9336 Civic Center Drive' , city: 'Beverly Hills', state: 'CA'},
            gpa:[3.0, 3.6, 4.5],   //index1.health
            date: new Date(),

            name: "Eminem", //index1.name or index[1] with object-key "name" = Batman
            address: {street: '19946 Dresden Ave' , city: 'Detroit', state: 'MI'},
            gpa:[2.2, 1.7, 3.0],   //index1.health
            date: new Date()

        }];


//var max = 1; // Store total number of student objects  -- reset this to your_array_name.length!!
var myArray = myArray.length;

// CREATE FUNCTION TO CONSOLE.LOG OUT ALL STUDENT OBJECTS/INFO
var consoleData = function () {

    for (var i = 0, j = students.length; i < j; i++){
        console.log('Name: ' + students[i].uname);
        console.log('Address: ' + students[i].address.street + ' ' + students[0].address.city + ' ' + students[0].address.state);
        console.log('GPA: ' + students[i].gpa);
        console.log('Date: '
        + students[1].date.getMonth() + "/"
        + students[1].date.getDate() + "/"
        + students[1].date.getFullYear() + "/")
    }

}

// CREATE FUNCTION TO DYNAMICALLY ADD A * NEW * STUDENT TO ORIGINAL ARRAY OF OBJECTS
var addData = function(newName, newStreet, newCity, newState, newGPA, newDate){

}


// CREATE FUNCTION TO READ THROUGH ARRAY OF GPAs and Calculate 'GPA AVERAGE' OF ALL GPAs
var gpaAvg = function(myArray){

    //console.log(myArray.length);
    var gradeAvg = 0;
    for (var i = 0, max = myArray.length; i < max; i++){
        gradeAvg = gradeAvg + myArray[i];
    }
};
    var num = gradeAvg/max;
    return num.toFixed(2); //Return Math.toFixed(gradeAvg/max)


// CREATE FUNCTION TO DISPLAY HTML OF ALL STUDENT INFO
var displayData = function(){

    // Define DOM elements for HTML page/display
    console.log("This is where you need to get access to your DOM Elements by ID");
    var innerName = document.getElementById("name");
    var innerAddress = document.querySelector("#address");
    var innerGPA = document.querySelector("#gpa");
    var innerDate = document.querySelector("#date");
    var innerAvgGPA = document.querySelector("#gpaavg");


    // IF THE NUMBER of Student Objects LEFT OVER IS NOT = TO THE MAX+1, DISPLAY ANOTHER STUDENT
	if (i !== max+1){

      //console.log("This is where you need to get use innerHTML");

        innerName.innerHTML = 'NAME:  ' + students[i].uname;
        innerAddress.innerHTML = 'Address: ' + students[i].address.street + ' ' + students[i].address.city + ' ' + students[i].address.state;
        innerGPA.innerHTML = 'GPA: ' + students[i].gpa;
		// GET THE DATE - ONLY NEED THIS AFTER EVERYTHING ELSE HAS BEEN DISPLAYED
        innerDate.innerHTML = 'Date: '
        + students[i].date.getMonth() + "/"
        + students[i].date.getDate() + "/"
        + students[i].date.getFullYear();

        //console.log(students[i[.gpa)
        var avg = gpaAvg(students[i].gpa);

        innerAvgGPA.innerHTML = 'Average GPA: ' + avg;
        console.log(students[i].gpa.length);


        // invoke gpaAvg function and pass all GPAs for average calculation (students[i].gpa)


    // Else change the button text to DONE
	}else{
		button.onclick = "return false"; //DISABLE THE CLICK EVENT
        document.querySelector('.buttonred').innerHTML = 'DONE!!!';  //CHANGE THE 1ST INSTANCE OF CLASS 'BUTTONRED' TEXT TO 'DONE'

	};
	i++ // Increment number of items after each student object is processed
	return false;
};

var max = students.length; //Track of number of student objects of arrays

// Create Button for click event
button.onclick = displayData;  // Every time the "NEXT" button is clicked, call the "displayData" function

// Print titles to Console.log showing original objects + Newly Added Objects
console.log('********* Below shows the original objects **************')
consoleData();  //Invoke function that console logs out all the data
addData('J Cole', '2014 Forest Hills Drive', 'Fayetteville', 'North Carolina', [3.2, 2.9, 3.5], new Date());
// consoleData();  // Invoke Function that Console Logs out all the data
// addData('Black Widow', '123 My Super Hero Way', 'Orlando', 'Florida', [3.2, 4.0, 2.2], new Date());
console.log(' ');
console.log('********* Below shows the new object added to the original object **************')
consoleData();  // Invoke Function that Console Logs out all the data a 2nd time
displayData();  // Invoke Function that prints Student Info to HTML page

})();  // end wrapper
/*
    Levance Wamley
    1-23-15
	* Mid Terms for PWA-1
*/


(function() {   //create a self executing function
    var button = document.querySelector(".buttonred");
    var i = 0;
//create a array for the students
    var student = [//this will be for only 2 students this will be further explained in a later function
        {
            name: "True Religion", // this will be for the variable index0.name
            address: {street: "4953 International Drive", city: "Orlando", state: "florida"},
            gpa: [3.2, 3.6, 4],
            date: new Date()
        },
        //student 2
        {
            name: "Timberland",// this will be for the variable index1.name
            address: {street: "15777 S Apopka Vineland Rd", city: "Orlando", state: "Florida"},
            gpa: [3.2, 3.6, 4],
            date: new Date()
        }];

    //this function will be used to console out all of the stuff in the array student
    var consoleData = function(){
             for (var i = 0,j = student.length; i < j; i++){
                 console.log("Name: "+student[i].name);
                 console.log("Address: "+student[i].address.street+" "+student[i].address.city+" "+student[i].address.state);
                 console.log("GPA: "+student[i].gpa);
                 console.log("Date: "
                 +student[i].date.getMonth()+"/"
                 +student[i].date.getDate()+"/"
                 +student[i].date.getYear()

                 );
             }
        return false;
    };
//this is the function for the new student this is need because In order to have the application to work we need to have something to signify the means of an end
    var newStudent = function(newname,newstreet,newcity,newstate,newgpa,newdate) {// this is for the pie store student
            //we are using this to add a new student
        student.push({
            name: newname, // this will be for the variable index2.name
            address: {street: newstreet, city: newcity, state: newstate},
            gpa: newgpa,
            date: newdate
        });
    };



    //Function that calculates the average GPA
     var averageGPA = function(myAry){

         var aver = 0;//make a for loop to have the loop go through the numbers in the gpa array so it gather them all so it can calculate the average
         for (var i = 0,max = myAry.length; i < max; i++){
             aver = aver + myAry[i];
         }
       var number = aver/max;
         return number.toFixed(2); //this is to round the average between aver and max to the next 2 spots.

     };

    //this function is to display all of the info in the HTML

    var displayInfo = function(){
        //DOM Elements for display
        var innerName = document.getElementById("name");// the elements do not need to use #
        var innerAddress = document.querySelector("#address"); //query has to use the #
        var innerGPA = document.querySelector("#gpa");
        var innerDate = document.querySelector("#date");
        var innerAvgGPA = document.querySelector("#gpaavg");

        //the code below is for the browser to check and to see if there is anymore student information

        if(i !== max+1){
            innerName.innerHTML = "Name: "+student[i].name;
            innerAddress.innerHTML = "Address: "+student[i].address.street+" "+student[i].address.city+" "+student[i].address.state;
            innerGPA.innerHTML = "GPA: "+student[i].gpa;
            innerDate.innerHTML = "Date: "
                +student[i].date.getMonth()+"/"
                +student[i].date.getDate()+"/"
                +student[i].date.getYear();

            //console out the gpa in student[i]

            var avg = averageGPA(student[i].gpa);

            innerAvgGPA.innerHTML ="Average GPA: "+ avg;
            console.log(student[i].gpa.length)






        }

    };






}());
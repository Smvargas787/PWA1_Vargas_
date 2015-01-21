/**
 * Created by RicanChica on 1/14/15.
 */
//Selena's Car-O-Matic

/*function makeCar() {
    var makes =["Chevy","GM","Fiat","Webville Motors","Tucker"];
    var models = ["Cadillac", "500", "Bel-Air","Taxi", "Torpedo"];
    var years = ["1955","1957", "1948", "1954","1961"];
    var colors = ["blue" , "red" , "tan" , "white"];
    var convertible = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) +1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
};

    console.log(+car.make + " came from this Array of choices: " +makes);
    console.log(+ car.model +" came from this Array of choices: " +models);
    console.log(+car.year + " came from this Array of choices: " +years);
    console.log(+ car.color + " came from this Array of Choices: " +colors);

    document.write("<br>" +car.make + " came from this Array of choices: " +makes);
    document.write("<br>" + car.model +" came from this Array of choices: " +models);
    document.write("<br>" + car.year +" came from this Array of choices: " +years);
    document.write("<br>" +car.color + " came from this Array of Choices: " +colors);

    return car;



    }
makeCar();

    function displayCar(car) {
        console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);


        console.log("Your new car is a " + car.year + " " + car.make + " " + car.model,"!");
        alert("Your new car is a " + car.year + " " + car.make + " " + car.model , "!");
    document.write("<br>" + "Your new car is a " + car.year + " " + car.make + " " + car.model,"!");



    //var phrase = words1.rand1 + " " + words2.rand2 + " " + words3.rand3;
    //alert(phrase);
}

var carToSell = makeCar();
displayCar((carToSell));

//makePhrases();
*/

var makes = {

    key1:"Toyota",
    key2:"Nissan",
    key3:"Dodge",
    key4:"Mitsubishi",
    key5:"Honda"
};

var models = {
    key1:"Skyline",
    key2:"Mustang",
    key3:"Eclipse",
    key4:"Lamborghini",
    key5:"Bentley"
};

var years = {
    key1:"2020",
    key2:"1995",
    key3:"1959",
    key4:"1823",
    key5:"3001"
};



var colors = {
    key1:"Blue",
    key2:"Red",
    key3:"Silver",
    key4:"Pink",
    key5:"Black"
};

var convertible = {
    key1:true,
    key2:false
};

function makeCar() {
    var rand1 = Math.floor(Math.random() *Object.keys(makes).length)+1;
    var rand2 = Math.floor(Math.random() *Object.keys(models).length)+1;
    var rand3 = Math.floor(Math.random() *Object.keys(years).length)+1;
    var rand4 = Math.floor(Math.random() *Object.keys(colors).length)+1;
    var rand5 = Math.floor(Math.random() * 5) +1;
    var rand6 = Math.floor(Math.random() * 2);


    var randomKeys1 = "key" +rand1;
    var randomKeys2 = "key" +rand2;
    var randomKeys3 = "key" +rand3;
    var randomKeys4 = "key" +rand4;
    var randomKeys5 = "key" +rand5;
    var randomKeys6 = "key" +rand6;

    var car = {

        make: makes[randomKeys1],
        model: models[randomKeys2],
        year: years[randomKeys3],
        color: colors[randomKeys4],
        passengers:[randomKeys5],
        convertible: convertible[randomKeys6],
        mileage: 0
    };

    return car;

}makeCar();


function displayCar(car) {

    console.log("MAKES has this many Keys: " +Object.keys(makes).length);
    console.log("MODELS has this many Keys: " +Object.keys(models).length);
    console.log("YEARS has this many Keys: " +Object.keys(years).length);
    console.log("COLORS has this many Keys: " +Object.keys(colors).length);
    console.log("CONVERTIBLE has this many Keys: " +Object.keys(convertible).length);



    document.write("<br>"+"MAKES has this many Keys: " +Object.keys(makes).length);
    document.write("<br>"+"MODELS has this many Keys: " +Object.keys(models).length);
    document.write("<br>"+"YEARS has this many Keys: " +Object.keys(years).length);
    document.write("<br>"+"COLORS has this many Keys: " +Object.keys(colors).length);
    document.write("<br>"+"CONVERTIBLE has this many Keys: " +Object.keys(convertible).length);

    for(var key in car) {
        document.write("<br>", "For in Loop Results: ", car[key], " ");
        console.log("For in Loop Results: ", car[key]);
    };

}


var carToSell = makeCar();

displayCar(carToSell);




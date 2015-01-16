/**
 * Created by RicanChica on 1/14/15.
 */
//Selena's Car-O-Matic

function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
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

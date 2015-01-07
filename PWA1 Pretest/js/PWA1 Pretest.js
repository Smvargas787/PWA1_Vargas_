/**
 * Created by RicanChica on 1/5/15.
 */

/*
 Selena Vargas
 Final Exam
 PF 1411
 11/19/14
 */

//alert("Testing 1, 2, 3!");



//Prompting

var itemCost = prompt("We are going to find out the price of a discounted item.\nWhat is the price of your item?");

//Validation Prompting
while(itemCost==="" || isNaN(itemCost)){
    itemCost = prompt("Please enter in a correct value and don't leave blank!\nWhat is the price of your item?");


}if(itemCost===""){
    itemCost = prompt("Please don't leave blank!\nTell me the price of your item please.");


}else if(isNaN(itemCost)){
    itemCost = prompt("You can only use numbers!\nPlease tell me the price of your item.");


}

var discountPer = prompt("What is the percentage of your discount for the item?");

//2nd Validation
while(discountPer==="" || isNaN(discountPer) || discountPer>100) {


    if (discountPer === "") {
        discountPer = prompt("Please don't leave blank!\nWhat is the percentage of your discount for the item?");


    } else if (isNaN(discountPer)) {
        discountPer = prompt("You can only use numbers!\nPlease tell me the discount percentage of your item.");


    } else if (discountPer > 100) {
        discountPer = prompt("Please only enter numbers from 0 to 100.\nWhat is the percentage of your discount for the item?");


    }
}
//Function
function discountCalc(price,discountPer){
    var discountPrice = (100-discountPer)/100 * price;

    return discountPrice;

}

//Returning Function
var returnedDiscountPrice = discountCalc(itemCost,discountPer);
console.log("The price of your item is now $"+returnedDiscountPrice+", your original price was $"+itemCost+", and your discount percentage from it all is "+discountPer+"%.");

//THANK YOU FOR ALL YOUR HELP MR. WILLIAMS !!! BEST CLASS YET ! ^-^
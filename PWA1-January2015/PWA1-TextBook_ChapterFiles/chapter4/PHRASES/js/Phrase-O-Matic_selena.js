/**
 * Created by RicanChica on 1/14/15.
 */
//Selena's Car-O-Matic

function makePhrases() {
    var words1 = {key1:"24/7", key2:"multi-tier", key3:"30,000 foot", key4:"B-to-B", key5:"win-win"};
    var words2 = {key1:"empowered", key2:"value-added", key3:"oriented", key4:"focused", key5:"aligned"};
    var words3 = {key1:"process", key2:"solution", key3:"tipping-point", key4:"strategy",key5: "vision"};

    //Changed equation to multiply by Length of Objects--instead of arrays
    //Also added plus 1 to avoid getting a "key0"
    //Won't work: var rand1=Math.floor(Math.random() * words1.length);
    //var rand1 = Math.floor(Math.random() * words1.length); //ARRAY

    var rand1 = Math.floor(Math.random() * Object.keys(words1).length + 1);
    var rand2 = Math.floor(Math.random() * Object.keys(words2).length + 1);
    var rand3 = Math.floor(Math.random() * Object.keys(words3).length + 1);

    //ADDED: Build random keys for each object
    var randomkey1 = "key" + rand1;
    var randomkey2 = "key" + rand2;
    var randomkey3 = "key" + rand3;


    var phrase ="Your Random Phrase is: "+ words1[randomkey1] + " " + words2[randomkey2] + " " + words3[randomkey3];
    alert(phrase);

    console.log(randomkey1 + "of words1 is " + words1[randomkey1] + randomkey2 + "of words2 is " + words2[randomkey2] + randomkey3 + "of words3 is " + words3[randomkey3]);
    document.write("<br>" + randomkey1 + " of words1 is " + words1[randomkey1] + randomkey2 + " of words2 is " + words2[randomkey2] + randomkey3 + " of words3 is " + words3[randomkey3]);

}
makePhrases();

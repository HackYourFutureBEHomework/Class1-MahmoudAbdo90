
//1.String 
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
myString = myString.replace(/,/g," "); //removing the commas and replace them with spaces
console.log(myString);

//2.Array
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle"); //adding the turtle to the end of the array
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat"); //adding the meerkat to position [1] while removing "0" elements
console.log(favoriteAnimals);
console.log("'The array has a length of: " + favoriteAnimals.length + "'");
favoriteAnimals.splice(3, 1); //removing the poor giraffe her position [3] and giving and order to remove only "1" element
console.log(favoriteAnimals);
var indexOfmeerkat = favoriteAnimals.indexOf("meerkat"); //assigned a var to the indexOf to just get the index of it then i can remove it if i would like to (am not sure if this is the best solution or not but i found the simplest)
console.log("'The item you are looking for is at index: " + indexOfmeerkat + "'"); //it gets me back [1] the position of "meerkat"



//link ref. https://github.com/HackYourFuture/JavaScript1/blob/master/Week3/MAKEME.md

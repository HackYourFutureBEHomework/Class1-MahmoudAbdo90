
// 1. Strings!

// Consider the following string:

// let myString = "hello,this,is,a,difficult,to,read,sentence";
// 1.1 Add the string to your file and log it.
// 1.2 Log the length of myString.
// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
// 1.4 Log myString to see if you succeeded.

// let myString = "hello,this,is,a,difficult,to,read,sentence";

// console.log(myString.replace(/,/g ," "));

// 2. Arrays!

// Consider the following array:

// let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
// 2.2 Log your new array!
// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
// 2.5 Log your new array!
// 2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
// 2.7 Jason does not like 'giraffe', delete this animal from the array.
// 2.8 Again log your new array.
// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
// 2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push("turtle");

console.log(favoriteAnimals);

favoriteAnimals[1] = "meerkat";

console.log(favoriteAnimals);
console.log(`this array (favoriteAnimals) of ${favoriteAnimals.length} is awesone`);

console.log("I just changed the data inside the array by adding with array methods new data to my array");

favoriteAnimals.splice(2, 1);
console.log(favoriteAnimals);

console.log("the index of meerkat in favorite animals is " + favoriteAnimals.indexOf("meerkat"));

//starting to work on the second excercise 
//forked Eduardo's repo
//made my own branch
//homework ref. https://github.com/HackYourFuture/JavaScript1/blob/master/Week3/MAKEME.md
// More JavaScript 

//1. Create a function that takes 3 arguments and returns the sum of the these arguments.
function add(first, second, third) {
    return first+second+third;
}
var sum = add(1, 2, 3);
console.log(sum);

//2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    return color;
}
var car = colorCar("'a red car'");
console.log(car);

//3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
function fun(name, age) {
    return ("My name is " + name + " and i am " + age);
}
var me = fun("Mahmoud", 28);
console.log(me);

//4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(blue, M, C) {
    return (blue + M)
}
var vehicles = vehicleType("a blue", " Motorbike", " Car");
console.log(vehicles);

//5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
console.log(3 === 3 ? "yes" : "no");

//6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(blue, M, C, age) {
    return (blue + age + C)
}
var transPortation = vehicle("a blue", " Motorbike", " Car", " used");
console.log(transPortation);

//7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let array = ["motorbike", "car", "caravan", "bike", "bus"]
console.log(array[2]); //8. How do you get the third element from that list?

//9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

function vehicle2(color, age, Ar) {
    return (color + age + Ar[3]);
}
let array2 = vehicle2("a green ", "new ", ["motorbike", "car", "caravan", "bike", "bus"]);
console.log(array2);
//i dont know if its the perfect solution or not 
//but instead of changing the vehicle function i made a new one 
//to see how it works with an array 
//please let me know if this answer not sufficient 

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
var x = array.length;
for(let i = 0; i < x; i++) {
    var text = "\"Amazing Joe's Garage, we service " + array[i] + " and " + array[3]+"s" + ".\"";
    console.log(text);
}
//this one is not working, i need help with it !

//11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

//12. Create an empty object.
//13. Create an object that contains the teachers that you have had so far for the different modules.
//14. Add a property to the object you just created that contains the languages that they have taught you.
var teachers = { Miet:"html", Nick:"css", Rob:"js", Claudio:"git" }; 

//15. Write some code to test two arrays for equality using == and ===. Test the following:
let f = [1,2,3];
let y = [1,2,3];
let z = y;

if (f == y) {
    console.log(true);  //i think its true before i run it, because for js they look the same
} else { console.log(false);
}

if (f === y) {
    console.log(true);
//it will be true as they curry the same value and we are using ===
} else { 
    console.log(false);
}


if (z == y) {
//its true cuz the last variable we gave an order to make y = z
//lets see xD 
console.log(true);
} else { console.log(false);
}


if (z == f) {
// i think this one will not be true as we had a command to make y = z 
// so js will not consider y == z == f (am not really sure)
console.log(true);
} else { console.log(false);
}
//well i am mistaken in the first 2, such a shame :/ i will read more about it till i figureout the reason

//16. Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
//Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
//Does the order that you assign (o3 = o2 or o2 = o3) matter?
console.log(o3);
//yes it changes o3 whenever i change in o2 but it changing in o1 does not matter because js takes the commane o3 = o2 directly 
// so from this point i think command o3 = o2 it matters 
console.log(o1 === o2 ? "yes" : "no"); // no
console.log(o3 === o2 ? "yes" : "no"); // yes

//17. What does the following code return? (And why?)
let bar = 42;
typeof typeof bar;
// it returns nothing cuz we did not give it the order to print it
console.log(typeof typeof bar);
//one typeof returns a num
//typrof typeof return a string
// i think because 2 typeof the first one it defines the value which is a number (42)
//and the second typeof returns the definition of the word "number" which is string 
//(this is logical thinking from my side so please correct me if am worng)

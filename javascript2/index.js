
//1) Create a function that takes 3 arguments and returns the sum of the these arguments.
function arguments(first,second,third){
    
    return first+second+third;
}

console.log(arguments(2,4,5));

//2) Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
    return "this is a " + color + " car";    
}

console.log(colorCar("green"));

//3) Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

function importantObject(object){
     return object = {
        dogName:"rupert",
        breed:"bulldog"
    }
}

console.log(importantObject());


//4) Create a function named vehicleType that receives a color, and a code, 1 for car, 
// 2 for motorbike. 
// And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
function vehicleType(car, motorbike){
    return "this is a " + car;
}

console.log(vehicleType("blue car"));


//5) Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

console.log(3===3 ? "yes" : "no");

//6) Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
function vehicle(age){
    return "blue"+age;
}

//===============================================

//7) Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
// How do you get the third element from that list?
let vehicles = ["motorbike", "caravan", "bike", "vessel"];
function vehicle(){
    console.log(vehicles[2]);
}
vehicle();

// 8)Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
//i am trying so hard to get this one
////////============================================

// 9)Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
function someVehicles(){
    for(let i = 0; i < vehicles.length; i++){
        console.log(`Amazing Eduardo's Garage, we service  ${vehicles[0]}, ${vehicles[1]}, ${vehicles[2]}, ${vehicles[3]}  and some other stuff `);
    }
}
// What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicles.push("ferrari");
someVehicles();

//11)12) Create an empty object.
let iamEmpety = {};
console.log(iamEmpety);
// Create an object that contains the teachers that you have had so far for the different modules.


let teachersHackYourFuture = {
    Miet:"html & css",
    Nick:"html & css",
    Tiago:"command Line",
    Claudio:"git - github",
    Paul:"Javascript"
}

console.log(teachersHackYourFuture);

// 15)Write some code to test two arrays for equality using == and ===. Test the following:

    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;

    console.log(x == y ? "Yes, it is the same" : "No, it is not the same");
    console.log(z == y ? "Yes, it is the same" : "No, it is not the same");
    //I will look for more examples of this, I am not 100% sure.

    // 16)Take a look at the following code:
        let o1 = { foo: 'bar' };
        let o2 = { foo: 'bar' };
        let o3 = o2;

        console.log(o1 === o2 ? "yes, is equal" : "no, this is not equal");
        console.log(o3 === o2 ? "yes, it is equal" : "no, this is not equal");

// I FOUND THIS ON STACKOVERFLOW Because "equality" of object references, in terms of the == and === operators, is purely based on whether the references refer to the same object. This is clearly laid out in the abstract equality comparison algorithm (used by ==) and the strict equality comparison algorithm (used by ===).

// In your code, when you say a==b or a===b, you're not comparing the objects, you're comparing the references in a and b to see if they refer to the same object. This is just how JavaScript is defined, and in line with how equality operators in many (but not all) other languages are defined (Java, C# [unless the operator is overridden, as it is for string], and C++ for instance).

// JavaScript has no inbuilt concept of equivalence, a comparison between objects that indicates whether they're equivalent (e.g., have the same properties with the same values, like Java's Object#equals). You can define one within your own codebase, but there's nothing intrinsic that defines it.

// 17)What does the following code return? (And why?)


let bar = 42;

console.log(typeof typeof bar);

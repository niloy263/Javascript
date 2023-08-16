//      variable & operations
//let students = 20

//students +=1;
//students -=1;
//students *=2;
//students /= 2;
//let extrastudents= students % 3;

//let rs = 1 + 2 * 3 + 4; 

//console.log(rs);


/*          user input

let userame;
document.getElementById("myButton").onclick= function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username + "!!";
}*/

/*      input conversion
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;
console.log(" Happy Birthday! You are " , age, "years old.")

let x;
let y;
let z;
x = Number("3.14");
y = String(3.14);
z = Boolean ("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

/*          const
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);
//PI = 6.2;

circumference = 2 * PI * radius;
console.log("The value of circumference is: ", circumference);
*/

/*           MATH 
let x;
let y = 5;
let z = 7;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x);
//x = Math.abs(x);
//maximum = Math.max(x, y, z);
//minimum = Math.min(x, y, z);
x = Math.PI; 

console.log(x);
*/

/*          1
let a;
let b;
let c;


document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("myInput1").value;
    a = Number(a);

    b = document.getElementById("myInput2").value;
    b = Number(b);

    c = Math.sqrt (Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("label3").innerHTML = "Side C: " + c;
}
*/

/*          2
count = 0;
document.getElementById("decreasebtn").onclick = function(){
    count-=1;
    document.getElementById("label1").innerHTML = count;
} 

count = 0;
document.getElementById("resetbtn").onclick = function(){
    count=0;
    document.getElementById("label1").innerHTML = count;
} 

count = 0;
document.getElementById("increasebtn").onclick = function(){
    count+=1;
    document.getElementById("label1").innerHTML = count;
} 
*/
/*          Ludo
let x, y, z;
document.getElementById("rollbtn").onclick= function(){
    p = Math.floor(Math.random() * 6) + 1;
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("plabel").innerHTML = "Player 1: "+ p;
    document.getElementById("xlabel").innerHTML = "Player 2: "+ x;
    document.getElementById("ylabel").innerHTML = "Player 3: " + y;
    document.getElementById("zlabel").innerHTML = "Player 4: " + z;
}
*/

/*         String Properties

let username = "Niloy";
let phoneNumber = "123-456-7890";

//console.log(username.length);
//console.log(username.charAt(0));
//console.log(username.indexOf("o"));
//console.log(username = username.trim());
//console.log(username = username.toUpperCase());
//console.log(username = username.toLowerCase());
//console.log(phoneNumber = phoneNumber.replaceAll("-", "/"));
*/

/*      String Slicing
let fullname = "Niloy Kundu";
let firstname;
let lastname;

console.log(firstname = fullname.slice(0, fullname.indexOf(" ")));
console.log(lastname = fullname.slice(fullname.indexOf(" ") + 1));
*/ 

/*          Method Chaining 
let username = bro;
let letter = username.charAt(0). toUpperCase().trim();
console.log(letter);
*/

/*          if else statement
let age = 0;

if (age>=65){
    console.log("You are a senior citizen!");
}
else if(age>=18){
    console.log("You are an adult!");
}
else if(age<=0){
    console.log("You are not born yet!");
}
else{
    console.log("You are a child!");
}
*/

/*           Checked property
document.getElementById("button").onclick = function(){
    const checkBox = document.getElementById("checkBox");
    const visabtn = document.getElementById("visabtn");
    const masterbtn = document.getElementById("masterbtn");
    const paypalbtn = document.getElementById("paypalbtn");

    if(checkBox.checked ){
        console.log("You are Subscribed!");
    }
    else{
        console.log("You are not Subscribed");
    }

    if(visabtn.checked){
        console.log("You are paying by Visa Card!");
    }
    else if(masterbtn.checked){
        console.log("You are paying by Master Card!");
    }
    else if(paypalbtn.checked){
        console.log("You are paying by Paypal!");
    }
    else{
        console.log("You forgot to pay!");
    }
}
*/

/*               Switch case
let grade =90;

switch(true){
    case grade>=90:
        console.log("Your grade is A");
        break;
    case grade>=85:
        console.log("Your grade is B+");
        break;
    case grade>=80:
        console.log("Your grade is B");
        break;
    case grade>=75:
        console.log("Your grade is B-");
        break;
    case grade>=70:
        console.log("Your grade is C+");
        break;
    case grade>=60:
        console.log("Your grade is pass");
        break;
    case grade<=50:
        console.log("Your grade is F");
        break;
    default:
        console.log("Your grade is missing");
        break;
}
*/

/*          And
let temp = 19;
if (temp>0 && temp<30){
    console.log("The waether is good");
}
else{
    console.log("The weather is bad");
}
*/
/*          Or
let temp = 19;
if (temp>0 || temp<30){
    console.log("The weather is good");
}
else{
    console.log("The weather is bad");
}
*/

/*          while
while(1==1){
    console.log("Help!");
}
*/
/*while(1==1){
    console.log("Help! I'm stuck in an infinite loop");
}
*/

/*          Do While 
let username;
do{
    username = window.prompt("Enter your name:");
}
while(username=="")
console.log("Hello", username);
*/

/*Counter
for(counter=10; counter>0; counter--){
    console.log(counter);
}
console.log("Happy New Year!");
*/

 /*             Break= breaks out of a loop entirely
 continue=
 for(let i=1; i<=20; i+=3){
    if(i==7){
        continue;
    }
    console.log(i);
 }
 */

/*                Nested loop
let symbol = window.prompt("Enter a symbol:");
let rows = window.prompt("Row number:");
let columns = window.prompt("Column number:")
 for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById("myrectangle").innerHTML  +=symbol ;
    }    
    document.getElementById("myrectangle").innerHTML += "</br>";
 }
 */

 /*                 Function
 startprogram();
function startprogram(){
    let username= "Niloy";
    let age = 21;
    happybirthday(username, age);
}
function happybirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear", username );
    console.log("Happy Birthday to you!");
    console.log("You are", age, " years old!");
}
*/

/*                Return 
let area;
let height;
let width;

height = window.prompt("Enter the height:");
width = window.prompt("Enter the width:");

area = getArea(height, width);

console.log("The area is:", area);

function getArea(height, width){
    let result = height*width;
    return result;
}
*/

/*          Tunary function (1.a condition, 2.if statement for true, 3. if for false)
let adult = checkage(12);
console.log (adult);
function checkage(age){
    return age >= 20 ? true : false;
}

checkwinner(true);

function checkwinner(win){
    win ? console.log("You win") : console.log("You lose");
}

                  Let var
*/

/*            template literal
let name = "Niloy";
let items = 3;
let total = 34;

console.log(`Hello ${name}`);
console.log(`You have ${items} items`);
console.log(`Your total is $${total}`);

let text = 
`Hello ${name}
You have ${items} items
Your total is $${total}`;
console.log(text);

document.getElementById("mytext").innerHTML = text;
*/


/*           Format currency
let mynum = 100;

//mynum = mynum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//mynum = mynum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//mynum = mynum.toLocaleString(undefined, {style:"unit", unit:"celsius"});
//mynum = mynum.toLocaleString(undefined, {style:"percent"});
mynum = mynum.toLocaleString(undefined,{style:"unit", unit:"kilometer"});
console.log(mynum);
*/

/*             Number Guessing game
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
   let guess =  document.getElementById("guessnum").value ;
   guesses += 1;

   if(guess==answer){
    alert(`Your answer ${answer} is right. It took you ${guesses} guesses.`);
   }
   else if(guess<answer){
    alert("Your answer is smaller");
   }
   else{
    alert("Your answer is larger");
   }
}
*/

/*            Temperature conversion Program
document.getElementById("submitButton").onclick = function(){
    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("templabel").innerHTML = temp + "degree celcius";

    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFerhenhite(temp);
        document.getElementById("templabel").innerHTML = temp + "degree farhenhite";

    }
    else{
        document.getElementById("templabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp){
    return (temp-32) * (5/9);
}

function toFerhenhite(temp){
    return temp * 9/5 + 32;
}
*/

/*           Array
let fruits = ["apple","banana","mango"];
fruits.push("lemon");
fruits.pop();
fruits.unshift("kiwi");
fruits.shift();
let length = fruits.length;
let index = fruits.indexOf("kiwi");
//console.log(fruits);
//console.log(length);
console.log(index);
*/

/*          Loop through an array
let prices = [5,10,15,20];
for(let i=0; i < prices.length; i+=1){
    console.log(prices[i]);
}
for(let j=prices.length - 1; j >= 0; j -= 1){
    console.log(prices[j]);
}
for(let i of prices){
    console.log(i);
}
*/

/*      Sort of array of strings
let fruits = ["mango", "apple","banana","orange"];
//fruits = fruits.sort();
fruits = fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}
*/

/*     2D Array
let fruits = ["Mangoes","bananas", "apples"];
let vegetables = ["Carrot", "Onions", "Spenices"];
let meats = ["eggs", "chicken", "beef"];

let groceryshop = [fruits, vegetables, meats];
groceryshop[0][0]="niloy";

for(list of groceryshop){
    for(let food of list){
        console.log(food);
    }
}
*/

/*          Spread Operator 
let numbers = [1,2,3,4,5,6,7,8,9];
let maximum = Math.max(...numbers);
console.log(maximum);

let class1 = ["1", "2", "3"];
let class2 = ["7", "8", "9"];
class1.push(...class2);
console.log(...class1);
*/

/*          Rest 
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a,b,c,d,e));
function sum(...numbers){
    let total=0;
    for(number of numbers){
        total += number;
    }
    return total;
}
*/

/*          Callback
sum(2,3,displayConsole, displayDOM);

function sum(x,y,callback,callback1){
    let total = x + y;
    callback(total);
    callback1(total);
}

function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("func").innerHTML = output;
}
*/

/*          For Each Method
let students = ["patrick", "viera", "paul"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
function print(element){
    console.log(element);
}
*/

/*            Array Map
let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);
squares.forEach(print);
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3)
}
function print(element){
    console.log(element);
}
*/ 

/*              Array Filter 
let ages = [10,18,16,19,20];
let adults = ages.filter(checkage);
adults.forEach(print);

function checkage(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}
*/

/*              Array Reduce 
let prices = [5,10,15,20,25];
let total = prices.reduce(checkout);

console.log(`The Total amount is $ ${total}.`);

function checkout(total, element){
    return total + element;
}
*/

/*             Sort an array of Numbers 
let grades = [100,60,90,70,50,80];
grades = grades.sort(ascendingSort);
grades.forEach(print1);

grades = grades.sort(descendingSort);
grades.forEach(print2);

function ascendingSort(x,y){
    return y-x;
}

function descendingSort(x,y){
    return x-y;
}

function print1(element){
    console.log (element);
}

function print2(element){
    console.log (element);
}
*/  

/*              Function Expression
let count= 0;
function increase(){
    count+=1;
    document.getElementById("mylabel").innerHTML = count;
}
function decrease(){
    count-=1;
    document.getElementById("mylabel").innerHTML = count;
}
             //that or this//

let count = 0;

document.getElementById("increasebtn").onclick = function(){
    count += 1;
    document.getElementById("mylabel").innerHTML = count;
}
document.getElementById("decreasebtn").onclick = function(){
    count -= 1;
    document.getElementById("mylabel").innerHTML = count;
}  
*/

/*              Arrow Function Expressions 
const greeting = (usernmae) => console.log (`Hello ${usernmae}`)
greeting("Niloy");

const percentage = (x,y) => x/y * 100;  
console.log( `The percentage is: ${percentage(45,50)}%`);

//another decending order
let grades = [50,70,40,80,60,90];
grades.sort((x,y) => y-x);
grades.forEach((element) => console.log(element));
*/

/*              Shuffle an array 
let cards = ["A", "2","3","4","5","6","7","8","9","10","J","Q","K"];

shuffle(cards);
//console.log (cards[0]);
cards.forEach(card => console.log(card));

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
*/

/*                Nested Function 
let username = "Niloy";
let userInbox = 0;

login();

function login(){
    displayusername();
    displayuserInbox();

    function displayusername(){
        console.log(`Welcome ${username}`);
    }
    function displayuserInbox(){
        console.log(`You have ${userInbox} message`);
    }
}
*/

/*                   Map 
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 5],
    ["underwear", 10]
]);
let shopping = 0;

//get
//shopping += store.get("t-shirt");
//shopping += store.get("socks");

//set
store.set("hat", 30);

//delete
//store.delete("socks");

//searching
console.log(store.has("hat"));

//total element size
console.log(store.size);

//console.log(shopping);

store.forEach((value, key) => console.log(`${key} $${value}`));
*/

/*                      Object 
const car = {
    model: "Mustang",
    color: "Red",
    year:2023,

    drive : function(){
        console.log("You drive the car!");
    },
    brake : function(){
        console.log("Step down to the brake");
    }
}
const car2 = {
    model: "Audi",
    color: "Black",
    year:2019,

    drive : function(){
        console.log("You drive the car!");
    },
    brake : function(){
        console.log("Step on the brake");
    }
}
console.log (car2.model);
console.log (car.color);
console.log(car2.year);

car2.drive();
car.brake();
*/

/*                  This Keyword 
//outside the class this is the window property//
const car = {
    model: "Mustang",
    color: "Red",
    year:2023,

    drive : function(){
        console.log(`Driving the ${this.model} which insists of ${this.color} color & ${this.year} year's model.`);
    }
}
const car2 = {
    model: "Audi",
    color: "Black",
    year:2019,

    drive : function(){
        console.log(`Driving the ${this.model} which insists of ${this.color} color & ${this.year} year's model.`);
    }
}
car.drive();
car2.drive();
*/

/*                        Classes
class Player{
    score = 0;
    pause(){
        console.log("you paused the game.");
    }
    break(){
        console.log("You are out of the game.");
    }
}
const Player1 = new Player();
let Player2 = new Player();
let Player3 = new Player(); 

Player1.score += 1;

console.log(Player1.score);
console.log(Player1.pause());
console.log(Player1.break());
console.log(Player2.score);
console.log(Player3.break());
 */

/*                         Constructor 
class Student{

    constructor(name,age,cgpa){
        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
    }
    study(){
        console.log(`${this.name} is studying.`)
    }
}
const Student1 = new Student('Andry', 23, 3.5);
const Student2 = new Student("Enrick", 22, 3.75);

console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.cgpa);
Student1.study();

console.log(Student2.name);
console.log(Student2.age);
console.log(Student2.cgpa);
Student2.study();
*/

/*                          Static Keyword
class Car{
    static numberofcars = 0;

    constructor(model){
        this.model = model;
        Car.numberofcars += 1;
    }
    static race(){
        console.log("3...2....1...Go!")
    }
}

const Car1 = new Car("Mustang");
const Car2 = new Car("Audi");
const Car3 = new Car("BMW");

Car.race();
console.log(Car.numberofcars);

console.log(Car1.numberofcars);
console.log(Car2.numberofcars);
console.log(Car3.numberofcars);
*/

/*                          Inheritance 
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is running.`)
    }
}

class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`This ${this.name} is swimming.`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`This ${this.name} is flying.`);
    }
}

const Rabbit1 = new Rabbit();
const Fish1 = new Fish();
const Hawk1 = new Hawk();

console.log(Hawk1.alive);
Hawk1.eat();
Hawk1.sleep();
Hawk1.fly();
*/
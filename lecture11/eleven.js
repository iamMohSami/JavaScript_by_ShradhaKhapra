//  What are Objects in JS

// A javaScript object is an entity having state and behavior (properties and method) 
// examples of Objects in JS 


// we know objects can have state(properties) and methods(functions)


const student = { 
    fullName : "Moh Sami",  //this is a state(property)
    marks : 99, //this is a state(property)
    printMarks : function () {
        console.log("Marks = " , this.marks) ;
    }
}; 

// If "this" is not used we get a error : 
//eleven.js:14 Uncaught ReferenceError: marks is not defined
// at Object.printMarks

// THUS WE NEED TO USE "this."" keyword

//  ABOUT "THIS" keyword 

/* 
In the corrected code, this.marks is used instead of just marks. The this keyword refers to the current object (in this case, student), so this.marks correctly accesses the marks property of the student object.

Without using this, JavaScript looks for a variable named marks in the current scope, and since marks is not defined within the scope of the printMarks function, it results in a "ReferenceError: marks is not defined" error.

Using this ensures that you are accessing the property of the object to which the method belongs. */ 


// BUT IF WE USE A ARROW FUNCTION INSTEAD, .this keyword doesnt work 

const student2 = { 
    fullName : "Khan",  //this is a state(property)
    marks : 98, //this is a state(property)
    printMarks : () => {
        console.log(`The marks of ${this.fullName} are : ${this.marks}`)
    }
}; 

// OUTPUT :  The marks of undefined are : undefined

/*  WHY ? 
In JavaScript, arrow functions do not have their own this context. Instead, they capture the this value from the surrounding lexical scope at the time of their creation. In the case of the printMarks arrow function in your code, it captures the this from the global scope, which is likely undefined or refers to the global object (e.g., window in a browser environment).

In the arrow function, this.fullName and this.marks are attempting to access properties on the global object (window in a browser environment) rather than the student2 object.

To fix this, you should use a regular function expression for methods within an object */


// PROTOTYPES in JS 
// Prototype is a Special and Default OBJECT which is avlble in every OBJECT created with some special methods/functions

// example : 

let fruits = ["Apple" , "Mango" , "Litchi"] ; 
console.log(fruits);
console.log(typeof fruits);  // output = object

// we can notice that even this array/object has a default PROTOTYPE with it

// if we push or pop items from array 
console.log(fruits.pop());
console.log(fruits.push("WaterMelon")) ;
console.log(fruits);
// but we have never defined this push/pop functions in our object array ; then from where does it comes?? THIS ARE FROM THE PROTOTYPE OF THE OBJECT and OBJECT inherits all the properties from this default prototype   


// THIS OBJECT has a func which is used to calcTax for each employee

const employeeTax = {
   /* calcTax : function () {
        console.log("Tax rate is 10%") ;
    } THIS IS ALSO CORRECT WAY OF DEFINING A FUNCTION IN A OBJECT BUT THE BELOW METHOD IS INDUSTRY PRACTICE and is recommeneded*/
    calcTax() {
        console.log(`Tax rate is 10%`);
    }
}

const newEmployee = {
    salary : 100000
}

const newEmployee2 = {
    salary : 50000
}

const newEmployee3 = {
    salary : 30000
}


// Now instead of adding extra calcTax function for each employee, we will just INHERIT the employeeTax object as a PROTOTYPE for this newEmployee function in order to use the calcTax fnction for this new object as well
// HOW TO :  using "  .__proto__  " 
//               object2.__proto__ = object1 ; 

newEmployee.__proto__ = employeeTax ; 
newEmployee2.__proto__ = employeeTax ; 
newEmployee3.__proto__ = employeeTax ; 

console.log(newEmployee.calcTax()) ;
console.log(newEmployee2.calcTax()) ;
console.log(newEmployee3.calcTax()) ;

// Another way of INheriting the old functions is using create
const newEmployee4 = Object.create(employeeTax) ; 
newEmployee4.salary = 30000;
console.log(newEmployee4.calcTax()) ;


//  If object & prototype have same method/function, object's method will be used. 

const richEmployee = {
    salary : 1000000000000 ,
    calcTax()  {
        console.log("The Tax is high and 30%") ;
    }
}

richEmployee.__proto__ = employeeTax ; 

// Now, rich Employee object has its own func "calcTax" and we inherited a proto which also has same function name calcTax , so when we do richEmployee.calcTax() , THE OBJECTS FUNCTION GETS EXECUTED AS IT GETS MORE PRIORITY THAN PROTO's function 

// CLASSES IN JS 
/* Class is a program-code template(BLUEPRINT)for creating objects
Those objects will have some state (variables) & some behaviour (functions) inside it*/

// syntax of creating a Class : 
/* 
class MyClass {
constructor( ) { ... }
myMethod( ) { ... }
}
let myObj = new MyClass( ) ; */ 


class ToyotaCar {

    start() {
        console.log("start") ;
    }

    stop() {
        console.log("Stop") ;
    }
     
    color(clr) {
        this.color = clr ;
        console.log(`The Color of Car is ${this.color}`);
    }
}


console.log("ToyotaCar") ; 
console.log(typeof ToyotaCar) ; // OUTPUT : function


let fortuner = new ToyotaCar ; 
// new is a keyword which creates new object using a class

let innova = new ToyotaCar;

console.log(fortuner.start());
console.log(innova.stop());
console.log(fortuner.color("White"));


// CONSTRUCTOR in JS Objects // 

/* It is a special and predefined Function/Method in every object which gets intialized whenever a new object is created
*/

// Consider fortuner , using proto, we have added START STOP and COLOR init, but if we invoke constructor for it 

console.log(fortuner.constructor) 
// This prints the by default constructor of fortuner object


// CREATING CUSTOM CONSTRUCTORS

// IMP : whenever we create a object. The constructor is invoked automatically 

class demo {
    constructor() {
        console.log("I am a Custom Constructor") ; 
    }

    Hi () {
        console.log("Hi") ;
    }
}

let temp = new demo ; 
// "I am a Custom Constructor gets print on console automatically when we intialise a new object"

// In case where we dont provide custom constructor, there also the default constructor gets invoked, but it doesnt print anything on the console as the default constructor doent have any console.log statements init



// INHERITANCE 

// inheritance is passing down properties & methods from parent class to child class using keyword
// "extends"

class Parent {
    hello() {
        console.log("Hello.. from a parent") ;
    }
}

class Child extends Parent {
    bye() {
        console.log("Byee.. from a child") ;
    }
}

let myObject = new Child ; 
console.log(myObject.bye()) ;

// Also, 
console.log(myObject.hello()); 
// Even this works because Child class has inherited from Parent class which has a Hello function

// Example : 

class Person{
    constructor() {
        this.species = "Homo Sapiens" ;
    }
    eat() {
        console.log("I can Eat") ; 
    }

    sleep() {
        console.log("I can sleep") ;
    }

    work() {
        console.log("Do Nothing until I get a Job..") ;
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve Problems and Build Something") ; 
    }
}

class Doctor extends Person {
    work() {
        console.log("Treat Patients..!") ;
    }
}

let Sami = new Engineer;
console.log(Sami.eat());
console.log(Sami.sleep());
console.log(Sami.constructor);

// Also, 
console.log(Sami.work());
// THIS IS CALLED " METHOD OVERRIDING" ;
// Method Overriding : If Child & Parent have same method, childs method will be used

// SUPER KEYWORD : 

// The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods

// CONSIDER 
class Parent2 { 
    constructor() {
        this.age = 46 ;
    }

    eat() {
        console.log("Eat") ;
    }
}

class Child2 extends Parent2{
    constructor() {
        super();  // if we dont use super() keyword we get an error
        this.age = 18 ;
    }

    play() {
        console.log("I Play") ;
    }
}

let iqbal = new Child2 ; 

// HERE, WHEN WE RUN THIS CODE ; WE GET AN ERROR : without using super()

/*eleven.js:286 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    at new Child2 (eleven.js:286:9)
    at eleven.js:294:13*/ 

// MEANS KE, as child2 extends parent2, during the execution of child constructor, we also need refrence to Parent constructor also, which is achieved using super() keyword 

// Thus, both child2 and parent2 constructors gets invoked when we create a new object named iqbal using child2 class which inherits parent2 class also 

// During Inheritance, if child class needs to pass imp info to its parent class, it is done using
//  super() keyword by passing as arguements i.e. super(name)



// TRY - CATCH BLocks 
// Consider 

let a = 5 ; 
let b = 3 ; 

console.log(`Output is ${a+b}`);
console.log(`Output is ${a+b}`);
//Consider , by mistakely, we make a erro in line 321 {UNCOMMENT LINE 321}
// console.log(`Output is ${a+c}`);
console.log(`Output is ${a+b}`);
console.log(`Output is ${a+b}`);
//We get an error on console
// BUT LINE 322 and 323 DID NOT GETS EXECUTED AS ERROR OCCURED AT LINE 321
// TO AVOID THIS WE USE TRY CATCH BLOCK 
// Syntax : 
/*
try {
... normal code
} catch ( err ) { //err is error object
... handling error
}*/

// Consider, if we have a doubt that line 321 might get an error due to some reason but we are not sure but we dont want execution on subsequent lines to hinder due to error on line 321
// Thus , we put our doubtful line in TRY block
// In case , IF EVER ERROR occurred in TRY Block line
// The catch statemanets gets executed


console.log(`Output is ${a+b}`);
console.log(`Output is ${a+b}`);
try{
    console.log("Output is :" , a+c) ; //Error will occur 
}
catch(err) {
    console.log("The error occured in Try block is :" , err) ;
}
console.log(`Output is ${a+b}`);
console.log(`Output is ${a+b}`);

// NOTE THAT LINE 349 and 350 STILL GIVES OUTPUT :)))
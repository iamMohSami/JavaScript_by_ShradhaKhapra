//Functions : Block of code that performs a specific task, which is written/created once and can be invoked/called many times whenever needed 

// till now also, we have seen many functions 
//ex : 

console.log("log is a function") ; //log is a function with specific task : To print on console

"abc".toUpperCase() ; //toUpperCase is a function with specific task : To CAPITALZE
"XYZ".toLowerCase() ; //toLowerCase is a function with specific task : To lower case everything

[1,2,3,4].push(5) ;   //push is a function with specific task : to add at end 

// Note that : EACH FUNCTION CAN ONLY BE CALLED/INVOKED BY USING ( ) and required parameters/Input data values are provided in the parenthesis 


// Thus these are Prdefined functions which already exists
// But, we can also make our PERSONALISED NEW FUNCTIONS
// this has 2 things : FUNCTION DEFINITION and FUNCTION CALL 

// Syntax of FUNCTION DEFINITION 

/* 
function func_name () {
    // do some work
}

function func_name(parameter1 , para2 ,......) {
     // do some work
}   */ 


// Syntax of FUNCTION CALL 
    // func_name() ;  

//Examples : 

function Greeting () {   //function definition
    console.log("Assalam Walekum") ; 
    console.log("Heyyy") ; 
} 

Greeting() ;  //function call

// Function with arguement / parameter
function printmsg (msg) {
    console.log(msg) ;
}
printmsg("Hello") ; 
printmsg("Visca Barca Visca Catalunya") ;

function sum(a,b){
    console.log(a+b) ; 
}
sum(10,20) ;

// Functions with a Return value 

function product(a,b){  //a,b are local variables where they are valid only in the functions Block scope
    console.log("Before Return") ; 
    return a*b ;
    console.log("After Return") ; //UNREACHABLE CODE, AFTER FUNCTION IS RETURNED, NOTHING WILL EXECUTE 
}

let result = product(5,3) ;
console.log(result) ;

// ARROW FUNCION : PART OF MODERN JS and Compact way of writing a function
// Here the function definition is also stored in a variable

let arrowSum = (a,b) => {
    console.log(a+b) ;
};
console.log(arrowSum); //this will print the Function definition
arrowSum(4,5) ;

let arrowMultiply = (x,y) => {
    return x * y ; 
};  //it doesnt mean ki x*y value will be returned to "arrowMultiply" variable

console.log(arrowMultiply)  ; // It will still print the function definition

let res = arrowMultiply(4,3) ;   
console.log(res) ;

//Arrow Functions are used for small and simple functions
// {...} can also be avoided for single line function 

let printHello = () => console.log("Hello") ; 
printHello() ;

// METHOD VS FUNCTION 

//suppose i write 
console.log("abc".toUpperCase()) ; // here we know that toUpperCase is a function
//but if i write 
// console.log([1,2,3,4].toUpperCase()) ;  
// ERROR : fifth.js:96 Uncaught TypeError: [1,2,3,4].toUpperCase is not a function to arrays 
// Thus , .toUpperCase is a Function only for strings and not for Arrays 
// .toUpperCase is binded with only STRING Datatype
// Thus, this is a METHOD .i.e. SPECIAL KIND OF FUNC ASSOCIATED WITH PARTICULAR DATATYPES

// forEach Loop 
// It is also a METHOD associated with a Array Datatype
// Syntax = arr.forEach(callBack Function) 
// forEach is a loop with a callBack Function , which is a function to execute for each element in array
// a callback is a function passed as an arguement/parameter to another function

let arr = [1,2,3,4,5,6] ; 

arr.forEach(function printVal(val) {   //it means val at each idx of arr 
    console.log(val) ; 
});  

//Preferred to write callback function as a ARROW function 

arr.forEach((val) => {
    console.log(val) ; 
}) ; 

let city = ["Kolkata" , "Pune" , "Banglore" , "Mumbai"] ; 

city.forEach((val) => {
    console.log(val.toUpperCase()) ; 
});

// WE HAVE 3 PARAMETERS FOR CALLBACK FUNCTION (value , idx , array) 

city.forEach((val , idx) => {
    console.log(val.toUpperCase() , idx) ;
});

city.forEach((val , idx , arr) => {
    console.log(val.toUpperCase() , idx , arr) ;
});

// forEach will only be used for Arrays and not for STrings

// MAP METHOD : similar to forEach 
// Used for creating a new array by applying a transformation to each element in an existing array.
/* Does not modify the original array.  Returns a new array containing the results of applying the provided callback function to each element. */ 

arr = [1,2,3,4,5,6] ; 
let temp = arr.map((val) => {
    console.log(val+10) ;
});
/* Difference Between Map and forEach : 
Use forEach when you want to perform an action for each element but don't need a new array.
Use map when you want to create a new array based on the transformation of each element.
The forEach method does not create a new array; it just iterates over the existing array and applies the provided callback function to each element.
*/ 

// FILTER METHOD : Creates a new array of elements that give true for a condition/filter
// ex : all even numbers 

let num = [1,2,3,4,5,6,7,8,9,10] ;
let EvenArr = num.filter((val) => {
    return val%2===0 ;
});
console.log(EvenArr) ;

// ex : all numbers greater than 4 

let greaterNum = num.filter((val) => {
    return val > 3 ; 
});
console.log(greaterNum) ; 

// REDUCE METHOD: Performs some operations & reduces the array to a single value. It returns that single value

// eg : sum of all numbers in array 

num = [1,2,3,4,5,6,7,8,9,10] ;
let sumNum = num.reduce((prev,curr) => {
    return prev + curr ; 
}); 
console.log(`Sum is ${sumNum}`) ;

// IMPORTANT AND DIFFICULT eg :  largest of all numbers 

let Large = num.reduce((prev,curr) => {
    return prev > curr ? prev : curr  ; 
});
console.log(`The Largest Number : ${Large}`) ;



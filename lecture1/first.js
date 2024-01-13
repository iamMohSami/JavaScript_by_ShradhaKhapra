// alert("First Alert")
// alert("Please Open your Console for checking console log output..!!")

console.log("Hey JS") ;
console.log("Lets Master JAVASCRIPT") ;
console.log("JAVASCRIPT gives you SuperPowers..!!!") ; 

// VARIABLES are like Containers used to store data
// js is dynamically typed language which means we dont need to specify the type of variable before declaration, JS interpreter automatically determines the type during runtime

let myName = "Mohammad Sami"   //String Type
let age = 20     // Int Type
let fav = 999.99   // Float Type

console.log("Name : " + myName)
console.log( "Age : " + age) 
age = age + 1 ; 
console.log("New Age : " + age) ;

isFollow = true ;  //Boolean Type
isLike = false ; 

let x = null ;  //Special value which means "Khaali Cheez" or "Kuch Nahi" || Pata hai ki isme kya hai but woh cheez khaali hai 

let y = undefined ; //Pata he nahi ke isme kya hai

//Revise Variable Rules from notes 

// Casings in variable
/* 
1. fullName  [Camel Case]   -->  PREFERRED
2. full_name [Snake Case]
3. full-name [kebab case]
4. FullName [Pascal Case]   



LET , CONST and VAR Keywords
 LET : for variables which will change , eg : let age = 18; 
   CONST : for variables which will never change throughout , const PI = 3.14 ; 

 Use of "var" will not give any error but it is not advisable to use var, its use is deprecated 
 In 2015, we got NEW STANDARDS OF JS CALLED ES6 {Echma Script 6} , these were advanced new rules of JS where "let" and "const" were introduced and use of "var" was stopped 

 Problem of VAR 
Problem of Using VAR -- Redeclaration is valid in var but not in let and const

let me = 8 ;
let me = 98 ;  will give error 

var me = 8 ; 
var me = 9 ;  will not give any error 

BUT IN LET REDECLRATIO IS POSSIBLE  */
let num = 89 ;
num = 99 ; 
num = 100 ;   // NO ERROR

const PI = 3.14 ; 
PI = 3.44 ; // give ERROR in the console 

/*Intialisation of value to const variable is compulsory */ 
/*Intialisation of value to let variable is NOT compulsory */

/* LET and CONST are BLOCK-SCOPE Variables whereas VAR is GLOBAL-SCOPE Variables */
/* {
    // let weigth = 60 ; 
    // let weight = 62 ;   will give an ERROR
    } */
let weigth = 62 ; // will not give any error

/* DATATYPES IN JS : 

SEVEN TYPES of PRIMITIVE DATATYPES 
1.NUMBER : let age = 24 ;
2.STRING : let myName = "Mohammad";
3.BOOLEAN : let isFollow = true ; 
4. UNDEFINED : if not intialised, variables are of Undefined Datatype ; let m;
5.NULL : Special Datatype which means Nothing there ; let m = NULL ;
6. BigInt : to store Big Integer values ; let num = BigInt("123456")
7. SYMBOL : to store Symbol ; let sym = Symbol("we")

ONE TYPE of NON-PRIMITIVE DATATYPE
1.OBJECTS :  COLLECTION OF VALUES OF PRIMITIVE DATATYPES written in  a KEY value pair
    ARRAYS and FUNCTIONS ARE type of objects

ex :  

const Student = { 
    fullName : "Rahul Khanna" , 
    age : 20 , 
    cgpa : 8.2 ,
    isPass : True,
};


*/

let cars = 5 ; 
let favStar = "Shah Rukh Khan"
let isFollow = true ; 
let xyz;
let m = NULL;
let number = BigInt("123456")
let sym = Symbol("we")

const Student = { 
    fullName : "Rahul Khanna" , 
    age : 20 , 
    cgpa : 8.2 ,
    isPass : True,
};

//cHECK TYPE OF EACH USING THE  "typeof ___" command

//Accesing single values from the Student OBJECT : 
// 1. Student.age;
// 2. Student["age"];
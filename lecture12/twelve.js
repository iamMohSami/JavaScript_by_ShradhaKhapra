// Synchronous vs Asynchronous JS

/*
Synchronous means the code runs in a particular sequence of instructions given in the program.
Each instruction waits for the previous instruction to complete its execution.

Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow.*/

// for synchronous , consider

console.log("one");
console.log("two");
//execution of line happens synchronously, one after another 



// setTimeout function 
// syntax : setTimeout( funcname , timeInMilisec )

function hello() { 
    console.log("I am Hello Function") ; 
}

setTimeout(hello , 3000) ;
// the hello function executes and prints on console exactly after 3 seconds(3000 milisec) after refresh



// CONSIDER THIS SITUATION: 

console.log("First Statement") ; 
console.log("Second Statement") ; 
console.log("Third Statement") ; 
setTimeout( () => {
    console.log("Fourth Statement")
} , 4000);
console.log("Fifth Statement") ; 
console.log("Sixth Statement") ; 

// Here, we do not observe Synchronous Execution

// It ISNT like "Fifth Statement" and "Sixth Statement" will have to wait 4s until above "Fourth Statemnt" gets printed

// Here, first 3 statements get executed, execution of fourth begings, it sees that it need to wait for 4s, execution carried on parallely and moves to next lines, five and six are printed, then when fourth completes its time it is printes

// THIS IS ASYNCHRONOUS EXECUTION


// CALLBACK FUNCTIONS:  a function passed as an arguement to another function is known as Callback Function 
//Example : 
function sum(a,b) {
    console.log(a+b) ;
}

function calculate(a,b,callback) {
    callback(a,b);
}

calculate(3,4,sum) ; 

// Callback Hell Problem : 
// Nested callbacks stacked below one another forming a pyramid structure(Pyramid of Doom);
// This style of programming becomes difficult to understand & manage.

// Consider we have a function which fetches data from a Database or a API and it takes 3sec of time after each request

function getData(dataId) {
    setTimeout(() => {
        console.log("The Data is : " , dataId) ; 
    } , 3000) ; 
}

getData(4569) ; 
// This function returns "The Data is : 4569" after (lets assume) fetching the required data from the DB in 3 sec

// BUT , IF WE : 
getData(10) ; 
getData(11) ; 
getData(12) ; 
// As we know that, JS doesnt wait nd does Asynchronous Execution, thus 
// The Data is :  10 The Data is :  11 The Data is :  12 
// gets prints on console at same time continously 


// BUT CONSIDER A CASE WHERE WE WANT The Data is :  10 TO BE PRINTED FIRST, THEN AFTER 3sec THE NEXT / The Data is :  11 and then after 3 more sec / The Data is :  11 

function callbackHell(dataId , nextData) { 
    setTimeout(() => {
        console.log("The Data is : " , dataId) ; 
        if(nextData) { 
            nextData() ; 
        }
    } , 3000) ; 
}

// callbackHell(2 , callbackHell(3)) 

// As we need to put arguements also in our callback function , so i wrote callbackHell(3) 
//  but while passing callback functions, we cant put () to give arguements as it will cause that function to execute at that point only , which we dont want 

// to solve this: USE ARROW FUNCTION 

callbackHell(2 , () => {
    console.log("Getting Data 3 ....");
    callbackHell(3 , () => {
        console.log("Getting Data 4 ....");         // This is the "PYRAMID OF DOOM"
        callbackHell(4 , () => {
            console.log("Getting Data 5 ....");
            callbackHell(5)                              
        })
    } )
})

// Using this, it first prints "The data is 2" ; wait for 3s ; "The data is 3" ; wait for 3s ; "The data is 4" ; wait for 3s ; and then finally "The data is 5"



/* Window Object
The window object represents an open window in a browser.
It is browser's object (not JavaScript's) & is automatically created by browser.
It is a global object with lots of properties & methods */ 

// Actually, all the functions used till now are actually part of "window" object only , 
window.console.log("Hello using window.console.log") ;
// window.alert("Hi") ;

//All work properly
// we dont need to create Window object , the code knows the existence of window object as it is HAS GLOBAL SCOPE

// DOCUMENT OBJECT MODAL DOM 
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page 
// ALL THE HTML CODE CAN BE ACCESSED USING JS, FOR EACH WEBPAGE WE HAVE A WINDOW OBJECT, IN THAT WINDOW OBJECT WE HAVE A DOCUMENT OBJECT INIT 
// THIS DOCUMENT OBJECT CONSISTS OUR HTML CODE INIT

console.log(window.document) ; //prints document object 
console.dir(window.document) ; //prints all the methods and properties of the document object

//console.log helps to print/log on the console; Use it for general-purpose logging.
//console.dir helps to print properties of object ; Used for displaying a detailed, interactive list of properties of a specified JS object ; Use it when you want to explore the properties of an object interactively.

//printing body and head of our html code 
// console.log(window.document.body) ;  window is a global obj, everyone knows, so no need of writing it
console.log(document.body) ; 
console.dir(document.body) ; 

console.log(document.head) ; 
console.dir(document.head) ; 

console.log(document.body.childNodes)  //prinitng child nodes 

//This method of accessing HTML using JS is used to make dynamic changes in the HTML structure at run-time

// document.body.style.backgroundColor = "Red" ;
// document.body.style.color = "White" ;   CHANGES WILL BE APPLIED TO OUR WEBPAGE



// DOM Accessing Elements // 

//Selecting with id's 
let myH = document.getElementById("heading") ; 
console.log(myH) ; 
console.dir(myH);

//Selecting with CLASS's   //Returns an HTML Collection [like an array]
let myClass = document.getElementsByClassName("H3");
console.log(myClass) ; 
console.dir(myClass) ;

// Selecting with Tags  //Returns an HTML Collection [like an array]
let allH3 = document.getElementsByTagName("h3") ; 
console.log(allH3) ; 
console.dir(allH3) ;


//ABOVE METHODS ARE GOOD FOR ACCESSING VARIOUS ELEMENTS BUT WE USE OTHER METHODS ALSO ; 
// QUERY SELECTORS // MUCH PREFERABLE
// Returns Node List
let firstH3 = document.querySelector("h3") ;  // selcts only first element which is h3 
console.dir(firstH3) ; 
console.log(firstH3) ; 

let allh3 = document.querySelectorAll("h3") ;  // selcts ALL element which are h3 
console.dir(allh3) ; 
console.log(allh3) ; 

let usingId = document.querySelector("#heading") ; 
console.dir(usingId) ; 
console.log(usingId) ; 

let usingClass = document.querySelector(".H3") ; 
console.dir(usingClass) ; 
console.log(usingClass) ; 


let usingClassALL = document.querySelectorAll(".H3") ; 
console.dir(usingClassALL) ; 
console.log(usingClassALL) ; 


// DOM Manipulation Elements // 
// we can get and set/change elements value

// 1.tagName : returns tag for element nodes 
console.log(usingClass.tagName) ;

// 2. innerText : returns the text content of the element and all its children 
let text = document.querySelector(".forPractice") ; 
console.log(text.innerText) ;

// 3 .innerHTML : returns the plain text or HTML contents in the element
console.log(text.innerHTML)  ;

/* DIFFERENCE BETWEEN INNERTEXT AND INNERHTML 

INNERTEXT : 
Returns the text content of the element and all its descendants. It represents the visible text content, excluding any HTML or XML tags.innerText focuses on the visible text content and does not include HTML tags. It's generally used for extracting or modifying text content in a text-centric way.

INNERHTML : 
Returns or sets the HTML or XML content within the element, including all HTML tags.innerHTML provides the complete HTML content within an element, including HTML tags. It's often used when you need to work with or manipulate the HTML structure within an element.  */  

// We can also SET / Update the innerHTML 

text.innerText = "Content has been changed by DOM Manipulation" ;
console.log(text.innerText) ;
console.log(text.innerHTML)  ;

text.innerHTML = "<div>  <h1> Changed AGAIN  </h1></div>";
console.log(text.innerText) ;
console.log(text.innerHTML)  ;

// 4. textContent : returns textual content even for hidden elements

let hide = document.querySelector(".hidden") ; 
console.log(hide) ;
console.dir(hide) ;
console.log(hide.innerText) ; // NOTHING IS PRINTED / BLANK SPACE
console.log(hide.textContent) ; // USED TO SHOW HIDDEN CONTENT ALSO

console.log(hide.innerHTML) ;  // EVEN THIS WORKS AND SHOWS THE SAME CONTENT
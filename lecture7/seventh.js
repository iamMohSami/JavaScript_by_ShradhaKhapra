// Attributes in DOM manipulation 

// getAttribute( attr ) to get the attribute value  
let div = document.querySelector("div") ; 
console.log(div);

let id = div.getAttribute("id") ; 
let myClass = div.getAttribute("class") ; 
let myName = div.getAttribute("name") ; 

console.log(id) ; 
console.log(myClass) ; 
console.log(myName) ; 

// setAttribute( attr, value )  to set the attribute value

let div2 = document.querySelector("#box2") ; 
console.log(div2) ;

div2.setAttribute("class" , "cont") ; 
div2.setAttribute("name" , "myBox2") ;


// style attribute
// syntax : node.style

div = document.querySelector("div") ; 
console.log(div.style) ;  // prints an object of style with all css properties and values if any 

// can change style values using JS also 

div.style.backgroundColor = "pink" ;
div.innerText = "Changed BGColor using JS" ;
div.style.fontSize = "16px" ; 
div.style.display = "flex" ;  


// Creating a New Element in DOM using JS and not in HTML  

let newElement = document.createElement("button") ;  
console.log(newElement) ;
newElement.innerText = "Click Me..!" ; 
console.log(newElement) ;
/* IMPORTANT : 
In JavaScript, the order of code lines does matter, and statements are executed sequentially. If you are observing that the text content of the button is already set in the output of console.log(newElement) even though you set it after the console.log statemen 
Some browsers, in certain situations, may show live updates to the console for certain types of objects, especially DOM elements. The console may reflect changes made to the object, even if they occur after the object is logged.
In general, in synchronous programming languages like C and Python, the order of statements in the code determines the order of execution. If you write statement A before statement B, statement A will be executed before statement B. This behavior is straightforward and follows a sequential flow.
However, JavaScript has some asynchronous features that can introduce a different behavior, particularly in certain contexts, like working with the DOM or handling asynchronous operations. Asynchronous operations, such as event listeners, AJAX requests, and timers, can affect the order of execution.
*/


// ADDING NEW ELEMENT IN THE DOM TREE 


//1.node.append(element) ;  adds at the end of node (inside) 

div2 = document.querySelector("#box2") ; //selected second box
div2.append(newElement) ;

//2.node.prepend(element) ; adds at start of the node (inside) 
let newHead = document.createElement("h3") ; 
newHead.innerText = "Below is a List of Fruits" ; 
div2.prepend(newHead) ;

// 3.node.before(element) ;  adds before the node (outside)
let newH1 = document.createElement("h1") ; 
newH1.innerText = "SEPARATION" ; 
div2.before(newH1) ;  

// 4.node.afer(element) ;  adds after the node (outside)
let newP = document.createElement("p") ; 
newP.innerText = "This is added using div2.after()" ; 
div2.after(newP) ; 

let newHeading = document.createElement("h1") ; 
newHeading.innerHTML = " <i>Hey..!! I am New </i>" ; 
document.querySelector("body").prepend(newHeading) ;

// DELETING ANY ELEMENT IN THE DOM TREE  
// node.remove( ) removes the node

//lets delete the ul in div2
let u1 = document.querySelector("p") ; 
u1.remove() ; 



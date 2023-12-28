// Events in JS : The change in the state of an object is known as an Event
// ex : click of button
// Events are fired to notify code of "interesting changes" that may affect code execution.

// important events : 
/*
Mouse events (click, double click etc.)
Keyboard events (keypress, keyup, keydown)
Form events (submit etc.)
Print event & many more */ 

/*Events can be User-based and also system-based 
user-based : mouse,keyboard..
system-based : when battery low than 15%, an alert of low-battery */ 

// Writing Event Handling in JS using ARROW FUNCTIONS 
/*  syntax : node.event = () => {
    handle here
}   */

let btn = document.querySelector("#mybtn") ; 
btn.onclick = () => {
    let a=62 ; 
    a++ ; 
    console.log('btn1 was Clicked ') ; 
    console.log(a) ; 
};

// Event Object (special obj )
// It is a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods.
// can be accesesed using by writing an variable(mostly "e") in the parenthesis (e) 

let btn2 = document.querySelector("#btn2") ; 
btn2.onclick = (e) => {
    console.log(e) ;  //prints the console object which has info about the event
    // lets print some of the imp info from the event object 
    console.log(e.type) ;   // Log the event type (e.g., "click")
    console.log(e.target) ; // Log the target element that triggered the event
    console.log(e.clientX) ; // Log the X coordinate of the mouse pointer
    console.log(e.clientY) ; // Log the Y coordinate of the mouse pointer
};

// USING EVENT LISTENER 
// ADVANTAGE OF EVENT LISTENER : You can attach multiple event listeners to a single event, allowing for more modular and maintainable code
// syntax : node.addEventListener( event, callback )

let btn3 = document.querySelector("#btn3") ; 

btn3.addEventListener( "click" , () => {
    console.log("bt3 was clicked - Handler 1")
}) ;

btn3.addEventListener( "click" , () => {
    console.log("bt3 was clicked - Handler 2")
}) ;

btn3.addEventListener( "click" , () => {
    console.log("bt3 was clicked - Handler 3")
}) ;
//all three handlers are output on console
// if we had used EVENT HANDLING IN JS method with 3 HANDLERS , IT COULD HAVE PRINTED ONLY THIRD/LATEST HANDLER AND OVERWRITE ABOVE THREE
// Thus, addEventListener has this advanatge and is much preferred 

// removeEventListener
// the callback reference should be same to remove 
// IMP : the Handler should be stored in a variable IN ORDER TO REMOVE 
let handler4 = () => {
    console.log("bt3 was clicked - Handler 4")
};

btn3.addEventListener("click" , handler4) ;  //all 4 handlers are given in output

btn3.removeEventListener("click" , handler4) ;  // only 3 handlers in output



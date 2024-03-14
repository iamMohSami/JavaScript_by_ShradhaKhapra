// Tillnow, we learnt the theoretical concept of JS Promises, now we will be seeing the practical implementation of JS Promises 

// API : Application Programming Interface
// works on Request-Response Cycle ; Takes Requests ; Gives Response





// if we search this "https://cat-fact.herokuapp.com/facts" ; our browser sends a GET request to the API endpoint, which returns a response and our browser displays the response 


/* THE BROWSER RESPONSE IS AS BELOW : 
[{"status":{"verified":true,"sentCount":1},"_id":"58e008780aac31001185ed05","user":"58e007480aac31001185ecef","text":"Owning a cat can reduce the risk of stroke and heart attack by a third.","__v":0,"source....   

IT IS BASICALLY AN ARRAY WITH MANY OBJECTS INSIDE IT 
*/ 

// now we will learn to request GET to this API by using JAVASCRIPT and not browser method 

//How to?  using fetch() method

/*
The Fetch API provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects
The fetch() method is used to fetch a resource (data).

IMPORTANT : fetch() method returns a PROMISE as a response.

SYNTAX :  let promise = fetch( url , [options] ) ; 

the options is basically tells what type of request we are doing, a GET.POST,DELETE..
Mostly we will be using GET request only to retrieve data from api and if we dont write anything in the options, by default it takes it as a GET request only..!*/ 

const url = "https://cat-fact.herokuapp.com/facts" ; 

let promise = fetch(url) ; 
console.log(promise) ;

setTimeout( () => {
    console.log(promise) ;
} , 2000);

// OUTPUT :  
/*  Promise {<pending>}
    Promise {<fulfilled>: Response}


 Here, first promise(Pending) ; api will successfully return data , then again if we check promise, we get promise(Fulfilled) ;  */

 // KNOW THAT , getting data from API is a ASYNCHRONOUS THING , i.e. it may require time for the API to send you back some data, thus using ASYNC - AWAIT , we  have

 const getFacts = async () => {
    console.log("Getting Data from API...") ; 
    let response = await fetch(url) ; 
    console.log(response) ; 
 }

 // Thus, calling this function from console, 
 /* 
getFacts();
thirteen.js:54 Getting Data from API...
Promise {<pending>}
thirteen.js:56 Response {type: 'cors', url: 'https://cat-fact.herokuapp.com/facts', redirected: false, status: 200, ok: true, …}  
THIS ABOVE LINE IS THE REQUIRED OUTPUT WE NEEDED FROM OUR API
observe that, it takes nearly 0.3s for the RESPONSE to be consoled , thus the use of ASYNC-AWAIT is mandatory here*/ 


/* Note that, this API returns us DATA(response) like : 
 Response {type: 'cors', url: 'https://cat-fact.herokuapp.com/facts', redirected: false, status: 200, ok: true, …}      
 
 BUt, is it readable, can we understand any CatFact from here , NO..!!   */ 

// why??? Because most of modern present day API's give response data in form of JSON 
// our obtained response is also a JSON which we need to further parse it to get readable CatFact..!

// UNDERSTANDING IMP TERMS : 

//  1) AJAX : Asynchronous JS & XML
// In early old days, API's would give response in XML format , thus it was known as AJAX

// 2) JSON : JavaScript Object Notation 
// Now, most of API's give response in JSON format, which is easier to parse and obtain our data
// Thus, json has replaced xml , AJAJ : Asynchronous JS and JSON


// json() method
// Now, How to  parse the Data to get required CatFact?? 
// need to convert JSON --> JS object using "json()" method


// json() method : returns a second promise {first promise returned by fetch() method} that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object {useable data})

const getFacts2 = async () => {
    console.log("Getting Data from API...") ; 
    let response = await fetch(url) ; 
    console.log(response) ;                                        // op = JSON objc
    let data = await response.json() ; 
    console.log(data) ;                               // JSON-> JS obj as output | array of 5 facts

    console.log(data[0]) ;                                // accessing first elem of array
    console.log(data[0].text) ;                            // getting its Text only

    // similarly other facts
    console.log(data[1].text) ;
    console.log(data[2].text) ;
    console.log(data[3].text) ;
    console.log(data[4].text) ;

    para.innerText = data[1].text ;  // used below for making the "Get CatFact btn" functional
 }

 // CALL getFacts2() from console ; 

 /* 
 getFacts2() ;
 Getting Data from API...

 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined

 response {type: 'cors', url: 'https://cat-fact.herokuapp.com/facts', redirected: false, status: 200, ok: true, …}                  ---- DATA RETURNED IN JSON FORMAT ----

(5) [{…}, {…}, {…}, {…}, {…}]  --- JSON -> JS object | an ARRAY of 5 facts retrieved ---


{status: {…}, _id: '58e008780aac31001185ed05', user: '58e007480aac31001185ecef', text: 'Owning a cat can reduce the risk of stroke and heart attack by a third.', __v: 0, …}  
-- ACCESSED FIRST ELEMENT OF THE OUTPUT ARRAY data[0] ---

Owning a cat can reduce the risk of stroke and heart attack by a third.
--GOT only text i.e CATFACT from data[0] 

--SIMILARLY OTHER 4 FACTS --

 */

// CONNECTING THIS TO A "getFact" BUTTON on our HTML page 

const btn = document.querySelector("#fact") ; 
const para = document.querySelector("#demo") ; 

btn.addEventListener("click" ,getFacts2 ) ;


// In function getFacts2 , we used ASYNC-AWAIT 
// the same output can be obtained using PROMISE-CHAINING ALSO 

const getFactsPromise = () => {
    console.log("Getting Data from API...") ; 
    fetch(url).then((res) => {
        return res.json() ; 
     }).then( (da) => {
        console.log(da[0].text) ; 
     } ) 
}

// If we call this from console 
/* OUTPUT : 
getFactsPromise() ; 
Getting Data from API...
undefined
thirteen.js:152 Owning a cat can reduce the risk of stroke and heart attack by a third. */

// THUS SAME FUNCTIONALITY AS ASYNC-AWAIT , but but ASYNC-AWAIT is more easy , readable and preferred instead of using nested .then() in PROMISE CHAINING , however even this promise chainig might be preferred in some companies c0de base .. :) 



// HTTP VERBS  (OR) HTTP Reesponse METHODS :  
/*
GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

HEAD
The HEAD method asks for a response identical to a GET request, but without the response body.

POST
The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

PUT
The PUT method replaces all current representations of the target resource with the request payload.

DELETE
The DELETE method deletes the specified resource.

CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.

OPTIONS
The OPTIONS method describes the communication options for the target resource.

TRACE
The TRACE method performs a message loop-back test along the path to the target resource.

PATCH
The PATCH method applies partial modifications to a resource. UPDATING existing data
*/


// HTTP RESPONSE CODES : 

/* 
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

200 OK
The request succeeded. The result meaning of "success" depends on the HTTP method:

GET: The resource has been fetched and transmitted in the message body.
HEAD: The representation headers are included in the response without any message body.
PUT or POST: The resource describing the result of the action is transmitted in the message body.
TRACE: The message body contains the request message as received by the server.


400 Bad Request
The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).

404 Not Found
The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web

500 Internal Server Error
The server has encountered a situation it does not know how to handle.

*/

// HTTP headers  : *HTTP response headers also contain details about the  responses, such as content type, HTTP status code etc.



//  SEND A POST REQUEST through fetch()
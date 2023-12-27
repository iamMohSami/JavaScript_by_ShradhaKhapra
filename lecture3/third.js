console.log("Hi..!"); 

//3times? 
console.log("Hi..!!");
console.log("Hi..!!") ;
console.log("Hi..!!") ;

//100times? we use FOR LOOP
// Intialization , Stopping Condition and Icrementation/Updation
for (let i = 1 ; i<=5 ; i++) {
    console.log("Hi..!")
}

//Calculate sum of 1 to n 
let n = parseInt(prompt("Enter n : ")) ; 
let sum = 0 ;
for(let i = 1 ; i <=n ; i++) {
    sum += i ;
}
console.log("The sum is " , sum) ;

// WHILE LOOP 
let i = 10 ; 
while(i>=0) {
    console.log("The value of i is :" , i) ; 
    i-- ;
}

// Do- while loop 

do {
    console.log("This is DO-while loop one time compulsory execution");
} while(i>20) ;   //while statement is false

// FOR - OF LOOPS : used to iterate individual elements of STRINGS and ARRAY

let str = "JAWAN" ;
for(let i of str) {
    console.log("i =" , i);
}

// to find the length of string usinf for-of loop 

let len = 0 ; 
for(let i of str){
    len++ ; 
}
console.log("The length of str is " , len) ;

// FOR - IN LOOPS : used to iterate individual elements of OBJECTS and ARRAY also
let movie = {
    title : "DUNKI" ,
    Verdict : "BlockBuster" ,
    imdb : 9.6 ,
    BOC : "1000 Crore"
}; 

for(let i in movie){     // It returns thye Keys of the Object
    console.log("key" , i) ;
}

//Printing both key and values

for(let i in movie){
    console.log("Key =" , i , " value =" , movie[i]);
}




// strings in JS : String is a sequence of characters used to represent text

let myStr = "JavaScript" ; 

//String inbuilt properties 
// str.length
console.log("The length of myStr is : " , myStr.length) ;

//string indices
console.log("The 1st position char is : " , myStr[0]) ;
console.log("The 2nd position char is : " , myStr[1]) ;
console.log("The 7th position char is : " , myStr[6]) ;

// printing all using loop, str.length and str indices ; 
let len2 = myStr.length // len2=10
let j = 0 ;
while( j < len2 ) {
    console.log("The" , j+1 , "character of myStr is :" , myStr[j]) ;
    j++ ;
}

//TEMPLATE LITERALS 
let tempLiteral = `This is a Template literal which is a special type of STRING written using Backticks` ; 
console.log(tempLiteral);
console.log(typeof tempLiteral);
console.log("Template Literals help in STRING INTERPLOATION")  ; 
console.log("String Interploation : To create strings by doing substitution of PlaceHolders") ;

//example of string interpolation 

let obj = {
    item : "pen" ,
    cost : 10,
}; 

//using normal string method
console.log("The cost of" , obj.item , "is" , obj.cost , "rupees") ;
// disadvatage : here we use string , variable , string , variable , string : NOT EFFICIENT 

// using String INTERPOLATION using Template literals
let output = `The cost of ${obj.item} is ${obj.cost} rupees` ; 
console.log(output) ; 
// advantage : Output in only one line and much Efficient



// ESCAPE CHARACTERS 

// 1. /n to print new line 
console.log("Pathaan Jawan Dunki") ; 
console.log("Pathaan\nJawan\nDunki");

// 2. /t to print tab space
console.log("Pathaan\tJawan\tDunki");

// IMPORTANT : ESCAPE CHARACTERS INFLUENCE in str.length
let str3 = `JavaScript` ; 
console.log(str3.length) ;    // OUTPUT = 10
let str4 = `Java\tScript` ; 
console.log(str4.length) ;    // OUTPTUT = 11 
let str5 = `Java\nScript` ; 
console.log(str5.length) ;   // OUTPTUT = 11 
// That "\t" and "\n" will consume only 1 length in calculating the length


// 7 Important String Methods

// 1. str.toUpperCase()
let str6 = `Shah Rukh Khan`;
console.log(str6.length) ;
console.log(str6.toUpperCase()) ;



/* VERY IMPORTANT : All string methods do not change the original string but instead return a new output*/ 

//EXAMPLE : 
console.log(str6) ; //even though in prev line we converted to all UpeerCase but still it will return the original one 
str6.toUpperCase();
console.log(str6) ; //Still no change, still return the original one with lower cases
let newStr6 = str6.toUpperCase(); //storing the updated new srting
console.log(newStr6) ;

//Why No Change to original Strings??  BECAUSE STRINGS ARE IMMUTABLE IN JAVASCRIPT


// 2. str.toLowerCase()
console.log(str6.toLowerCase()) ;

// 3. str.trim()   REMOVES WHITESPACES FROM STARTING AND END 
 let str7 = `   Lionel Andreas Messi    ` ; 
 console.log(`The length of ${str7} is ${str7.length}`) ; // it also counts the intial and final spaces
 let newStr7 = str7.trim() ;
 console.log(`The length of new string ${newStr7} is ${newStr7.length}`) ;

// 4. str.slice(start , end)   RETURNS PART OF STRING
let str8 = `Barcelona` ; 
console.log(str8) ; 
console.log(str8.slice(0,5)) ;
// O IS INCLUSIVE BUT 5 IS EXCLUSIVE i.e only index 0,1,2,3 and 4

// 5. str1.concat(str2) JOINS STR2 WITH STR1
let str9 = 'Ami' ; 
let str10 = `KKR` ; 
console.log(str9.concat(str10)) ;
console.log(str9+str10) ; 
console.log("Hello" + 123) ;


// 6. str.replace(searchVal , newVal ) ; 
let str11 = `KRK` ; 
console.log(str11.replace( "K" , "S" )) ; // OUTPUT IS : SRK and NOT SRS ; only replaces first matching 

console.log(str11.replaceAll("K" , "S")) ;  // output : SRS ; replaces all matchings

// 7. str.charAt(index) 
console.log(str11.charAt(1)) ; //output = R
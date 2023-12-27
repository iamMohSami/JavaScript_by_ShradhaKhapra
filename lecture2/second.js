// lECTURE 1 RECAP

let cars = 5 ;
let favStar = "Shah Rukh Khan"
let isFollow = true ; 
let xyz;
let m = null;
let number = BigInt("123456")
let sym = Symbol("we")

const Student = { 
    fullName : "Rahul Khanna" , 
    age : 20 , 
    cgpa : 8.2 ,
    isPass : true,
};

// Comment in JS <LOL> 

/*  OPERATORS IN JAVASCRIPT
 1.Arthmetic operators  + , -, *, /, % (modulus for remainder), ** (Exponent)
 2. Unary Operators   ++(Increment), --(Decrement)  NEED ONLY ONE OPERANDS
 3. Assignment Operators   = , += , -= , *= , %= , **=   
 { a+=2 means a = a+2;}
 4. Comparison Operators ==(Equal To) , ===(Equal To and Type) , != (Not Equal To) , !== 
                             > , < , >= , <= 
 5. Logical Operators && (AND) , || (OR) and ! (NOT)





 */

//ARTHMETIC OPERATOR

let a = 6;
let b = 3;
console.log("a =" , a , "and b =" , b);
console.log("a+b =" , a+b);
console.log("a-b =" , a-b);
console.log("a*b =" , a*b);
console.log("a/b =" , a/b);
console.log("a%b =" , a%b);
console.log("a**b =" , a**b);

// UNARY OPERATORS

a++ ;  //Post Increment
b-- ;  // Post Decrement

console.log("a++=" , a);
console.log("b-- =" , b);

++a ;  //Pre Increment
--b ;  // Pre Decrement

console.log(a)  //a=8
console.log(b)  //b=1

console.log(--a); //a=7  FIRST DECREMENT AND THEN PRINT
console.log(++b);  //b=2 FIRST INCREMENT AND THEN PRINT 

console.log(a--) ; // FIRST PRINT a=7 and then Decrement
console.log(b++) ; // FIRST PRINT b=2 and then Increment

console.log(a); // now a=6 is printed
console.log(b); // now b = 3 is printed

// COMPARISON OPERATORS 
let x = 4 ; 
let y = 5 ; 
console.log("x==y" , x==y) ; 
console.log("x!=y" , x!=y) ; 
console.log("x===y" , x===y) ; 
console.log("x!==y" , x!==y) ; 

// exploring === (strict version which also compares the datatype)
let myVar = "5"; //string
let myNumber = 5 ; //number 
console.log("myVar == myNumber" , myVar == myNumber) //TRUE ; NUMBER 5 == STRING "5" is EQUAL/TRUE
console.log("myVar === myNumber" , myVar === myNumber) //FALSE; NUMBER 5 == STRING "5" is NOTEQUAL/False


// LOGICAL OPERATORS 
//x=4 y=5
cond1 = x > y ; //False
cond2  = y===5 ; //True

console.log("cond1 && cond2" , cond1 && cond2);
console.log("cond1 ||  cond2" , cond1 ||  cond2);
console.log("!cond1 = " , !cond1) ; 


// CONDITIONAL STATEMENT
let myAge = 21 ; 

if (myAge >= 18) {
    console.log("YES..! your age is" , myAge , " and you can Vote") ;
}
else { 
console.log("NO..! your age is" , myAge , " and you cannot  Vote") ;
}


let p = 10 ; 
if(p%2===0){
    console.log(p , "is Even");
}
else{
    console.log(p , "is Odd") ;
}

if(myAge < 18) {
    console.log("Kid") ;
}
else if (myAge > 60) {
    console.log("Old") ; 
}
else {
    console.log("Adult") ;
}


//Ternary Opertaor

// syntax :  condition ? True output : False output

myAge >= 18 ? console.log("Adult") : console.log("Not Adult") ;
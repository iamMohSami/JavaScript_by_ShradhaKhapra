//assume to store marks of 5 students of class
// make 5 variable ]

let marks_stud1 = 97 ;
let marks_stud2 = 70 ;
let marks_stud3 = 91 ;
let marks_stud4 = 59 ;
let marks_stud5 = 83 ;

//But if we got 100 students, use of 100 diff variables is IMPRACTICAL 

//  so can use a Object  : 

let mark = {
    stud1 : 97 ,
    stud2 : 70 ,
    stud3 : 91 ,
    stud4 : 59 , 
    // and so on....
};

//BUT MORE PREFFERED IS USE OF ARRAYS : Collections of Similar items SPECIAL TYPE OF OBJECT

let marks = [97,70,91,59,83] ;
console.log(marks);

// type of Array gives output as "Object"
console.log("Type of Array is : " ,typeof marks) ; //output = object 

console.log("Thus,Array isnt a new non-primitve Datatype but it is a special type of object with keys = Index and Values pair ");

//creating more arrays 

let actors = ["Shah Rukh Khan" , "Salman Khan" , "Aamir Khan" , "Ranbir Kapoor"] ; 
console.log(actors);

// array can be HETEROGENEOUS but is not advisable
let myHeterogeneousArray = [97 , "SRK" , true , 85.36 , "Messi" , null] ;
console.log(myHeterogeneousArray) ;

//Property of Array : arrayname.length 
console.log(`The length of actors array is ${actors.length}`) ;

//Array Indices
console.log(`Value at index 0 is ${marks[0]}`) ;

//Arrays are Mutable
marks[0] = 99  ; 
console.log(`Value at index 0 is ${marks[0]}`) ;

//Looping in Array  
for(let i = 0 ; i<actors.length ; i++) {
    console.log(actors[i]) ;
}

for(let i in actors){    //Prints the KEYS i.e. INDICES 0,1,2,3
    console.log(i) ;
}

for(let actor of actors){   //Prints the VALUES and not INDICES, THUS MORE PREFERABLE
    console.log(actor) ;
}


// 8 ARRAY METHODS 

//IMPORTANT to know which Method makes a new array/output and which methods makes changes in the existing array only


// 1. Push()  : add to end   //MAKES CHANGES IN EXISTING ARRAY ONLY
console.log(actors)
actors.push("Irrfan Khan") ;
console.log(actors) ;
// adding more than one element
actors.push("Kartik Aaryan" , "Varun Dhawan") ; 
console.log(actors) ;



// 2. Pop() : Delete from end and return   //MAKES CHANGES IN EXISTING ARRAY ONLY
console.log(actors.pop())
actors.pop() ; 
console.log(actors) ;


// 3. toString() : converts array to string        //MAKES A NEW STRING AND DO NOT CHANGE EXISTING ARRAY
console.log(actors) ;  //normal array-object
console.log(actors.toString()); // all 5 values as STRINGS
console.log(actors) ; 

console.log(marks);
let marksString = marks.toString() ; 
console.log(marksString) ; 
console.log(marks);

// 4.Concat()  : joins multiple arrays and retuen a new result //MAKES new array AND DO NOT 
//                                                               CHANGE EXISTING ARRAY 

let cricket = ["Virat Kohli" , "Babar Azam" , "Joe Root" , "Steve Smith"] ; 
let football = ["Lionel Messi" , "Cristiano Penaldo" , "Neymar Jr" , "Mesut Ozil"] ; 

let newArray = cricket.concat(football) ; 
console.log(cricket) ; 
console.log(football) ;
console.log(newArray) ;  //returns new array output


// 5.unshift() ADD TO START ;  MAKES CHANGES IN EXISTING ARRAY ONLY
// similar to PUSH  method ; but in PUSH we add at END and in unshift we add at START
cricket.unshift("Inzamam Ul Haq") ;
console.log(cricket) ;

// 5.shift() delete from START and return ;  MAKES CHANGES IN EXISTING ARRAY ONLY
// similar to POP  method ; but in POP we delete from END and in shift we delete from START
cricket.shift() ;
console.log(cricket) ;

// 6.slice() : Returns a piece of Array ; //MAKES A NEW STRING AND DO NOT CHANGE EXISTING ARRAY
console.log(actors.slice(0,3)) ;
// 0 is INCLUSIVE but 3 is EXCLUSIVE i.e. only 0,1,2 index will return 

// 7.splice() : CHANGE IN ORIGINAL ARRAY (add ,remove, replace) ; MAKES CHANGES IN EXISTING ARRAY ONLY
// syntax : splice (start_index , delete_count from start_index , add_new_elements from start_index) 

let numb = [0,1,2,3,4,5,6,7,8,9] ; 
console.log(numb);

numb.splice(2 , 2 , 101 , 102 , 103) ; 
// start index = 2 ; del_count = 2 , thus 2 and 3 deleted ; add_elem = 101,102,103 from start_index
console.log(numb) ; 
// output : [0,1,101,102,103,4,5,6,7,8,9] 
// delete_count from start_index can be 0 for not deleting anything

// numb = [0,1,101,102,103,4,5,6,7,8,9]  

// add elemnt : 104 

// console.log( numb.splice(5,0,104) ) ;  DIRECT METHOD WILL NOT GIVE OUTPUT 

numb.splice(5,0,104) ;
console.log(numb) ; 
// output : [0, 1, 101, 102, 103, 104, 4, 5, 6, 7, 8, 9]

// Delete Element 7 
numb.splice(9 , 1) ;
console.log(numb) ;
// output : [0, 1, 101, 102, 103, 104, 4, 5, 6, 8, 9]

//Replace 103 with 63 
numb.splice(4 , 1 , 63) ;
console.log(numb) ;
// output : [0, 1, 101, 102, 63, 104, 4, 5, 6, 8, 9]

//IMPORTANT : if we give only one attribute in splice , it DELETES ALL SUBSEQUENT VALUES 
// [0, 1, 101, 102, 63, 104, 4, 5, 6, 8, 9]
numb.splice(5) ;  // DELETES EVERYTHING AFTER INDEX 5 
console.log(numb) ;
// output : [0, 1, 101, 102, 63]
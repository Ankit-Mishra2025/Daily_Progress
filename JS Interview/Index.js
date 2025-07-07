//   Class -03  Start with Operator



// let a=5;
// console.log(a);
// console.log(a++);
// console.log(--a);

// console.log(++a);

// console.log(a++);
// console.log(a);

// console.log(++a);

// console.log(a--);
// console.log(--a);

// let a=10;
// let result=a++ + ++a - 10;
// console.log(result)




// let a=b=c=15;
// console.log(a);
// console.log(b);
// console.log(c);


// let number=prompt("Enter number");
// let result= (number % 2===0) ? "Even Number":"Odd Number";
// console.log(result);


// let a=10;
// let b=8;
// let c=6;

// let result=(a>b)? (a>c?a:c):(b>c?b:c);
// console.log(result);


// let ans= (a>b)?(a>c?a:b):(b>c?b:c) 

// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++
// console.log(a);
// let result=a;
// console.log(result);

// let counter =0;
// let result=counter++;
// console.log(result);

// console.log(counter)


// z=0;
// console.log(z++)

// let result=z;
// console.log(result);


// let i=0;
// while (i<=10) {
//     console.log(i);
//     i++
    
// }

// for(let i=0; i<=10; i++){
// console.log("Ankit");

// }

// let name="Ankit";
// for(let Name of name){
//     console.log(Name);
    
// }


//    Fixed Password checker


//  let Password="ankit";
//  let userPassword=null;
//  let attemptPassword=0;

// while (userPassword!==Password && attemptPassword<3) {
//     userPassword=prompt("Enter Your Password");
//     attemptPassword++;
//     if (userPassword===Password) {
//         console.log("You have matched your password");
//     alert("You have no of attempts",attemptPassword)
//     } 
    
//  else {
//         console.log("Password Not matched");
        
//     }
// }
 

// let number=5;
// let fact=1;


// for(let fact=1; fact<=number; fact++){
//     fact*=number;
// }
// console.log("Factorial is",fact);

   

            // String in JS
            

// let firstName="Ankit";
// let secondName="Mishr/na";

// let fullName=firstName + "" + "/n "+secondName;
// console.log(fullName);

// let str="String";
// let result=str.toUpperCase();
// console.log(result);

// let  name="Ankit Mishra";
// let result=name.split(' ');
// console.log(result);




// Question- Find how many times a character present in a string..


// let string=prompt("Enter Your string");
// let char=prompt("Enter Your find character");
// let count=0;

// for (let i = 0; i < string.length; i++) {
//     let result=string.includes(char);
//     console.log(result)
    
// }

// for (let index in string) {

//     if(string[index].toLowerCase()===char.toLowerCase()){
//         console.log("Occurence position ",index);
        
//         count++;
        
//     }
// }



// Question- Count the word in a string

// let str="Hi i am boy";
// console.log(str.split(' '));


// let name="Ankit Mishra";

// console.log(name.split('').length);
// console.log(name.split(' ').length);




    //  # Array in Javascript


// let arr=[1,2,32,22,15,11,16,12]

// for(let i =0; i<arr.length; i++){
//     console.log(i*2);
    
// }

// for (const value of arr) {
//     console.log(value);
    
// }

// for(let ind in arr){
//     console.log(ind);
    
// }





// let arr=[2,3,"akm","5","8"]
// console.log(arr);
// arr.push(20);
// console.log(arr);

// console.log(arr.push(20));

// let a=arr.push(20);
// console.log(a);

// let arr=[2,3,"akm","5","8"]
// newarr=arr.slice(1,3);
// console.log(newarr);

// let arr=[2,3,"akm","5","8"]
// console.log(arr);

// arr.splice(1,2,"Mishra","Ji");
// console.log(arr);


    //    Sort() method in js

    // let arr=[10,5,1,20];
    // arr.sort();
    // console.log(arr);
    


        //  Map method in js

// let arr=[1,2,3,4,6,8]

// arr.map((elem)=>{

//     return(
//         elem*2
//     )

    
// })

//     console.log(elem,index,arr);


//  Filter Method

// let arr=[2,3,4,5,6,7,8];

// let newarr=arr.filter((elem,index)=>{


//     return(
//         elem%2===0



//     )

    
// })
// console.log(newarr);



// Reduce Methode()


// Question on Array

// (1) Find the average marks of class

// let marks=[5,10,25,20]

// let newarr=marks.reduce((accumulator,current)=>{
//     return accumulator+current
// })
// console.log(newarr/marks.length);

// (2) Check Palindrome string

// let arr=[1,2,3]
// arr.reverse();
// console.log(arr);

// let arr=["Ankit"]
// console.log(arr.reverse());

// let str="Hello"
// let reversedStr=str.split('').reverse().join("")

// if(str===reversedStr){
//     console.log("Palindrome numner");
    
// }
// else{
//     console.log("Not Palindrom");
    
// }






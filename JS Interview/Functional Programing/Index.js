// let arr=[1,3,4,6,7]

// arr.map((double)=>{
// return(
//     console.log(double*2)
// )
// })

// for(let i=0; i<arr.length; i++){
// console.log(arr[i]*2);

// }

// console.log(arr);cd

//  Pure Functions *****

// function sum(a,b){
//     return a+b
// }

// sum(1,5)---- Jb return krte hai to us kisi n ksi variable me store krna hi pdta hai
// let result=sum(1,5)
// console.log(result);

// let list=["alu","gobhi","kaddu"]

// function add(item) {
// list.push(item)
// console.log(list);

//     const newList=[...list,item];
//     return newList
// }

// console.log(list);
// let resul=add("lauki");
// console.log(resul);

// let arr=["alu","gobi","lauki"]

// function removeLastItem() {
//     let newArr=[...arr]
//     newArr.pop();
//     console.log(newArr);

// let collectArr=newArr.slice(0,-1)
// return collectArr;
// }

// console.log(arr);
// removeLastItem()

// let result=removeLastItem()
// console.log(result);

// let arrCollection=["A","B","C","D"]
// console.log(arrCollection);

// arrCollection.pop()
// console.log(arrCollection);

// let changeArray=arrCollection.pop()
// console.log(changeArray);

//   Stop Function Repeation *****

// let User={
//     name:"Ankit Mishra",
//     email:"ankit@gmail.com",
//     phone:34579
// }
// function sendMsg(msg,sendTo){
// console.log(`${msg}: ${sendTo}`);

// }

// sendMsg("Email send to ",User.email)

//    HOD, CALLBACK AND FIRST CLASS FUNCTION ****

// function greetWithwish() {
//   return "Wish you good morning";
// }

// function greetWithName(name) {
//   return greetWithwish() + " " + name;
// }

// function HOD(fn, lastName) {
//   return fn("Ankit") + " " + lastName;
// }
// let output = HOD(greetWithName, "Mishra");
// console.log(output);

// function HOD(fn, Lastname) {
//   return fn() + " " + Lastname;
// }

// let rsult=greetWithName("Ankit")
// console.log(rsult);










                    // #**** Practice Questions ****

// Question No -01
//   Whta is a pure function and why is it useful in UI renderring.

// Ans:  No side effect , No shared state and always have  return statement.


//  Question NO -02

// How would you use .map() to transform a list of product into a list of HTML elements?

// Ans--


//  Questin No -03 How do you use reduce method()?

// Ans--   let arr=[2,3,5,6,7]    *** Reduce method me return statement use krna chaie


// let result=arr.reduce((accumulator,currentvlue)=>{

  
//   return accumulator + currentvlue


// },0)

// console.log(result);
 



//  Question No -04 
    // How to use immutability in  object by using function without updating original one.

//  Ans --  // let obj={
//   name:"Ankit",
//   age:23
// }

// function immutabel(){
//   console.log(obj);
  
//   let newObj={...obj}

//   newObj.email="anki@gmail.com"
//   console.log(newObj);
  
// }

// immutabel()



// -- Question No -05 

// What is difference between for each and map and when it is wrong to use mp method?

// Ans --  Node list ke sath map lgate hai for each nhi

// for each kuch bhi return nhi krta hai , map new array return krta hai 



//  QUestion no -06

//  How would you create your own map function 


//  Question no -07

// create a function which calcualte the square of a given Array ?

// let arr=[2,3,4,5,6]

// function sqare(array){

//   let sqareArray=[]
// for (let i=1; i<array.length; i++){

//  sqareArray.push(arr[i]*arr[i])
// }

// return sqareArray
// }

// sqare(arr)
// let result=sqare(arr)
// console.log(result);

// let result=arr.map((square)=>{

 
  
//    return square*square
// })
// console.log(result);



//  Question no -08 



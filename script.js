//var let and const

// Use const by default for variables that won't change.
// Use let for variables that might change.
// Avoid var in modern code unless necessary for legacy reasons.

// use let
// let a = "Nashra";
// let b = "Alina";
// console.log(a + " and " + b);

// use const
// const a = "Nashra";
// const b = "Alina";
// console.log(a + " and " + b);

//Hoisting :- variable and functions are hoisted
// which means there declaration is moved on the top of code
// console.log(a); //undefined answer
// var a = 12;

//types of js
// primitive and reference
//primitive :- number , string , null, undefined, boolean
//reference:- [], (),{}
// var a = [1, 2, 3, 4];
// var b = a;
// b.pop();

//conditionals  - if else else-if
// jb baat ho agar magar ki ya ye ho to wo kro
// if(12>10){
// console.log("I am a good developer");

// }else{
// console.log("i am not a developer");
// }

//loop for, while
//for loop
// for(let i=0; i<10; i++){
//     console.log(i,"Nashra");
// }

// while loop
// var a = 20;
// while (a < 40) {
//   a++;
//   console.log(a);
// }

//functions
//function mainly 3 kaam ke lye hote hain
//1) jb aapka code aap turant nhi chalana chahte future mein chalana chahte ho
//2)jb aapka code aap reuse krna chahte ho
//3)jb aap code chalana chahte ho har bar with diffrent data

// function hello(){
//     console.log("My name is Nashra");
// }
// hello()

//arguments or parameter
//arguments = real value jo ham dete hain function chalate wqt
//parameter = variable jinme value store hoti hai arguments wali
// function hello(a){
// console.log(a);
// }
// hello(30)

//arrays= ek se zyada value store kr skte hain hm arrey me
// var arr=[1,2,3,4,5,6];
// console.log(arr);

//push,pop,shift and unshift
// var arr=[5,6,7,8,9];
// arr.push(10); //last me ek value add ho jati hai
// arr.pop(); //last ki ek value remove ho jati hai
// arr.unshift(2); // aage ek value add ho jati hai
//arr.shift(); //aage ki value hath jati h
// arr.splice(3,1); // beech me se kisi value ko remove krna

// object
//black object
// let a={

// };

//fill object
// let a = {
//   age: 20,
//   name: "nashra",
//   school: "skv",
// //   hello: function () {}, // this is method
// };
// // a.name="Alina" // change name
// console.log(a.name);



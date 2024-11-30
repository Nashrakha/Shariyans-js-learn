//var old js me tha
//var function scoped hota hai => var apne parent function me khi bhi use ho skta
//var adds itself to the window object

// function hello() {
//   for (let i = 0; i < 10; i++){
//     console.log(i);
//   }
// //   console.log(i); error
// }
// hello(); //sucessfull run

//let, const const new js mein hai
//let, const braces scoped hota hai
//let, const  doesn't adds

// window
// var a = "Nashra"; //dikhega
// var b = 20; //dikhega
// let c= 30;  //nhi dikhega

//execution context matlb jb bhi hum function chalayenge fnc apna ek khudka imaginary contaner bna lega jisme uski teen cheeze hogi:-
//1) variables
//2) functions inside that parent fnc
//3) lexical environment of that function
// ye jo fnc container hai imaginary  ise hi hm executive contaxt khte hain

//lexical environment hota hai ek chart jisme ye likha hota hai ki aapka particular function kin cheezo ko acess kr skta hai and kinko nhi

// how to copy reference values
// a=[1,2,3,4,5];
// b=[...a] //spred operator
// b.pop()

// var obj = { name: "nashra" };
// var copyobj = { ...obj };

// console.log(copyobj.name="alina");

// truthy and falsy
//js me kuch bhi likho wo mainly do prakar me se kisi ek prakar ko belong krti hai.
//falsy value :- 0 false, undefined, null, NaN , document.all

// if(7){
//     console.log("hello");
// }else{
//     console.log("print nhi hoga");
// }       //truthy

// if(NaN){
//     console.log("hello");
// }else{
//     console.log("print nhi hoga");
// }      //falsy

//forEach loop srf array pe chalta hai matlab ki jab bhi tumhare pass ek array ho, tab use mein kaun aaat forEach loop

// forEach kabhi bhi by default aapke array mein change nhi krta wo aapko changes krke deta hai array ki temporary copy par jiske wjh se array hamesha same rhta hai
// var a = [1, 2, 3, 4, 5, 6];
// a.forEach(function (val) {
//     console.log(val+2+"nashra");
// });

// forIn loop :- object pr loop krne ke liya hota hai forIn loop
// var obj = {
//   name: "Nashra",
//   class: 12,
//   city: "Delhi",
// };
// for (var key in obj) {
//   console.log(key, obj[key]);
// }

//callback function:- jb bhi koi esa code jo baad me chlta hai aap likhoge qki wo code baad me chlta hai js ko pta nhi hota ki wo complete hua hai ki nhi. ese code ke completion pr js ko btaya jata hai ki wo complete ho gya or aap use chala skte ho ye btane ka kaam callback ka hai

// setTimeout(function(){
// console.log("kya kr rhe ho tum padh loo");
// },2000);

//first class function
// js me ek concept hai jiska mtlb hota hai ki fnc ko use kr skte ho as a value
// function hello(a) {
//   a();
// }
// hello(function () {
//   console.log("hello I am first class function");
// });

//updating object props
var a={
    name:"Nashra",
    age:21,
    class:"B.A"
}
delete a.age;
delete a.name;

//higher order function
// constructor fnc
// First class function
// new keyword
//life
//prototype
//prototypal inheritence
//this call apply bind
//pure & impure function
//closures

//higher order func:- esa fnc jo accept kr le ek or fnc ya phir wo return krde ek or function

// constructor function:- jb aapke paas esa koi bhi mouka ho ke aapko
// ek jaisi properties wale bht saare elements banane hai us wqt aap 
// constructor func use kr skte hai
function circlebtn(color) {
  this.radius = 3;
  this.color = color;
  this.pressable = true;
}
var redbtn = new circlebtn("red");
var greenbtn = new circlebtn("green");

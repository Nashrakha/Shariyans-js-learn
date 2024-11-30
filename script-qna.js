//array - foreach map filter

// var a = [1, 2, 3, 4, 5];
// a.forEach(function (val) {
//   console.log(val + 2);
// });

//1. foreach ka use krke array saare members ke aage hello world print krana hai
// var a = [1, 2, 3, 4, 5];
// a.forEach(function (val) {
//   console.log("hello world," + val);
// });

//2. array ke saare members print kro or unhe chor do joki 2 se chote or uske barabar ho
// var a = [1, 2, 3, 4, 5];
// a.forEach(function (val) {
//   if (val <= 2) {
//     console.log(val);
//   }
// });

//2. array ke saare members print kro or unhe chor do joki 3 se bade ho
// var a = [1, 2, 3, 4, 5];
// a.forEach(function (val) {
//   if (val >= 3) {
//     console.log(val);
//   }
// });

//3.saare elements jo ki array me hai unka sum kro

// var a = [1, 2, 3, 4, 5];
// sum = 0;
// a.forEach(function (val) {
//   if (val) {
//     sum = sum + val;
//     console.log(sum);
//   }
// });

//4. saare bnde add kro agar unme se koi bhi string nikl jaye to use skip kro

var a = [1, 2, "3", "4", 5];
sum = 0;
a.forEach(function (val) {
  if (typeof val === "number") {
    sum = sum + val;
    console.log(sum);
  }
});

//object - access loop
//freez this cald apply bind

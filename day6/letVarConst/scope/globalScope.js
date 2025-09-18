var a = 20;
let b = 21;
const c = 22;
console.log("globalScope");
console.log("values of a in global scope ", a);
console.log("values of b in global scope ", b);
console.log("values of c in global scope ", c);
function callValues(a, b, c) {
    console.log("outside  func");
    console.log("values of a outside the function  ", a);
    console.log("values of b outside the function  ", b);
    console.log("values of c outside the function ", c);
}
callValues(a, b, c);
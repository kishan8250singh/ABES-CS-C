// console.log(isODDUisingTernary(3));
// console.log(isODD(9));
// function isODD(a){
//   if( a%2!==0){
//     return "values is odd";
//   }
//   else{
//     return "values is even";
//   }
// }
// function isODDUisingTernary(a){
//     return a%2 !== 0 ? "Values is odd ":"Values is even";
// }
// console.log(isODDUisingTernary(3));
// console.log(isODD(9));

// function as expression 
// let funAsExpression  = function isOdd(){
//      return a%2 !== 0 ? "Values is odd ":"Values is even";
// }
// console.log(funAsExpression(8));


//arrow function 
// const arrowfun = (a)=>{
//     return a%2!==0 ? "values id odd":"values is even";
// }
// console.log(arrowfun(6));

// Immediately invoked function Expresion
(function iifun(){
    console.log("inside function");
})();
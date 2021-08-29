//import React from 'react';


const myName="vishal";
//let n1=12;
//let n2=6;
function add(n1,n2){

    let addition=n1+n2;
    return addition;
}
function sub(n1,n2){
    let subtraction=n1-n2;
    return subtraction;
}
function mul(n1,n2){
    let multiplication=n1*n2;
    return multiplication;
}
function div(n1,n2){
    let divided =n1 / n2;
    divided=divided.toFixed(2)
    return divided;
}
export default myName;
export {add,sub,mul,div};
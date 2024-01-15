// catch elements
var x = document.querySelector(".x");
var y = document.querySelector(".y");
var cross = document.querySelector(".cross");
var divide = document.querySelector(".divide");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var output = document.querySelector(".output");
// function plus
plus.onclick = function (){
    output.innerHTML = `The Plus is : ${parseInt(x.value) + parseInt(y.value)}`
}
// funtion cross
cross.onclick = function (){
    output.innerHTML =`The Cross is : ${x.value * y.value}`;
}
// funtion divide
divide.onclick = function (){
    output.innerHTML =` The Divide is : + ${x.value / y.value}`;
}
// function minus
minus.onclick = function (){
    output.innerHTML = `The Minus is : ${y.value - x.value}`;
}
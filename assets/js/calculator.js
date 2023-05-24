// document.addEventListener("DOMContentLoaded",function() {
//     let buttons = document.getElementsByClassName('btn');
//     let operations = [];
//     for(let button of buttons){
//         button.addEventListener('click',function(){
//             if(this.getAttribute("data-type")==="number" || this.getAttribute("data-type")==="number-decimal"){
//                 let console2 = document.getElementById("console-2");
//                 if(console2.innerText === '0'){
//                     console2.innerHTML = button.innerHTML;
//                 } else{
//                     console2.innerHTML += button.innerHTML;
//                 }
//             } else if(this.getAttribute("data-type")==="clean"){
//                 clean();
//                 operations =[];
//             } else{
//                 operations.push(this.getAttribute("data-type"))
//                 if(operations[0] === 'equal' && document.getElementById("console-1").innerText === '0'){
//                     document.getElementById("console-1").innerText = document.getElementById("console-2").innerText;
//                     document.getElementById("console-2").innerHTML = 0;
//                     operations.shift();
//                 } else{
//                     console.log("antes del segundo if");
//                     console.log(operations);
//                     if (operations.length > 1){
//                         if (operations[1] === 'equal'){
//                             doOperation(operations[0]);
//                             operations = []; // limpio el array
//                         } else{
//                             doOperation(operations[0]);
//                             operations.shift();
//                         }
//                     } else {
//                         doOperation(operations[0]);
//                     }
//                 }
//             }
//         })
//     }
// })
    

// function doOperation(operationType){
    
//     let console1 = document.getElementById("console-1");
//     let console2 = document.getElementById("console-2");
//     if(console1.innerText ==="0"){
//         console1.innerText = console2.innerText;
//         console2.innerHTML = 0;
//     } else{
//         let num1 = parseFloat(console1.innerText);
//         let num2 = parseFloat(console2.innerText);
//         let result;
//         if (operationType === "addition"){
//             result = addTwoNumbers(num1, num2);
//         } else if(operationType === 'substract'){
//             result = substractTwoNumbers(num1, num2);
//         } else if(operationType === 'multiply'){
//             result = multiplyTwoNumbers(num1, num2);
//         } else if(operationType === 'division'){
//             result = divideTwoNumbers(num1, num2);
//         } 
//         console1.innerHTML = result;
//         console2.innerHTML = 0;
//     }
// }


// function addTwoNumbers(num1,num2){
//     return num1+num2;
// }
// function substractTwoNumbers(num1,num2){
//     return num1-num2;
// }
// function multiplyTwoNumbers(num1,num2){
//     return num1*num2;
// }
// function divideTwoNumbers(num1,num2){
//     return num1/num2;
// }
// function clean(){
//     let console1 = document.getElementById("console-1");
//     let console2 = document.getElementById("console-2");
//     console1.innerText = 0;
//     console2.innerText = 0;
// }



/* The addEventListener() method to listen for the "DOMContentLoaded" event on the document object. 
The "DOMContentLoaded" event is fired when the browser has finished parsing and constructing 
the Document Object Model (DOM) for the web page. */
let operators = {
    "addition": '+',
    "substract": '-',
    "multiply": 'x',
    "division": '/'
}

document.addEventListener("DOMContentLoaded", function(){
    // Getting buttons
    let buttons = document.getElementsByClassName('btn');
    // Storing operations
    let operations = [];
    // initializing numbers variable
    let numbers;

    for (let button of buttons){
        button.addEventListener('click', () => {
            let console1 = document.getElementById("console-1");
            let console2 = document.getElementById("console-2");
            
            // check length or operations array
            if(operations.length == 0){
                if(button.getAttribute("data-type") == 'clean'){
                    clean(console1, console2, operations);
                } else if (button.getAttribute("data-type") == 'number'){
                        if(console2.innerHTML == '0'){
                            console2.innerHTML = button.innerHTML;
                        } else{
                            console2.innerHTML += button.innerHTML;
                        }   
                } else if(button.getAttribute("data-type") == 'operator'){
                    operations.push(button.getAttribute("data-operation"));
                    if(operations[0]=='root-square' || operations[0]=='pow'){
                        let number = parseFloat(console2.innerHTML);
                        console1.innerHTML = doOperation(operations[1],number, 0);
                        console2.innerHTML = console1.innerHTML;
                        operations.shift();
                    } else{                        
                        console1.innerHTML = console2.innerHTML;
                        console2.innerHTML += operators[operations[0]];
                    }
                } else if(button.getAttribute("data-type") == 'delete'){
                        console2.innerHTML = deleteNumber(console2.innerHTML);
                }
            } else if(operations.length == 1){
                if(operations[0] == 'equal' || operations[0] == 'root-square' || operations[0] == 'pow'){
                    if(button.getAttribute("data-type") == 'clean'){
                        clean(console1, console2, operations);
                    } else if (button.getAttribute("data-type") == 'number'){
                        console2.innerHTML = button.innerHTML;
                        console1.innerHTML = 0;
                        operations.shift();
                    } else if(button.getAttribute("data-type") == 'operator'){
                        operations.push(button.getAttribute("data-operation"));
                        console1.innerHTML = console2.innerHTML;
                        operations.shift();
                        console2.innerHTML += operators[operations[0]];
                    }
                }  
                else{
                    if(button.getAttribute("data-type") == 'clean'){
                        clean(console1, console2, operations);
                    } else if (button.getAttribute("data-type") == 'number'){
                        console2.innerHTML += button.innerHTML;
                        numbers = splitString(console2.innerHTML, operators[operations[0]]);
                        console1.innerHTML = doOperation(operations[0],numbers[0], numbers[1]);   
                    } else if(button.getAttribute("data-type") == 'operator'){
                        operations.push(button.getAttribute("data-operation"));
                        if((operations[1] != 'root-square') && (operations[1] != 'pow')){
                            console2.innerHTML = console1.innerHTML;
                            operations.shift();
                            console2.innerHTML += operators[operations[0]];
                        } else{
                            let number = parseFloat(console1.innerHTML);
                            console1.innerHTML = doOperation(operations[1],number, 0);
                            console2.innerHTML = console1.innerHTML;
                            operations.shift();
                        }
                        
                    } else if(button.getAttribute("data-type") == 'delete'){
                        if(checkLastChar(console2.innerHTML) == false){
                            console2.innerHTML = deleteNumber(console2.innerHTML);
                            if (checkLastChar(console2.innerHTML) == false){
                                numbers = splitString(console2.innerHTML, operators[operations[0]]);
                                console1.innerHTML = doOperation(operations[0],numbers[0], numbers[1]); 
                            } else{
                                console1.innerHTML = console2.innerHTML.slice(0,-1);
                            }
                        } 
                    }else if (button.getAttribute("data-type") == 'equal'){
                        operations.push(button.getAttribute("data-type"));
                        console2.innerHTML = console1.innerHTML;
                        console1.innerHTML = 0;
                        operations.shift();
                    }
                }
            }

        });
    }


});



function AddTwoNumbers(num1, num2){
    return num1+num2;
}

function SubstractTwoNumbers(num1, num2){
    return num1-num2;
}

function multiplyTwoNumbers(num1, num2){
    return num1*num2;
}

function divideTwoNumbers(num1, num2){
    return num1/num2;
}

function rootSquare(num){
    return Math.sqrt(num);
}

function pow(num){
    return num*num;
}

function splitString(string, separator){
    let nums = string.split(separator);
    return [parseFloat(nums[0]), parseFloat(nums[1])];
}

function deleteNumber(string){
    return string.slice(0,-1);
}
function checkLastChar(string){
    let op = Object.values(operators);
    if (op.includes(string[string.length-1])){
        return true;
    } else {
        return false;
    }
}

function clean(console1, console2, operations){
     // Clear the console-1 and console-2
    console1.innerHTML = 0;
    console2.innerHTML = 0;
    // empty array opeartions
    operations.shift();
}

function doOperation(type, num1, num2){
    if(type == 'addition'){
        return AddTwoNumbers(num1, num2);
    }else if(type == 'substract'){
        return SubstractTwoNumbers(num1, num2);
    } else if(type == 'multiply'){
        return multiplyTwoNumbers(num1,num2);
    } else if(type == 'division'){
        return divideTwoNumbers(num1,num2);
    } else if(type == 'root-square'){
        return rootSquare(num1);
    } else if(type == 'pow'){
        return pow(num1);
    }
}
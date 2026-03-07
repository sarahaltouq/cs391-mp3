function addition() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 + number2;
    document.getElementById("result").innerHTML=String(result)
}

function subtract() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 - number2;
    document.getElementById("result").innerHTML=String(result)
}

function multiply() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 * number2;
    document.getElementById("result").innerHTML=String(result)
}
function power() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = 1;
    for (let i = 0; i < number2; i++)
       { result = result * number1; }
document.getElementById("result").innerHTML = String(result);
}

function divide() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let result = number1 / number2;
    document.getElementById("result").innerHTML=String(result)
}
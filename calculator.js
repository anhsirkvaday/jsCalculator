let result = 0;
let printCal = document.getElementById("print");
let preCal = document.getElementById("preCal");
let signHolder = document.getElementById("sign");
let clickedValue;
function calculate(value) {
  clickedValue = value.innerText;
  if (
    clickedValue === "+" ||
    clickedValue === "-" ||
    clickedValue === "x" ||
    clickedValue === "/"
  ) {
    calculation(clickedValue);
  } else if (clickedValue === "C") {
    printCal.innerText = "";
    preCal.innerText = "";
    signHolder.innerText = "";
    result = 0;
  } else if (clickedValue === "CE") {
    printCal.innerText = "";
  } else if (clickedValue === "<-") {
    let deleteChar = printCal.innerText;
    deleteChar = deleteChar.slice(0, -1);
    printCal.innerText = deleteChar;
  } else if (clickedValue === "=") {
    calculateSameValue();
  } 
  else {
    if (printCal.innerText === "0" || printCal.innerText === preCal.innerText) {
      printCal.innerText = clickedValue;
    } else {
      printCal.innerText += clickedValue;
    }
  }
}

function calculation(value) {
  if (result == 0) {
    result = Number(printCal.innerText);
    // console.log(result);
    preCal.innerText = result;
    signHolder.innerText = value;
  }
  else if(printCal.innerText===preCal.innerText){
    printCal.innerText=printCal.innerText;
    preCal.innerText=preCal.innerText;
  }
  else {
    switch (value) {
      case "+":
        result += Number(printCal.innerText);
        printCal.innerText = result;
        preCal.innerText = result;
        signHolder.innerText = value;
        break;
      case "-":
        if (signHolder.innerText == "-") {
          result -= Number(signHolder.innerText + printCal.innerText);
          printCal.innerText = result;
          preCal.innerText = result;
          signHolder.innerText = value;
        } else {
          result -= Number(printCal.innerText);
          printCal.innerText = result;
          preCal.innerText = result;
          signHolder.innerText = value;
        }
        break;
      case "x":
        result *= Number(printCal.innerText);
        printCal.innerText = result;
        preCal.innerText = result;
        signHolder.innerText = value;
        break;
      case "*":
        result *= Number(printCal.innerText);
        printCal.innerText = result;
        preCal.innerText = result;
        signHolder.innerText = value;
        break;
      case "/":
        result /= Number(printCal.innerText);
        printCal.innerText = result;
        preCal.innerText = result;
        signHolder.innerText = value;
        break;
    }
  }
}


// Get answer by Equal to and Enter
function calculateSameValue(){
switch (signHolder.innerText) {
  case "+":
    console.log(signHolder.innerText);
    result = Number(preCal.innerText) + Number(printCal.innerText);
    printCal.innerText = result;
    preCal.innerText = result;

    break;
  case "-":
    if (result == 0) {
      result =
        Number(signHolder.innerText + preCal.innerText) -
        Number(printCal.innerText);
      printCal.innerText = result;
      preCal.innerText = result;
    } else {
      result = Number(preCal.innerText) - Number(printCal.innerText);
      printCal.innerText = result;
      preCal.innerText = result;
    }
    break;
  case "x":
    result = Number(preCal.innerText) * Number(printCal.innerText);
    printCal.innerText = result;
    preCal.innerText = result;

    break;
  case "/":
    result = Number(preCal.innerText) / Number(printCal.innerText);
    printCal.innerText = result;
    preCal.innerText = result;
    break;
}
}

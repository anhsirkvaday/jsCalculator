document.onkeydown = (k) => {
  if (
    k.key == "1" ||
    k.key == "2" ||
    k.key == "3" ||
    k.key == "4" ||
    k.key == "5" ||
    k.key == "6" ||
    k.key == "7" ||
    k.key == "8" ||
    k.key == "9" ||
    k.key == "0" ||
    k.key == "."
  ) {
    if (printCal.innerText === "0" || printCal.innerText === preCal.innerText) {
      printCal.innerText = k.key;
    } else {
      printCal.innerText += k.key;
    }
  } else if(
    k.key == "*"||
    k.key == "/"||
    k.key == "+"||
    k.key == "%"||
    k.key == "-"
  ) {
    calculation(k.key);
  }
  else if(k.key==='Enter'){
    calculateSameValue();
  }
  else if(k.key==='Backspace'){
    let deleteChar = printCal.innerText;
    deleteChar = deleteChar.slice(0, -1);
    printCal.innerText = deleteChar;
  }
  else if(k.key==='Delete'){
    printCal.innerText = "";
    preCal.innerText = "";
    signHolder.innerText = "";
  }
};

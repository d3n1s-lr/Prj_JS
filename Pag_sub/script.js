  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

function calcular() {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Digita numero que pode po");
    return;
  }

  const sub = num1 - num2;
  console.log("A subtração é " + sub);
}

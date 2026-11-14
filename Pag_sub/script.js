function calcular() {
  const num1 = parseFloat(document.getElementById("peso").value);
  const num2 = parseFloat(document.getElementById("altura").value);

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Digita numero que pode po");
    return;
  }

  const sub = num1 - num2;
  console.log("A subtração é " + sub);
}
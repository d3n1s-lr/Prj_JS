function calcular() {
  const num1 = parseFloat(document.getElementById("peso").value);
  const num2 = parseFloat(document.getElementById("altura").value);
  const resul = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2)) {
    resul.textContent = "Digite dois números válidos.";
    return;
  }

  const soma = num1 + num2;
  resul.textContent = "A soma é " + soma;
}
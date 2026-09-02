/**

============================================================================
🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE D: JAVASCRIPT
============================================================================
*/

function calcularPromedioNotas(a, b) {
  // Suma las dos notas y divide para 2
  return (a + b) / 2;
  }
  
  function procesarCalculo() {
  const input1 = document.querySelector("#nota1");
  const input2 = document.querySelector("#nota2");
  const cajaResultado = document.querySelector("#resultado");
  
  // Convertir los valores a números
  const val1 = Number(input1.value);
  const val2 = Number(input2.value);
  
  // Calcular el promedio
  const promedio = calcularPromedioNotas(val1, val2);
  
  // Mostrar el resultado
  cajaResultado.textContent = "Promedio: " + promedio;
  }
  
  // Seleccionar el botón por su ID
  const boton = document.querySelector("#btn-calcular");
  
  if (boton) {
  boton.addEventListener("click", procesarCalculo);
  }
# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** [Jose_Mogrovejo] 
**Paralelo:** [E1] **Fecha:** [02/09/2026]

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** El archivo HTML tenía varios errores. La etiqueta <header> no estaba cerrada correctamente, el segundo campo de nota no tenía el id="nota2" y el botón no tenía el id="btn-calcular" necesario para que JavaScript pudiera encontrarlo.

- **Causa Raíz:** Los elementos HTML no coincidían con los selectores que utilizaba JavaScript. Además, la etiqueta <header> estaba mal estructurada y la hoja de estilos tenía un nombre incorrecto en el enlace.

- **Solución Aplicada:** Se cerró correctamente la etiqueta </header>, se agregó id="nota2" al segundo input, se agregó id="btn-calcular" al botón y se corrigió la vinculación de la hoja de estilos de estilos-rotos.css a estilos.css.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** Algunas propiedades CSS tenían valores o nombres incorrectos. Se utilizó display: flexer, align-item y cursor: pointing-hand.

- **Causa Raíz:** flexer no es un valor válido para display, align-item está mal escrito y pointing-hand no es un valor válido para cursor. Esto impedía que algunos estilos se aplicaran correctamente.


- **Solución Aplicada:** Se cambiaron las propiedades por sus valores correctos: display: flex, align-items: center y cursor: pointer.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** La calculadora no podía obtener correctamente la segunda nota ni calcular el promedio. Además, el botón no era encontrado y el resultado no se mostraba correctamente.

- **Causa Raíz:** El selector #nota_inexistente no coincidía con ningún elemento del HTML, el selector .btn-calcular tampoco coincidía con el botón, los valores de los inputs eran tratados como texto y textContnt estaba escrito incorrectamente. También la fórmula a + b / 2 no calculaba correctamente el promedio de las dos notas.

- **Solución Aplicada:** Se cambió #nota_inexistente por #nota2, .btn-calcular por #btn-calcular, se utilizaron Number() para convertir los valores a números, se corrigió textContnt por textContent y se cambió la fórmula a (a + b) / 2. Finalmente, se agregó el evento addEventListener("click", procesarCalculo) para que el botón ejecute el cálculo.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [✅ ] Presioné F12 en el navegador.
- [✅ ] Fui a la pestaña **Console**.
- [✅ ] Verifiqué que **NO aparezca ningún error en rojo**.


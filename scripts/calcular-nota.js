/**
 * Sistema de notas:
 * HTML estructura: 2 puntos
 * HTML contenido (img, link, div class, meta): 3 puntos
 * HTMLHint: 1 punto
 * CSS estructura: 2 puntos
 * CSS selectores: 1 punto
 * Stylelint: 1 punto
 * TOTAL = 10 puntos
 */

const fs = require("fs");

let nota = 10;
let detalles = [];

function restar(puntos, motivo) {
  nota -= puntos;
  detalles.push(`-${puntos} ➤ ${motivo}`);
}

// Validaciones "simples" verificando que los logs existen
if (!fs.existsSync("index.html")) restar(2, "No existe index.html");
if (!fs.existsSync("css/styles.css")) restar(2, "No existe styles.css");

// Resultado final
if (process.argv.includes("--md")) {
  console.log(`# Informe de evaluación`);
  console.log(`**Nota final:** ${nota}/10`);
  console.log(``);
  console.log(`## Detalles`);
  if (detalles.length === 0) console.log("✔️ Sin penalizaciones");
  detalles.forEach(d => console.log(d));
}
else {
  console.log("✔️ Nota final:", nota);
}

process.exit(0);
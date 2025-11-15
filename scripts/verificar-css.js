const fs = require("fs");

const css = fs.readFileSync("css/styles.css", "utf8");

let errores = [];

// Seleccionadores distintos >= 3
const selectores = css.match(/[.#]?[a-zA-Z0-9\-_]+\s*\{/g);

if (!selectores || selectores.length < 3) {
  errores.push("Debe tener al menos 3 selectores distintos en CSS");
}

if (errores.length) {
  console.error("❌ Errores CSS:");
  errores.forEach(e => console.error(" - " + e));
  process.exit(1);
}

console.log("✔️ CSS correcto según los criterios del profesor");
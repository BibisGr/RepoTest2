const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");

let errores = [];

// 1. Estructura mínima html/head/body
if (!html.includes("<html")) errores.push("Falta etiqueta <html>");
if (!html.includes("<head")) errores.push("Falta etiqueta <head>");
if (!html.includes("<body")) errores.push("Falta etiqueta <body>");

// 2. Meta viewport
if (!html.includes('meta name="viewport"')) {
  errores.push("Falta meta viewport");
}

// 3. Al menos 1 imagen
if (!html.match(/<img\s/i)) {
  errores.push("Debe incluir al menos una imagen <img>");
}

// 4. Al menos 1 enlace
if (!html.match(/<a\s/i)) {
  errores.push("Debe incluir al menos un enlace <a>");
}

// 5. Usar div con clases
if (!html.match(/<div\s+class=/i)) {
  errores.push("Debe incluir al menos un <div> con class");
}

if (errores.length) {
  console.error("❌ Errores HTML:");
  errores.forEach(e => console.error(" - " + e));
  process.exit(1);
}

console.log("✔️ HTML correcto según los criterios del profesor");
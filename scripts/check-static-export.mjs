import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const output = "out";
const requiredHTML = [
  "index.html",
  "404.html",
  "servicos/index.html",
  "modelos/index.html",
  "como-funciona/index.html",
  "contato/index.html",
];

function assert(condition, message) {
  if (!condition) throw new Error(`Exportação estática inválida: ${message}`);
}

function nonEmptyFile(file) {
  return existsSync(file) && statSync(file).isFile() && statSync(file).size > 0;
}

function filesIn(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}

for (const relative of requiredHTML) {
  const file = join(output, relative);
  assert(nonEmptyFile(file), `${file} ausente ou vazio`);
  const html = readFileSync(file, "utf8");
  assert(/<html[\s>]/i.test(html), `${file} não contém HTML`);
  for (const match of html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?#]+)[^"\s]*"/g)) {
    const asset = join(output, decodeURIComponent(match[1]));
    assert(nonEmptyFile(asset), `asset referenciado por ${file} ausente: ${asset}`);
  }
  console.log(`OK ${file} (${statSync(file).size} bytes)`);
}

const assets = filesIn(join(output, "_next", "static"));
const cssFiles = assets.filter((file) => file.endsWith(".css") && nonEmptyFile(file));
const jsFiles = assets.filter((file) => file.endsWith(".js") && nonEmptyFile(file));
assert(cssFiles.length > 0, "nenhum CSS compilado");
assert(jsFiles.length > 0, "nenhum JavaScript compilado");
const css = cssFiles.map((file) => readFileSync(file, "utf8")).join("\n");
assert(!/@theme\b/.test(css), "@theme não foi processado pelo Tailwind");
assert(css.includes(".text-heading-1") && css.includes(".bg-surface"), "utilitários do design system ausentes");
if (process.env.INCLUDE_DESIGN_SYSTEM !== "true") {
  assert(!existsSync(join(output, "design-system")) && !existsSync(join(output, "design-system.html")), "demonstração do Design System presente no build comercial");
}
console.log(`OK ${cssFiles.length} CSS e ${jsFiles.length} JavaScript; assets e design system verificados.`);

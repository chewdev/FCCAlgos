function convertHTML(str) {
  // Replace (&, <, >, ", ') with their corresponding html entities
  const htmlStr = str
    .replace(/[&]/g, "&amp;")
    .replace(/[<]/g, "&lt;")
    .replace(/[>]/g, "&gt;")
    .replace(/["]/g, "&quot;")
    .replace(/[']/g, "&apos;");
  return htmlStr;
}

console.log(convertHTML("Dolce & Gabbana"));

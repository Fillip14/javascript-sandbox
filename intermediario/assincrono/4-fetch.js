const href = el.getAttribute("href");

const response = fetch(href);
const html = response.text();
carregaResultado(html);

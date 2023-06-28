function main() {
  const componenteHeader = document.querySelector(".component-header");
  componentHeader(componenteHeader);

  const componentFormulario = document.querySelector(".component-form");
  componentForm(componentFormulario);

  const componenteFooter = document.querySelector(".component-footer");
  componentFooter(componenteFooter);

  const botonAbreVentanaEl = document.querySelector(".abre-ventana");
  const botonCierraVentanaEl = document.querySelector(
    ".ventana__cierra-ventana"
  );
  const ventanaEl = document.querySelector(".ventana");

  botonAbreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  botonCierraVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
main();

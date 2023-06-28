function main() {
  const component_header = document.querySelector(".component-header");
  componentHeader(component_header);

  //   const component_bienvenida = document.querySelector(".component-bienvenida");
  //   componentMainBienvenida(component_bienvenida);

  const component_presentacion = document.querySelector(
    ".component-home_seccion_dos"
  );
  componentPresentacion(component_presentacion);

  const component_card = document.querySelector(".component-card");
  componentCard(component_card);

  //   const component_form = document.querySelector(".component-form");
  //   componentForm(component_form);

  const component_footer = document.querySelector(".component-footer");
  componentFooter(component_footer);

  const botonAbreVentana = document.querySelector(".abre-ventana");
  const botonCierraVentana = document.querySelector(".ventana__cierra-ventana");
  const ventanaEl = document.querySelector(".ventana");

  botonAbreVentana.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });

  botonCierraVentana.addEventListener("click", () => {
    ventanaEl.style.display = "none";
  });
}

main();

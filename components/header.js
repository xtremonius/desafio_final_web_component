function componentHeader(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
    <header class="home__cont-header">
    <div class="home__logo">
        <a href="./index.html"><img class="mi-logo" src="./imagenes/tortas-fritas.png" alt="mi logo"/></a>
    </div>
     <div class="home__hamburg-desplegada">
     <a href="./portfolio.html" class="home__portfolio">Portfolio</a>
     <a href="./servicios.html" class="home__servicios">Servicios</a>
     <a href="./contacto.html" class="home__contacto">Contacto</a>
    </div>
     <div class="ventana-hamburguesa">
            <button class="abre-ventana">☰</button>
            <div class="ventana">
                <div class="ventana__contenedor-boton">
                    <button class="ventana__cierra-ventana"> X </button>
                </div>
                <div class="ventana__contenido">
                    <a href="./portfolio.html" class="ventana__contenido-portfolio">Portfolio</a>
                    <a href="./servicios.html" class="ventana__contenido-servicios">Servicios</a>
                    <a href="./contacto.html" class="ventana__contenido-contacto">Contacto</a>
                </div>
            </div>
    </div>
    </header> 
    `;
  element.appendChild(componentEl);
}

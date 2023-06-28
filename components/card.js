function componentCard(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
        <secction class="home__seccion-tres">
            <h2 class="home__seccion-tres-title">
                <span class="mis__title">Mis</span>
                <span class="servicios__title">servicios</span>
            </h2>
            <div class="home__container-madre">
                <template id="cards">
                    <div class="home__cont-1">
                        <img
                            src="./imegenes/compuvintage.png"
                            alt="compu verde"
                            class="home__compu1"
                        />
                        <h3 class="home__card-title"></h3>
                        <p class="home__card-parrafo"></p>
                        <a href="https://github.com/pablotoledogithub" class="home__card-link">Ver más</a>
                    
                    </div>
                </template>
            </div> 
        </secction>
    `;
  element.appendChild(componentEl);
}

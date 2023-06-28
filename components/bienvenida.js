function componentBienvenida(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = ` 
    <section class="home__section-uno">
        <h1 class="home__title">
            <span class="hola__title">Hola</span><br/>  
            <span class="soy__dante_title">soy Dante</span>
        </h1> 
        <div class="home__imagen_dante">
            <img class="dante" src="./imagenes/danti_mobile.png" /> 
        </div> 
    </section>
    `;
  /*   console.log("Entrando a getBienvenida");

  const rr = getBienvenida().then(function (e) {
    const titulo = e[0].title;
    console.log("Entrando al Title de contentful");
    console.log(e[0].title);
    console.log(e[0].name);
  }); */

  element.appendChild(componentEl);
}

function getBienvenida() {
  return fetch(
    "https://cdn.contentful.com/spaces/ewkf9uy59du3/environments/master/entries?access_token=hiizLjDrFrGzLQBeOyrLi_Mir85fQnezXql7-zplpTw&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldBienvenida = data.items.map((item) => {
        return {
          title: item.fields.title,
          name: item.fields.namePresentation,
        };
      });
      return fieldBienvenida;
    });
}

function addBienvenidaInfo(element, params = {}) {
  console.log("Info que llega desde parametros: ", params.title);
  const componentEl = document.createElement("div");
  componentEl.innerHTML = ` 
    <section class="home__section-uno">
        <h1 class="home__title">
            <span class="hola__title">${params.title}</span><br/>  
            <span class="soy__dante_title">${params.name}</span>
        </h1> 
        <div class="home__imagen_dante">
            <img class="dante" src="./imagenes/danti_mobile.png" /> 
        </div> 
    </section>
    `;
  /*   console.log("Entrando a getBienvenida");

  const rr = getBienvenida().then(function (e) {
    const titulo = e[0].title;
    console.log("Entrando al Title de contentful");
    console.log(e[0].title);
    console.log(e[0].name);
  }); */

  element.appendChild(componentEl);
}

function componentMainBienvenida(element) {
  getBienvenida().then(function (info_bienvenida) {
    console.log(info_bienvenida[0].name);
    console.log(info_bienvenida[0].title);
    console.log("info de info_bienvenida", info_bienvenida);
    addBienvenidaInfo(element, info_bienvenida[0]);
    /*     for (const i of info_bienvenida) {
      console.log(i);
    } */
  });
}

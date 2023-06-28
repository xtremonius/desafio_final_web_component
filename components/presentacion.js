function getImgEl(item, assets) {
  const id = getImgId(item);
  const urlImg = assets.filter((asset) => {
    if (asset["fields"]["file"]["url"].includes(id)) {
      return asset;
    }
  });
  return urlImg;
}

function getImgId(item) {
  const imgId = item["fields"]["image"]["sys"]["id"];
  return imgId;
}

function addPresentacionInfo(element, params = {}) {
  console.log(
    "info que llega a addPresentacion por parametros: TITULO: ",
    params.title
  );
  console.log(
    "info que llega a addPresentacion por parametros: DESCRIPCION: ",
    params.descripcion
  );
  const componentE1 = document.createElement("div");
  componentE1.innerHTML = `
  <section class="home__seccion-dos">
      <div class="home__cont-titulo-parrafo">
        <h2 class="home__title-seccion-dos">${params.title}</h2>
        <p class="home__parrafo-seccion-dos">${params.descripcion}</p>
      </div>
      <div class="home__foto-dante">
        <img class="foto" src="${params.img}" alt="">
      </div>
  </section>
  `;

  element.appendChild(componentE1);
}

function getPresentacion() {
  return fetch(
    "https://cdn.contentful.com/spaces/ewkf9uy59du3/environments/master/entries?access_token=hiizLjDrFrGzLQBeOyrLi_Mir85fQnezXql7-zplpTw&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("Mostrando data getPresentacion");
      console.log(data);
      const assets = data["includes"]["Asset"];
      const fieldPresentacion = data.items.map((item) => {
        const imgValue = getImgEl(item, assets);
        console.log("Valor del objeto imgValue");
        console.log(imgValue);
        console.log("Valor de la url de imagen: ");
        console.log(imgValue[0].fields.file.url);
        return {
          title: item.fields.titulo,
          descripcion: item.fields.description.content[0].content[0].value,
          img: imgValue[0].fields.file.url,
        };
      });
      return fieldPresentacion;
    });
}

function prueba_visualizacion_por_consola() {
  console.log("Consultando a la api Presentacion:");
  const resultado = getPresentacion().then(function (e) {
    console.log("Mostrando el titulo de la presentacion: ");
    console.log(e[0].title);
    console.log("Mostrando la descripcion de la presentacion: ");
    console.log(e[0].descripcion);
  });
}

function componentPresentacion(element) {
  getPresentacion().then(function (info_presentacion) {
    addPresentacionInfo(element, info_presentacion[0]);
  });
}

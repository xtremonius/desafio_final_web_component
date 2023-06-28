function getImgId(item) {
  const imgId = item["fields"]["image"]["sys"]["id"];
  return imgId;
}

function getImgEl(item, assets) {
  const id = getImgId(item);
  const urlImg = assets.filter((asset) => {
    if (asset["fields"]["file"]["url"].includes(id)) {
      return asset;
    }
  });
  return urlImg;
}

function getBienvenida() {
  return fetch(
    "https://cdn.contentful.com/spaces/ewkf9uy59du3/environments/master/entries?access_token=hiizLjDrFrGzLQBeOyrLi_Mir85fQnezXql7-zplpTw&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("Mostrando data getBienvenida");
      console.log(data);
      const assets = data["includes"]["Asset"];
      const fieldBienvenida = data.items.map((item) => {
        const imgValue = getImgEl(item, assets);
        console.log("Valor del objeto imgValue");
        console.log(imgValue);
        console.log("Valor de la url de imagen: ");
        console.log(imgValue[0].fields.file.url);
        return {
          title: item.fields.title,
          name: item.fields.namePresentation,
          img: imgValue[0].fields.file.url,
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
            <img class="dante" src="${params.img}" /> 
        </div> 
    </section>
    `;
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

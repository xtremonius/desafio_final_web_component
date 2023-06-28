function addWeb(params = {}) {
  const templateCard = document.querySelector("#cards");
  const containerCard = document.querySelector(".home__container-madre");

  templateCard.content.querySelector(".home__card-title").textContent =
    params.title;
  templateCard.content.querySelector(".home__card-parrafo").textContent =
    params.description;
  templateCard.content.querySelector(".home__compu1").src = params.image;

  const clone = document.importNode(templateCard.content, true);
  containerCard.appendChild(clone);
}

function getImgIdCard(item) {
  const imgId = item["fields"]["imagen"]["sys"]["id"];
  return imgId;
}

function getImgEle(item, assets) {
  const id = getImgIdCard(item);
  const urlImg = assets.filter((asset) => {
    if (asset["fields"]["file"]["url"].includes(id)) {
      return asset;
    }
  });
  return urlImg;
}

function getWeb() {
  return fetch(
    "https://cdn.contentful.com/spaces/ewkf9uy59du3/environments/master/entries?access_token=hiizLjDrFrGzLQBeOyrLi_Mir85fQnezXql7-zplpTw&content_type=trabajos"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const assets = data["includes"]["Asset"];
      console.log(data);
      const fieldscollections = data.items.map((item) => {
        const imgValue = getImgEle(item, assets);
        return {
          title: item.fields.title,
          description: item.fields.description.content[0].content[0].value,
          image: imgValue[0].fields.file.url,
        };
      });
      return fieldscollections;
    });
}

function componentCard(element) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
        <secction class="home__seccion-tres">
            <h2 class="home__seccion-tres-title">
                <span class="mis__title">Mis</span>
                <span class="servicios__title">Trabajos</span>
            </h2>
            <div class="home__container-madre">
                <template id="cards">
                    <div class="home__cont-1">
                        <img
                            src=""
                            alt=""
                            class="home__compu1"
                        />
                        <h3 class="home__card-title"></h3>
                        <p class="home__card-parrafo"></p>
                        <a href="./index.html" class="home__card-link">Ver más</a>
                    
                    </div>
                </template>
            </div> 
        </secction>
    `;
  element.appendChild(componentEl);
  changeCardtoWeb();
}

function changeCardtoWeb() {
  getWeb().then(function (works) {
    var i = 0;
    for (const w of works) {
      i++;
      console.log("Mostando el " + i + " item de la card: ");
      console.log(w);
      addWeb(w);
    }
  });
}

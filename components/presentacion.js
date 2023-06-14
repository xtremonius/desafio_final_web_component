function addPresentacion() {}

function getPresentacion() {
  return fetch(
    "https://cdn.contentful.com/spaces/ewkf9uy59du3/environments/master/entries?access_token=hiizLjDrFrGzLQBeOyrLi_Mir85fQnezXql7-zplpTw&content_type=presentacion"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const fieldPresentacion = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          descripcion: item.fields.description.content[0].content[0].value,
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

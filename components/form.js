async function envioForm() {
  const formularioEl = document.querySelector(".home__cont-form");

  formularioEl.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombreForm = formularioEl.querySelector(".home__input-name").value;
    const mailForm = document.querySelector(".home__input-mail").value;
    const messageForm = document.querySelector(".home__textarea").value;

    const objData = {
      to: "alejandro.aquino1988@gmail.com",
      message: `Nombre: ${nombreForm}, Email: ${mailForm}, Mensaje: ${messageForm}`,
    };

    const url = "https://apx-api.vercel.app/api/utils/dwf";

    await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(objData),
    });
    formularioEl.reset();
  });
}
function componentForm(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = ` <section class="home__seccion-cuatro">
    <h3 class="home__seccion-cuatro-title">Escribime</h3>

  <form class="home__cont-form" action="">
    <div class="home__cont-name-y-email">
      <label class="home__label-name" for="">
        <div class="home__form-name">Nombre</div>
        <input
          class="home__input-name"
          type="text"
          placeholder="Tu nombre"
        />
      </label>

      <label for="">
        <div class="home__form-email" >Email</div>
        <input
          class="home__input-mail"
          type="text"
          placeholder="tu@mail.com"
        />
      </label>
    </div>
    <label for="">
      <div class="home__form-mensaje">Mensaje</div>
      <textarea class="home__textarea" name="" id="placeholder" placeholder="Mensaje"></textarea>
    
      </label>

    <div class="home__content-button">
      <button class="home__button">Enviar</button>
    </div>
  </form>
  </section>
  `;
  el.appendChild(componentEl);
  envioForm();
}

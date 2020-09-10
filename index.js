(function () {
  // Создаём контейнер и форму и поместим форму в контейнер

  const container = document.createElement("div"),
    form = document.createElement("form");
  container.innerHTML = "<div></div><div></div>";
  form.innerHTML = `<i class="far fa-hand-rock"></i><h3>форма</h3><label><input></label><label><input></label><label><input></label><button>отправить</button>`;

  // Присваиваем все необходимые данные для формы

  const inputs = form.querySelectorAll("input"),
    hand = form.querySelector("i"),
    placeholders = ["ИМЯ", "ЕМЕЙЛ", "ТЕЛЕФОН"],
    handleForm = (evt) => {
      evt.preventDefault();
    },
    flexboxes = container.querySelectorAll("div");

  // Добавляем стили

  container.style =
    "width: 510px; height: 250px; margin: 100px auto; display: flex; justify-content: space-between";
  form.style =
    "border: 1px solid orange; border-radius: 10px; padding-left: 10px; width: 200px; height: 210px; margin: 25px auto;";
  hand.style = "transform: translate(170px, 30px); cursor: pointer;";
  flexboxes.forEach((flex) => {
    flex.style =
      "width: 250px; height: 250px; border: 1px solid black; border-style: dashed;";
  });

  // Назначаем атрибуты полям ввода

  inputs.forEach((input, i) => {
    input.setAttribute("placeholder", placeholders[i]);
  });

  inputs.forEach((input) => {
    input.style.margin = "7px 0";
  });

  form.setAttribute("method", "post");

  form.setAttribute("action", "mailto:mihail@gnedko.com");

  form.onsubmit = handleForm;

  document.body.insertAdjacentElement("afterbegin", container);
  flexboxes[0].insertAdjacentElement("afterbegin", form);

  window.index = {
    container: container,
    form: form,
    hand: hand,
  };
})();

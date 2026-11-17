const form = document.querySelector("#form");
const message = document.querySelector("#msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value;

  message.textContent =
    `¡Gracias, ${name}! ${email} quedó registrado en esta demostración.`;

  form.reset();
});

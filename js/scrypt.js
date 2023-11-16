let changeBackgroundButton = document.querySelector(
  ".js-changeBackgroundButton"
);
let body = document.documentElement;
let nextColorName = document.querySelector(".js-nextColorName");

changeBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  nextColorName.innerText = body.classList.contains("body--dark")
    ? "Light"
    : "Dark";
});

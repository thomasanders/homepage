{
  const welcome = () => {
    console.log("May the force be with You");
  };

  const toggleBackground = () => {
    const body = document.documentElement;
    const nextColorName = document.querySelector(".js-nextColorName");

    body.classList.toggle("body--dark");
    nextColorName.innerText = body.classList.contains("body--dark")
      ? "Light"
      : "Dark";
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(
      ".js-changeBackgroundButton"
    );
    changeBackgroundButton.addEventListener("click", toggleBackground);

    welcome();
  };
  init();
}

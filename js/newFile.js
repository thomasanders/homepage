changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    nextColorName.innerText =
        body.classList.contains("body--dark")
            ? "light"
            : "dark";
});

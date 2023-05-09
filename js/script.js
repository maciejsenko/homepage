
let mainElement = document.querySelector(".main__button");
let photoElement = document.querySelector(".main__photo");
let buttonElement = document.querySelector(".body__button")
let blackStyling = document.querySelector(".js-blackStyling")
let body = document.querySelector(".body")
let themeName = document.querySelector(".body__themeName")

mainElement.addEventListener("click", () => {
    photoElement.remove()
    if (mainElement.innerText === "Hide");
    else (mainElement.innerText = "Thats better");

});

buttonElement.addEventListener("click", () => {
    body.classList.toggle("js-blackStyling")
    themeName.innerText = body.classList.contains("js-blackStyling") ? "Grey theme" : "Black theme";

});
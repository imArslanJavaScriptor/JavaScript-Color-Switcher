const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const heading = document.querySelector(".info");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.id === "coral") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "azure") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "teal") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "salmon") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "powderblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

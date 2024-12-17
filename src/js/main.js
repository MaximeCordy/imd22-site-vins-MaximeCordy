import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

var selectors = document.querySelectorAll(".language-selector");

selectors.forEach((selector) => {
  var button = selector.querySelector(".language-button");
  var menu = selector.querySelector(".language-menu");
  var links = menu.querySelectorAll("a");

  button.addEventListener("click", () => {
    menu.style.display = "block";
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      var language = link.textContent;
      button.textContent = language;
      menu.style.display = "none";
    });
  });
});

// Initialiser AOS après le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

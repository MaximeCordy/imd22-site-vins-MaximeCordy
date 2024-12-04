// erase the input
// $("#erase").click(function () {
//   $(this).prev().val("");
// });

// // preview and hide password
// $("#showPassword").click(function () {
//   var foo = $(this).prev().attr("type");
//   if (foo == "password") {
//     $(this).prev().attr("type", "text");
//   } else {
//     $(this).prev().attr("type", "password");
//   }
// });

// //show help
// $("#showHelp").click(function () {
//   $("#help").toggle();
// });

// function toggleMenu() {
//   const menu = document.getElementById("languageMenu");
//   menu.style.display = menu.style.display === "block" ? "none" : "block";
// }

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

// // Sélectionner une langue et la mémoriser
// function selectLanguage(language) {
//   localStorage.setItem("selectedLanguage", language);
//   updateButtonText(language);
//   const menu = document.getElementById("languageMenu");
//   menu.style.display = "none";
// }

// // Mettre à jour le texte du bouton
// function updateButtonText(language) {
//   const button = document.getElementById("selectedLanguage");
//   button.textContent = language;
// }

// // Ferme le menu si on clique ailleurs
// document.addEventListener("click", function (event) {
//   const menu = document.getElementById("languageMenu");
//   const button = document.querySelector(".language-button");

//   if (!menu.contains(event.target) && !button.contains(event.target)) {
//     menu.style.display = "none";
//   }
// });

// // Charger la langue sélectionnée au démarrage
// document.addEventListener("DOMContentLoaded", function () {
//   const savedLanguage = localStorage.getItem("selectedLanguage");
//   if (savedLanguage) {
//     updateButtonText(savedLanguage);
//   }
// });

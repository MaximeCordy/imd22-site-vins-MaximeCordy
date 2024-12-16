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

function toggleContent(index) {
  const containers = document.querySelectorAll(".container");
  const content = containers[index].querySelector(".content");
  const arrow = containers[index].querySelector(".arrow");

  if (content.style.maxHeight) {
    // Fermer le conteneur
    content.style.maxHeight = null;
    arrow.style.transform = "rotate(0deg)";
  } else {
    // Ouvrir le conteneur
    content.style.maxHeight = content.scrollHeight + "px";
    arrow.style.transform = "rotate(180deg)";
  }
}

// Initialiser AOS après le chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

$(document).ready(function () {
  $("body").addClass("js");
  var $menu = $("#menu"),
    $menulink = $(".menubtn"),
    $menuTrigger = $(".sousmenu > a");

  $menulink.click(function (e) {
    e.preventDefault();
    $menulink.toggleClass("select");
    $menu.toggleClass("select");
  });

  $menuTrigger.click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass("select").next("ul").toggleClass("select");
  });
});

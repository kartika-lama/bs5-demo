const themes = [
  "_default",
  "cerulean",
  "cosmo",
  "cyborg",
  "darkly",
  "flatly",
  "journal",
  "litera",
  "lumen",
  "lux",
  "materia",
  "minty",
  "morph",
  "pulse",
  "quartz",
  "sandstone",
  "simplex",
  "sketchy",
  "slate",
  "solar",
  "spacelab",
  "superhero",
  "united",
  "vapor",
  "yeti",
  "zephyr",
];

// <ul class="dropdown-menu" data-dyndrop="js">
//   <li><a class="dropdown-item" data-switch="cerulean" href="#">Cerulean</a></li>
//   <li><a class="dropdown-item" data-switch="cosmo" href="#">Cosmo</a></li>
//   ...
//   <li><a class="dropdown-item" data-switch="zephyr" href="#">Zephyr/a></li>
// </ul>

// get the ul element
var ulElement = document.querySelector("ul[data-dyndrop]");

// remove all children of the ul element
ulElement.innerHTML = "";

// create new children from the themes array
themes.forEach(function (theme) {
  var liElement = document.createElement("li");
  var aElement = document.createElement("a");
  aElement.className = "dropdown-item";
  aElement.dataset.switch = theme;
  aElement.href = "#";
  aElement.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
  liElement.appendChild(aElement);
  ulElement.appendChild(liElement);

  // add click event listener to each a[data-switch] element
  aElement.addEventListener("click", themeSwitch);
});

// themeSwitch function
function themeSwitch(event) {
  event.preventDefault();
  var theme = event.target.dataset.switch;
  var linkElement = document.querySelector('link[data-theme]');
  linkElement.href = 'bootswatch/' + theme + '/bootstrap.min.css';
  sessionStorage.setItem('theme', theme);
}

// check session storage on page load
window.addEventListener('load', function() {
  var theme = sessionStorage.getItem('theme');
  if (theme) {
    var linkElement = document.querySelector('link[data-theme]');
    linkElement.href = './bootswatch/' + theme + '/bootstrap.min.css';
  }
});

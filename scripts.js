// themeSwitch function
function themeSwitch(event) {
  event.preventDefault();
  let theme = event.target.dataset.switch;
  let linkElement = document.querySelector("link[data-theme]");
  linkElement.href = "bootswatch/" + theme + "/bootstrap.min.css";
  sessionStorage.setItem("theme", theme);
}

function bs_themes_li() {
  // prettier-ignore
  const themes = [ "default_", "cerulean", "cosmo", "cyborg", "darkly", "flatly", "journal", "litera", "lumen", "lux", "materia", "minty", "morph", "pulse", "quartz", "sandstone", "simplex", "sketchy", "slate", "solar", "spacelab", "superhero", "united", "vapor", "yeti", "zephyr", ];

  // get the ul element
  let ulElement = document.querySelector("ul[data-dyndrop]");

  // remove all children of the ul element
  ulElement.innerHTML = "";

  // create new children from the themes array
  themes.forEach(function (theme) {
    let liElement = document.createElement("li");
    let aElement = document.createElement("a");
    aElement.className = "dropdown-item";
    aElement.dataset.switch = theme;
    // aElement.href = "#";
    aElement.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);

    // add click event listener to each a[data-switch] element
    aElement.addEventListener("click", themeSwitch);
  });
}

function restore_theme() {
  // check session storage on page load
  const theme = sessionStorage.getItem("theme");
  if (theme) {
    let linkElement = document.querySelector("link[data-theme]");
    linkElement.href = "./bootswatch/" + theme + "/bootstrap.min.css";
  }
}

function nav_active() {
  // Get the current URL
  // const url = window.location.href;

  // Extract the page name from the URL
  // const pageName = url.substring(url.lastIndexOf("/") + 1);
  const pageName = window.location.href.split("/").slice(-1)[0];

  if (pageName != "") {
    // Select all 'a.nav-link' elements within 'li.nav-item' elements
    let navLinks = document.querySelectorAll("li.nav-item > a.nav-link");

    // Loop through all selected elements
    navLinks.forEach((navLink) => {
      // Check if the href attribute of the navLink contains the pageName
      if (navLink.getAttribute("href") && navLink.getAttribute("href").includes(pageName)) {
        // Add the 'active' class to the navLink
        navLink.classList.add("active");
      }
    });
  }
}

bs_themes_li();
restore_theme();
nav_active();

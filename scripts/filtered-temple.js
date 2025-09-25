// temples.js
function displayCopyright() {
  const currentYear = new Date().getFullYear();
  document.getElementById(
    "currentyear"
  ).textContent = `© ${currentYear} Patrick Medley, Jamaica`;
}

function displayLastModified() {
  const lastModified = document.lastModified;
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${lastModified}`;
}

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  displayCopyright();
  displayLastModified();
});

// Keep existing functions
function displayCopyright() {
  const currentYear = new Date().getFullYear();
  document.getElementById(
    "currentyear"
  ).textContent = `© ${currentYear} Patrick Medley, Jamaica`;
}

function displayLastModified() {
  const lastModified = document.lastModified;
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modified: ${lastModified}`;
}

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
}

// Add new functions for temple display and filtering
function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy"; // Add lazy loading
  img.width = "100%";
  img.height = "auto";

  const figcaption = document.createElement("figcaption");
  figcaption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
  `;

  figure.appendChild(img);
  figure.appendChild(figcaption);

  return figure;
}

function displayTemples(templeList) {
  const figuresContainer = document.querySelector(".figures");
  figuresContainer.innerHTML = ""; // Clear existing content

  templeList.forEach((temple) => {
    const templeCard = createTempleCard(temple);
    figuresContainer.appendChild(templeCard);
  });
}

function filterTemples(filter) {
  let filteredTemples;

  switch (filter) {
    case "old":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.yr);
        return year < 1900;
      });
      break;

    case "new":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.yr);
        return year > 2000;
      });
      break;

    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;

    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;

    default: // 'home' or any other case
      filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}

// Set up event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayCopyright();
  displayLastModified();

  // Display all temples initially
  displayTemples(temples);

  // Add click event listeners to navigation links
  const nav = document.querySelector("nav");
  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const filter = event.target.textContent.toLowerCase();
      filterTemples(filter);
    }
  });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    yr: 2005,
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    yr: 1888,
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    yr: 2015,
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    yr: 2020,
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    yr: 1974,
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    yr: 1986,
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    yr: 1983,
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  {
    templeName: "Belém Brazil Temple",
    location: "Belém, Para, Brazil",
    dedicated: "2022, November, 20",
    yr: 2022,
    area: 28675,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310.jpg",
  },

  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    yr: 1884,
    area: 119619,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-47238.jpg",
  },
  // Add more temple objects here...
];

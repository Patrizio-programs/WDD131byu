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

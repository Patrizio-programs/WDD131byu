function displayCopyright() {
  const t = new Date().getFullYear();
  document.getElementById(
    "currentyear"
  ).textContent = `© ${t} Patrick Medley, Jamaica`;
}
function displayLastModified() {
  const t = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${t}`;
}
function toggleMenu() {
  document.querySelector("nav").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", () => {
  displayCopyright(), displayLastModified();
});

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

document.addEventListener("DOMContentLoaded", () => {
  displayCopyright();
  displayLastModified();
});

// Add these static values at the top of place.js
const temperature = 32; // °F
const windSpeed = 15; // mph

// Add this new function
function calculateWindChill(temp, wind) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(wind, 0.16) +
    0.4275 * temp * Math.pow(wind, 0.16)
  );
}

// Modify the existing DOMContentLoaded event listener to include windchill calculation
document.addEventListener("DOMContentLoaded", () => {
  displayCopyright();
  displayLastModified();

  // Display temperature and wind speed
  document.querySelector(
    ".weather li:nth-child(1)"
  ).textContent = `Temperature: ${temperature}°F`;
  document.querySelector(
    ".weather li:nth-child(3)"
  ).textContent = `Wind: ${windSpeed} mph`;

  // Calculate and display windchill
  const windchill = calculateWindChill(temperature, windSpeed);
  document.querySelector(
    ".weather li:nth-child(4)"
  ).textContent = `WindChill: ${windchill.toFixed(1)}°F`;
});

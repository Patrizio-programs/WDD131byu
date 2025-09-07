
function displayCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = `© ${currentYear} Patrick Medley, Jamaica`;
}


function displayLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}


document.addEventListener('DOMContentLoaded', () => {
    displayCopyright();
    displayLastModified();
});
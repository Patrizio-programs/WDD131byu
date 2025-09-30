// Sample product array (you'll need to replace this with your actual product array)
const products = [
  "Product 1",
  "Product 2",
  "Product 3",
  // Add more products as needed
];

// Function to populate the select element with products
function populateProductSelect() {
  const selectElement = document.getElementById("product");

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    selectElement.appendChild(option);
  });
}

// Initialize the form when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  populateProductSelect();
});

// Product Array
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Select Options if on form.html
const productSelect = document.getElementById("productSelect");
if (productSelect) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Set current year for footer
const currentYearEl = document.getElementById("currentYear");
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

// Review counter for review.html page
document.addEventListener("DOMContentLoaded", () => {
  const reviewCounterEl = document.getElementById("reviewCounter");

  if (reviewCounterEl) {
    // Get current count from localStorage
    let count = localStorage.getItem("reviewCount");
    if (!count) count = 0;
    count = parseInt(count) + 1;

    // Store back in localStorage
    localStorage.setItem("reviewCount", count);

    // Display on page
    reviewCounterEl.textContent = count;
  }
});

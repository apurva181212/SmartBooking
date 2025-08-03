// Popup open and populate
document.querySelectorAll(".book-btn").forEach(button => {
  button.addEventListener("click", () => {
    const title = button.getAttribute("data-title");
    const price = button.getAttribute("data-price");
    const timing = button.getAttribute("data-timing");
    const location = button.getAttribute("data-location");

    // Set values inside popup
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-price").innerText = price;
    document.getElementById("popup-timing").innerText = timing;
    document.getElementById("popup-location").innerText = location;

    // Show popup
    document.getElementById("popup").style.display = "block";
  });
});

// Close popup
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

// Proceed to Pay button logic
document.querySelector(".popup .btn").addEventListener("click", () => {
  const title = document.getElementById("popup-title").innerText;
  const price = document.getElementById("popup-price").innerText.replace(/[₹\s]/g, '');
  const timing = document.getElementById("popup-timing").innerText;
  const location = document.getElementById("popup-location").innerText;

  const params = new URLSearchParams({
    title: title,
    amount: price,
    timing: timing,
    location: location
  });

  window.location.href = `payment.html?${params.toString()}`;
});

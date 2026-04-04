let reviewCount = localStorage.getItem("reviewCount");

if (reviewCount === null) {
  reviewCount = 1;
} else {
  reviewCount = Number(reviewCount) + 1;
}

localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = reviewCount;
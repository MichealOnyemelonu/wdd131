
document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;


  

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");


menuButton.addEventListener("click", () => {
  
  navMenu.classList.toggle("open");

  
  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✖"; 
  } else {
    menuButton.textContent = "☰"; 
  }
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];


// ===== Render temple cards =====
const templeContainer = document.getElementById("temples");

function getDedicatedYear(temple) {
  // "2005, August, 7" -> 2005
  return Number(temple.dedicated.split(",")[0]);
}

function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  const h2 = document.createElement("h2");
  h2.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

  const dedicated = document.createElement("p");
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = "lazy";            // ✅ native lazy loading
  img.width = 400;                 // optional but good for layout stability
  img.height = 250;                // optional but good for layout stability

  card.append(h2, location, dedicated, area, img);
  return card;
}

function displayTemples(list) {
  templeContainer.innerHTML = ""; // clear current cards
  list.forEach((temple) => {
    templeContainer.appendChild(createTempleCard(temple));
  });
}

// Show all on page load
displayTemples(temples);

// ===== Filtering logic for navigation =====
function applyFilter(filterName) {
  let filtered = temples;

  switch (filterName) {
    case "old":
      filtered = temples.filter(t => getDedicatedYear(t) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => getDedicatedYear(t) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    case "home":
    default:
      filtered = temples;
      break;
  }

  displayTemples(filtered);
}

// Attach events to nav links/buttons using data-filter
document.querySelectorAll("[data-filter]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    applyFilter(link.dataset.filter);

    // Optional: close menu after selection on mobile
    navMenu.classList.remove("open");
    menuButton.textContent = "☰";
  });
});


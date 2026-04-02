
document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;


  

const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");


menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰"

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

  
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Auckland New Zealand Temple",
    location:  "Auckland New Zealand",
    dedicated: "2025, April, 13",
    area: 45456,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-57803-thumb.jpg"
  },
  {
    templeName: "Albuquerque New Mexico Temple",
    location: "Albuquerque, New Mexico",
    dedicated: "2000, March, 05",
    area: 34245,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
  },
  {
    templeName: "Bangkok Thailand Temple",
    location: "Ratchathewi Bangkok",
    dedicated: "2023, October, 22",
    area: 34245,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  }
];


const templeContainer = document.getElementById("temples");
const pageTitle = document.getElementById("page-title");

function getDedicatedYear(temple) {
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
  img.loading = "lazy"; 

  card.append(h2, location, dedicated, area, img);
  return card;
}

function displayTemples(list) {
  templeContainer.innerHTML = "";
  list.forEach((temple) => templeContainer.appendChild(createTempleCard(temple)));
}


displayTemples(temples);


function applyFilter(filterName) {
  let filtered = temples;

  switch (filterName) {
    case "old":
      filtered = temples.filter((t) => getDedicatedYear(t) < 1900);
      pageTitle.textContent = "Old";
      break;
    case "new":
      filtered = temples.filter((t) => getDedicatedYear(t) > 2000);
      pageTitle.textContent = "New";
      break;
    case "large":
      filtered = temples.filter((t) => t.area > 90000);
      pageTitle.textContent = "Large";
      break;
    case "small":
      filtered = temples.filter((t) => t.area < 10000);
      pageTitle.textContent = "Small";
      break;
    case "home":
    default:
      filtered = temples;
      pageTitle.textContent = "Home";
      break;
  }

  displayTemples(filtered);
}


document.querySelectorAll("[data-filter]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    applyFilter(link.dataset.filter);

    
    document.querySelectorAll("#nav-menu a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");


    
    navMenu.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

// toggle class active for hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// when hamburger-menu clicked
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active for hamburger menu
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Click outside element
const hm = document.querySelector("#hamburger-menu"); // hm = hamburger
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
    // hamburger menu
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // search button
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

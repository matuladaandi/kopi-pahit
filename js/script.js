// toggle class active for hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// when hamburger-menu clicked
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active for shopping cart
const shoppingCard = document.querySelector(".shopping-cart");

// when shopping-cart-button clicked
document.querySelector("#shopping-cart-button").onclick = () =>
  shoppingCard.classList.toggle("active");

// when shopping-cart clicked
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
const sb = document.querySelector("#search-button"); // search button
const sc = document.querySelector("#shopping-cart-button"); // shopping cart

document.addEventListener("click", function (e) {
  // hamburger menu
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // search button
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // shopping-cart button
  if (!sc.contains(e.target) && !shoppingCard.contains(e.target)) {
    shoppingCard.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// click button close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// click outside modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

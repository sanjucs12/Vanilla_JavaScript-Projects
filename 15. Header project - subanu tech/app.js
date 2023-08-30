//classList - shows or gets all the classes
//contains - check classlists of specific class
//add - add class
//remove - remove class
//toggle - toggle class

// Selecting the elements
let dropdownLinks = document.querySelectorAll(".links .dropdown");
let links = document.querySelector(".links");
let toggleBtn = document.querySelector(".nav-toggle");



toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});




// Adding event listener for the navigation toggle button
toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// Adding event listeners for dropdowns
dropdownLinks.forEach(dropdownLink => {
  dropdownLink.addEventListener("mouseenter", () => {
    dropdownLink.querySelector(".dropdown-content").classList.add("show-dropdown");
  });

  dropdownLink.addEventListener("mouseleave", () => {
    dropdownLink.querySelector(".dropdown-content").classList.remove("show-dropdown");
  });
});

// ... Your existing JavaScript code ...



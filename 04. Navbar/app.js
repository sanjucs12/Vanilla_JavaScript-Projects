//classList - shows or gets all the classes
//contains - check classlists of specific class
//add - add class
//remove - remove class
//toggle - toggle class

let links = document.querySelector(".links");
let toggleBtn = document.querySelector(".nav-toggle");

toggleBtn.addEventListener("click", () => {
  //   console.log(links.classList);
  //   console.log(links.classList.contains("show-links"));
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  //   links.classList.contains("show-links")
  //     ? links.classList.remove("show-links")
  //     : links.classList.add("show-links");

  links.classList.toggle("show-links");
});

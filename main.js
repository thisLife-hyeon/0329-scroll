const btnHome = document.querySelector(".home");
const btnAbout = document.querySelector(".about");
const btnSkills = document.querySelector(".skills");
const btnWorks = document.querySelector(".works");
const btnContact = document.querySelector(".contact");
const arrowUp = document.querySelector(".arrow-up");

const sectionHome = document.querySelector("#home");
const sectionAbout = document.querySelector("#about");
const sectionSkills = document.querySelector("#skills");
const sectionWorks = document.querySelector("#works");
const sectionContact = document.querySelector("#contact");

btnHome.addEventListener("click", function () {
  sectionHome.scrollIntoView({ behavior: "smooth", block: "center" });
});

btnAbout.addEventListener("click", function () {
  sectionAbout.scrollIntoView({ behavior: "smooth", block: "center" });
});

btnSkills.addEventListener("click", function () {
  sectionSkills.scrollIntoView({ behavior: "smooth", block: "center" });
});

btnWorks.addEventListener("click", function () {
  sectionWorks.scrollIntoView({ behavior: "smooth", block: "center" });
});

btnContact.addEventListener("click", function () {
  sectionContact.scrollIntoView({ behavior: "smooth", block: "center" });
});

arrowUp.addEventListener("click", function () {
  sectionHome.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    arrowUp.classList.add("show");
  } else {
    arrowUp.classList.remove("show");
  }
});

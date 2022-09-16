document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
  navegacionLink();
  submit();
}
function scrollNav() {
  const enlaces = document.querySelector(".about-nav a");
  enlaces.addEventListener("click", function (e) {
    e.preventDefault();
    const seccionScroll = e.target.attributes.href.value;
    const seccion = document.querySelector(seccionScroll);
    seccion.scrollIntoView({ behavior: "smooth" });
  });
}
function navegacionLink() {
  const navegacion = document.querySelectorAll(".sidebar .menu a");
  navegacion.forEach((navegacion) =>
    navegacion.addEventListener("click", function (e) {
      e.preventDefault();
      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    })
  );
}
window.onscroll = function() {
  efectoSkills();
}
function efectoSkills() {
  const skills = document.getElementById("skill");
  const distancia = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia >=300) {
    document.getElementById("html").classList.add("Html")
    document.getElementById("css").classList.add("Css")
    document.getElementById("js").classList.add("JavaScript")
    document.getElementById("sass").classList.add("Sass")
    document.getElementById("react").classList.add("React")
    document.getElementById("english").classList.add("English")
    document.getElementById("spanish").classList.add("Spanish")
    document.getElementById("tailwindcss").classList.add("tailwindcss")
    document.getElementById("git").classList.add("git")
  }
}

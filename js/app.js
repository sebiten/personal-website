document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  scrollNav();
  navegacionLink();
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

const menu_Toggle = document.querySelector('.menu-toggle');
const sideBar = document.querySelector('.sidebar');

menu_Toggle.addEventListener('click', () => {
    menu_Toggle.classList.toggle('is-active');
    sideBar.classList.toggle('is-active');
});

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
  
});

function iniciarApp() {
    scrollNav();
  
}
function scrollNav() {
    const enlaces = document.querySelector('.about-nav a');
    enlaces.addEventListener('click', function(e){
        e.preventDefault();
        const seccionScroll = e.target.attributes.href.value;
        const seccion = document.querySelector(seccionScroll)
        seccion.scrollIntoView({behavior: 'smooth'});
    });
}
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:sebdevspace@gmail.com.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}

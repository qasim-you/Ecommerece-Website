function closeNavbar() {
  var navbarCollapse = document.querySelector('.navbar-collapse');
  var toggleButton = document.querySelector('.navbar-toggler');
  navbarCollapse.classList.remove('show');
  toggleButton.setAttribute('aria-expanded', 'false');
}
// hide navbar 
let navBar = document.querySelectorAll('.nav-link') ;
let navBarCollapse = document.querySelector('.nav-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener("click" , function () {
    navBarCollapse.classList.remove("show")
  })
  
})
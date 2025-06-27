const menuButton = document.querySelector('.menu');
const offcanvas = document.getElementById('offcanvasNavbar');

offcanvas.addEventListener('show.bs.offcanvas', () => {
  menuButton.style.visibility = 'hidden'; 
});

offcanvas.addEventListener('hidden.bs.offcanvas', () => {
  menuButton.style.visibility = 'visible'; 
});

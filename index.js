// Seleccionar el ícono de menú y la barra de navegación
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

// Añadir un evento para alternar la clase 'active'
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

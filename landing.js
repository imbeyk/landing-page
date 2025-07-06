const togglemenu = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul'); 

togglemenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});
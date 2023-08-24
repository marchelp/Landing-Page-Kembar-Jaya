// Dropdown pada navbar pada responsive design
const menuLink = document.querySelector('.menu-link');
const navList = document.querySelector('.nav-list');

menuLink.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Dropside pada aside untuk menampilkan socal media
const sideLink = document.querySelector('.side-icon');
const sideList = document.querySelector('.side-social');

sideLink.addEventListener('click', () => {
    sideList.classList.toggle('active');
});
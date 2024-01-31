const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    console.log('clicked');
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
}
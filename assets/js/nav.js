const menu = document.querySelector('.btn_menu');
const menu_icon = menu.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

menu.addEventListener('click', () => {
    menu_icon.innerText = menu_icon.innerText === 'menu'
        ? 'close'
        : 'menu';

    mobile_menu.classList.toggle('is-open');
})
const buttonOpenMenu = document.querySelector('#menu_side_open');
const buttonCloseMenu = document.querySelector('#menu_side_close');

const menuSide = document.querySelector('#menu_side');

buttonOpenMenu.addEventListener('click', () => {
    if (menuSide) {
        menuSide.classList.remove('disabled');
        menuSide.classList.add('active');
    }
});

buttonCloseMenu.addEventListener('click', () => {
    if (menuSide) {
        menuSide.classList.remove('active');
        menuSide.classList.add('disabled');
    }
});


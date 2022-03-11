//show a menu on phone

const buttonMenu = document.querySelector('.home');
const schowaneMenu = document.querySelector('#navigator');

buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('wysunMenu');
    schowaneMenu.classList.toggle('wysunMenu');
})
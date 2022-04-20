const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header-menu__list')

burgerBtn.addEventListener('click', () => {
	menu.classList.toggle('active')
	burgerBtn.classList.toggle('close')
})
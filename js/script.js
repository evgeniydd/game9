document.querySelectorAll('.header__burger').forEach((burgerBtn, index) => {
	const burger = document.querySelectorAll('.header__burger')[index];
	const menu = document.querySelectorAll('.header__menu')[index];

	burgerBtn.addEventListener('click', () => {
		burger.classList.toggle('header__burger--active');
		menu.classList.toggle('header__menu--active');
	});
});

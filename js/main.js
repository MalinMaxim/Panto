const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation();
		//hide all hint
		for (let hint of infoHints) {
			hint.classList.add('none');
		}

		//show current hint
		this.parentNode.querySelector('.info-hint').classList.toggle('none');
	});
}


document.addEventListener('click', function () {
	for (let hint of infoHints) {
		hint.classList.add('none');
	}
});


for (let hint of infoHints) {
	hint.addEventListener('click', (e) => e.stopPropagation());
}


const swiper = new Swiper('.swiper', {
//loop: true,
//freeMode: true,

	slidesPerView: 1,
	spaceBetween: 42,

		breakpoints: {
			600: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			920: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		1230: {
				slidesPerView: 4,
				spaceBetween: 42,
			},
		},

  // Navigation arrows
  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },

});


//tabs
const tabsBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');
for (let btn of tabsBtns) {

btn.addEventListener('click', function () {

	//убираем активыне классы у всех кнопок 
			for (let btn of tabsBtns) {
				btn.classList.remove('tab-controls__btn--active')
			}

	//добовляем активный класс к текущей кнопки 
			this.classList.add('tab-controls__btn--active');

	//скрыть все товары и оторазить нужные
			for (let product of tabsProducts) {
				//проверка на оторожение всех слайдов
				if (this.dataset.tab === 'all') {
					product.classList.remove('none');
				} else {
					if (product.dataset.tabValue === this.dataset.tab) {
						product.classList.remove('none');
					} else {
						product.classList.add('none');
					}
				}



			}

	//обновлем свайпер
			swiper.update()
		})
	}

	//mobile Nav
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function (){
	mobileNav.classList.remove('mobile-nav-wrapper--open');
};












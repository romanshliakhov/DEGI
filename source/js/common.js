// burger
let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

// sliders
let nftsSliderTop = new Swiper('.nfts__top-slider', {
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  loopedSlides: 8000,
  slidesPerGroup: 1,
  loopPreventsSlide: false,
  loop: true,
  speed: 10000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true
  }
});

let nftsSliderBot = new Swiper('.nfts__bot-slider', {
  centeredSlides: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  loopedSlides: 8000,
  slidesPerGroup: 1,
  loopPreventsSlide: false,
  loop: true,
  speed: 9000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false,
  }
});

let mintSlider = new Swiper('.content__minted-slider', {
  slidesPerView: 2,
  slidesPerColumn: 2,
  slidesPerGroup: 4,
  autoHeight: false,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".content__arrow-next",
    prevEl: ".content__arrow-prev",
  },
    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 4,
        autoHeight: false,
      },
      320: {
        slidesPerView: 1,
        slidesPerColumn: 2,
        slidesPerGroup: 1,
        autoHeight: false,
      }
    }
});

let airdropSlider = new Swiper('.content__slider', {
  slidesPerView: '1',
  loop: true,
  autoplay: {
    delay: 4000
  },
});

let modalSliderLess = new Swiper('.modal__less-slider', {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".content__arrow-next",
    prevEl: ".content__arrow-prev",
  },
});

let modalSliderOver = new Swiper('.modal__over-slider', {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  slidesPerView: 2,
  slidesPerColumn: 2,
  slidesPerGroup: 4,
  autoHeight: false,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".content__arrow-next",
    prevEl: ".content__arrow-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 4,
      autoHeight: false,
    },
    320: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      slidesPerGroup: 1,
      autoHeight: false,
    }
  }
});


// wallet tabs
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.wallet__tabs');
	const tabsBtn = document.querySelectorAll('.wallet__tabs-btn');
	const tabsContent = document.querySelectorAll('.wallet__tabs-content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('wallet__tabs-btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('wallet__tabs-btn--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('wallet__tabs-btn--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('wallet__tabs-content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('wallet__tabs-content--active');
	};
});

// facts tabs
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.facts__tabs');
	const tabsBtn = document.querySelectorAll('.facts__tabs-btn');
	const tabsContent = document.querySelectorAll('.facts__tabs-content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('facts__tabs-btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('facts__tabs-btn--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('facts__tabs-btn--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('facts__tabs-content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('facts__tabs-content--active');
	};
});

// content tabs
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.content__tabs');
	const tabsBtn = document.querySelectorAll('.content__tabs-btn');
	const tabsContent = document.querySelectorAll('.content__tabs-content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('content__tabs-btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('content__tabs-btn--active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('content__tabs-btn--active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('content__tabs-content--active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('content__tabs-content--active');
	};
});


// dropdown
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  dropDownBtn.addEventListener('click', function (e) {
    console.log("click :>> ", "dropDownBtn");
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      console.log("click :>> ", "dropDownListItem");
      e.stopPropagation();
      dropDownBtn.innerHTML = this.innerHTML;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      this.classList.remove('dropdown__button--active');
    });
  });

  document.addEventListener('click', function (e) {
    console.log("click :>> ", dropDownBtn.contains(e.target));
    if (!dropDownBtn.contains(e.target)) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});

// SPOLLERS
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
	// Получение обычных слойлеров
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
		return !item.dataset.spollers.split(",")[0];
	});
	// Инициализация обычных слойлеров
	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	// Инициализация
	function initSpollers(spollersArray, matchMedia = false) {
		spollersArray.forEach(spollersBlock => {
			spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
			if (matchMedia.matches || !matchMedia) {
				spollersBlock.classList.add('_init');
				initSpollerBody(spollersBlock);
				spollersBlock.addEventListener("click", setSpollerAction);
			} else {
				spollersBlock.classList.remove('_init');
				initSpollerBody(spollersBlock, false);
				spollersBlock.removeEventListener("click", setSpollerAction);
			}
		});
	}

	// Работа с контентом
	function initSpollerBody(spollersBlock, hideSpollerBody = true) {
		const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
		if (spollerTitles.length > 0) {
			spollerTitles.forEach(spollerTitle => {
				if (hideSpollerBody) {
					spollerTitle.removeAttribute('tabindex');
					if (!spollerTitle.classList.contains('_active')) {
						spollerTitle.nextElementSibling.hidden = true;
					}
				} else {
					spollerTitle.setAttribute('tabindex', '-1');
					spollerTitle.nextElementSibling.hidden = false;
				}
			});
		}
	}
	function setSpollerAction(e) {
		const el = e.target;
		if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
			const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
			const spollersBlock = spollerTitle.closest('[data-spollers]');
			const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
			if (!spollersBlock.querySelectorAll('._slide').length) {
				if (oneSpoller && !spollerTitle.classList.contains('_active')) {
					hideSpollersBody(spollersBlock);
				}
				spollerTitle.classList.toggle('_active');
				_slideToggle(spollerTitle.nextElementSibling, 500);
			}
			e.preventDefault();
		}
	}
	function hideSpollersBody(spollersBlock) {
		const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
		if (spollerActiveTitle) {
			spollerActiveTitle.classList.remove('_active');
			_slideUp(spollerActiveTitle.nextElementSibling, 500);
		}
	}
}
//========================================================================================================================================================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
};

let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
};

let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
};


// modals
class Modal {
  constructor (options) {
      let defaultOptions = {
          onOpen: () => {},
          onClose: () => {},
      };
      this.options = Object.assign(defaultOptions, options);
      this.modal = document.querySelector('.modal');
      this.speed = false;
      this.animation = false;
      this.isOpen = false;
      this.modalContainer = false;
      this.previousActiveElement = false;
      this.fixBlocks = document.querySelectorAll('.fix-block');
      this.focusElements = [
          'a[href]',
          'input',
          'button',
          'select',
          'textarea',
          '[tabindex]'
      ];
      this.events();
  }

  events() {
      if (this.modal) {
          document.addEventListener('click', function (e) {
              const clickedElement = e.target.closest('[data-path]');
              if (clickedElement) {
                  if (this.isOpen) {
                    this.close();
                  }
                  let target = clickedElement.dataset.path;
                  let animation = clickedElement.dataset.animation;
                  let speed = clickedElement.dataset.speed;
                  this.animation = animation ? animation : 'fade';
                  this.speed = speed ? parseInt(speed) : 300;
                  this.modalContainer = document.querySelector(`[data-target="${target}"]`);
                  this.open();
                  return;
              }

              if (e.target.closest('.modal-close')) {
                  this.close();
                  return;
              }
          }.bind(this));

          window.addEventListener('keydown', function (e) {
              if (e.keyCode == 27) {
                  if (this.isOpen) {
                      this.close();
                  }
              }
          }.bind(this));

          this.modal.addEventListener('click', function (e) {
              if (!e.target.classList.contains('.modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
              this.close();
              }
          }.bind(this));
      }
  }

  open() {
      this.previousActiveElement = document.activeElement;

      this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
      this.modal.classList.add('is-open');
      this.disableScroll();

      this.modalContainer.classList.add('modal-open');
      this.modalContainer.classList.add(this.animation);

      setTimeout(() => {
          this.modalContainer.classList.add('animate-open');
          this.options.onOpen(this);
          this.isOpen = true;
      }, this.speed);
  }

  close() {
      if (this.modalContainer) {
          this.modalContainer.classList.remove('animate-open');
          this.modalContainer.classList.remove(this.animation);
          this.modal.classList.remove('is-open');
          this.modalContainer.classList.remove('modal-open');

          this.enableScroll();
          this.options.onClose(this);
          this.isOpen = false;
      }
  }

  focusCatch(e) {
      const focusable = this.modalContainer.querySelectorAll(this.focusElements);
      const focusArray = Array.prototype.slice.call(focusable);
      const focusedIndex = focusArray.indexOf(document.activeElement);

      if (e.shiftKey && focusedIndex === 0) {
        focusArray[focusArray.length - 1].focus();
        e.preventDefault();
      }

      if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
        focusArray[0].focus();
        e.preventDefault();
      }
  }

  focusTrap() {
      const focusable = this.modalContainer.querySelectorAll(this.focusElements);
      if (this.isOpen) {
          focusable[0].focus();
      } else {
      }
  }

  disableScroll() {
      let pagePosition = window.scrollY;
      this.lockPadding();
      document.body.classList.add('disable-scroll');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      this.unlockPadding();
      document.body.style.top = 'auto';
      document.body.classList.remove('disable-scroll');
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach((el) => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding () {
    this.fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }
}

const modal = new Modal({
  onOpen: (modal) => {

  },
  onClose: () => {

  },
});


// timer
document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('mar 01 2022 00:00:00'); // пишем тут дату

	const daysVal = document.querySelector('.timer__count-days .timer__count-val');
	const hoursVal = document.querySelector('.timer__count-hours .timer__count-val');
	const minutesVal = document.querySelector('.timer__count-minutes .timer__count-val');

	const timeCount = () => {
		let now = new Date();
		let leftUntil = newYear - now;

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

    if (leftUntil < 0 ) {
      days = 0;
      hours = 0;
      minutes = 0;
    } else {
      daysVal.textContent = (days);
      hoursVal.textContent = ('0' + hours).slice(-2);
      minutesVal.textContent = ('0' + minutes).slice(-2);
    }
	};

	timeCount();
	setInterval(timeCount, 1000);
});


// menu dropdown
(function () {
  'use strict';

  // Прослушиваем событие CLICK
  document.addEventListener('click', EasyTogglerHandler);

  /**
   * Основная функция-обработчик EasyToggler.
   */
  function EasyTogglerHandler(event) {

    // Задаём основную кнопку EasyToggler
    const EY_BTN = event.target.closest('[data-easy-toggle]');

    /**
     * Проверка нажатия на основную кнопку EasyToggle и
     * проверка на нажатие вне его кнопок
     */

    if (EY_BTN) {
      event.preventDefault();
      let ey_target = EY_BTN.getAttribute('data-easy-toggle');
      let ey_class = EY_BTN.getAttribute('data-easy-class');

      try {
        document.querySelectorAll('[data-easy-toggle]').forEach(easyBlock => {
          if (!easyBlock.hasAttribute('data-easy-parallel') && easyBlock !== EY_BTN) {
            document.querySelector(easyBlock.getAttribute('data-easy-toggle')).classList.remove(easyBlock.getAttribute('data-easy-class'));
          }
        });

        document.querySelector(ey_target).classList.toggle(ey_class);
      } catch (ey_error) {
        console.warn('EasyToggler.js : Блок ' + ey_target + ' не существует');
      }
    }

    if (!EY_BTN) {
      // Получаем массив из кнопок с атрибутом [data-easy-rcoe]
      let ey_rcoe_block_targets = document.querySelectorAll('[data-easy-rcoe]');

      /**
       * Вешаем событие на каждую кнопку, у которой указан
       * атрибут [data-easy-rcoe], чтобы удалять заданный класс
       */
      Array.from(ey_rcoe_block_targets).forEach.call(ey_rcoe_block_targets, function (ey_rcoe_block_target) {
        let ey_rcoe_block = ey_rcoe_block_target.getAttribute('data-easy-toggle'), // Получаем нацеленный блок
          ey_rcoe_block_class = ey_rcoe_block_target.getAttribute('data-easy-class'); // Удаляем заданный класс

        /* Если нажимаем не на активный блок, то удаляем заданный класс */
        if (!event.target.closest(ey_rcoe_block)) {
          try {
            document.querySelector(ey_rcoe_block).classList.remove(ey_rcoe_block_class);
          } catch (ey_error) {
            console.warn('EasyToggler.js : Блок ' + ey_rcoe_block + ' не существует');
          }
        }
      });
    }
  }
})();

// counter

const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    });
  });
};

counter();


// scroll to top
function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('scroll__top--show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('scroll__top--show');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -100);
    setTimeout(backToTop, 0);
  }
}

let goTopBtn = document.querySelector('.scroll__top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);


// select
let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

select();


// range-slider
const rangeInput = document.querySelectorAll('.filters-range__input'),
      progress = document.querySelector(".filters-price__progress");

let priceGap = 1;

rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minValue = parseInt(rangeInput[0].value),
        maxValue = parseInt(rangeInput[1].value);

    if( maxValue - minValue < priceGap) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = maxValue - priceGap;
      } else {
        rangeInput[1].value = minValue + priceGap;
      }
    } else {
      progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
    }
  });
});




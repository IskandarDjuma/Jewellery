import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

(function () {

  const navMain = document.querySelector('.page-header');
  const navToggle = document.querySelector('.page-header__toggle');

  if (navMain) {
    navMain.classList.remove('page-header--nojs');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('page-header--closed')) {
        navMain.classList.remove('page-header--closed');
        navMain.classList.add('page-header--opened');
      } else {
        navMain.classList.add('page-header--closed');
        navMain.classList.remove('page-header--opened');
      }
    });
  }

  // Swiper

  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span>of
                <span class="${totalClass}"></span>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
      },
    },
  });
})();


/* Swiper catalog */

(function () {
  /* eslint-disable no-unused-consts */
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
      el: '.pagination',
      clickable: true,
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span>of
                <span class="${totalClass}"></span>`;
      },
    },
    navigation: {
      nextEl: '.products__button--next',
      prevEl: '.products__button--prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.products__pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.products__pagination',
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      },
    },
  });

  const accordions = document.querySelector('.accordion');
  const accordionButtons = document.querySelectorAll('.accordion__button');
  const accordionsNojs = document.querySelector('.accordion--nojs');

  if (accordionsNojs) {
    accordionsNojs.classList.remove('accordion--nojs');
    };


  if (accordionButtons) {
    accordionButtons.forEach(function (item) {
      item.addEventListener('click', function (evt) {
        const parent = item.parentNode;
        const activeButton = document.querySelector('.accordion__button--active');
        const button = evt.target;


        button.classList.add('accordion__button--active');

        if (parent.classList.contains('accordion--active')) {
          parent.classList.remove('accordion--active');
          button.classList.remove('accordion__button--active');
        } else {
          for (const j = 0; j < accordions.length; j++) {
            accordions[j].classList.remove('accordion--active');
          }
          parent.classList.add('accordion--active');
        }
      });
    });
  }

})();

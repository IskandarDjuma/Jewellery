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

  // accordion

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


        if (activeButton) {
          activeButton.classList.remove('accordion__button--active');
        }
        button.classList.toggle('accordion__button--active');

        if (parent.classList.contains('accordion--active')) {
          parent.classList.remove('accordion--active');
          button.classList.remove('accordion__button--active');
        } else {
          for (let j = 0; j < accordions.length; j++) {
            accordions[j].classList.remove('accordion--active');
          }
          parent.classList.add('accordion--active');
        }
      });
    });
  }

  // filter Button

  const filters = document.querySelector('.filters');
  const filterToggle = document.querySelector('.filters__toggler');

  if (filters) {
    filters.classList.remove('filters--nojs');
  }

  if (filterToggle) {
    filterToggle.addEventListener('click', function () {
      if (filters.classList.contains('filters--closed')) {
        filters.classList.remove('filters--closed');
        filters.classList.add('filters--opened');
      } else {
        filters.classList.add('filters--closed');
        filters.classList.remove('filters--opened');
      }
    });
  }

  // Slider Goods

  const photos = [
    'img/large/gold-necklace-large.jpg',
    'img/large/pretty-gold-large.jpg',
    'img/large/womens-necklace-large.jpg'
  ];

  const thumbnails = document.querySelectorAll('.goods__photo-preview');
  const fullPhoto = document.querySelector('.goods__review-full');

  const addThumbnailClickHandler = function (thumbnail, photo) {
    thumbnail.addEventListener('click', function () {
      fullPhoto.src = photo;
    });
  };

  for (var i = 0; i < thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i], photos[i]);
  }


  // Modal

  var modalLink = document.querySelector('.user-menu__button');
  var feedbackPopup = document.querySelector('.modal-login');
  var modalClose = document.querySelector('.modal__close');
  var userName = document.querySelector('input[data-login-input]');
  var modalForm = document.querySelector('.modal__form');
  var userPassword = document.querySelector('input[data-pas-input]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  if (modalLink) {
    modalLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      feedbackPopup.classList.add('modal__show');

      if (storage) {
        userName.value = storage;
        userPassword.focus();
      } else {
        userName.focus();
      }
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', function (evt) {
      evt.preventDefault();
      feedbackPopup.classList.remove('modal__show');
      feedbackPopup.classList.remove('modal__error');
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', function (evt) {
      if (!userName.value || !userPhone.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove('modal__error');
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add('modal__error');
      } else {
        if (isStorageSupport) {
          localStorage.setItem('login', userName.value);
        }
      }
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      if (feedbackPopup.classList.contains('modal__show')) {
        evt.preventDefault();
        feedbackPopup.classList.remove('modal__show');
        feedbackPopup.classList.remove('modal__error');
      }
    }
  });

  // Modal cart

  const cartLink = document.querySelector(".goods-info__btn");
  const popupCart = document.querySelector(".modal-cart");
  const cartClose = document.querySelector(".modal__close");

  if (cartLink) {
    cartLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupCart.classList.add("modal__show");
    });
  }

  if (cartClose) {
    cartClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupCart.classList.remove("modal__show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupCart.classList.contains("modal__show")) {
        evt.preventDefault();
        popupCart.classList.remove("modal__show");
      }
    }
  });

})();

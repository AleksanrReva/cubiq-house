
const sections = document.querySelectorAll('.content');
const sectionsArr = Array.prototype.slice.call(sections, 0);

// Открытие меню
const popUpMenuBtn = document.querySelector('.header__top');
const popUpMenuClose = document.querySelector('.popup-nav__btn-close');
const popUpNav = document.querySelector('.info__pop-up-menu');

// Кастомизация плейсхолдеров
const sendForm = document.querySelector('.send-form');
const input = sendForm.getElementsByClassName('send-form__input');
const inputsArr = Array.prototype.slice.call(input, 0);
const placeholder = sendForm.getElementsByClassName('send-form__placeholder')
const spanArr = Array.prototype.slice.call(placeholder, 0);

// Форма Отправить заявку
const formBtnClose = sendForm.querySelector('.form-btn-close');

formBtnClose.addEventListener('click', () => 
  sendForm.classList.add('off')
);

sectionsArr.forEach(function(section, index, sections) {

  section.addEventListener('click', function(event) {
    
    // Переключение вкладок
    if (event.target.className.includes('radio-btn_hidden')
      ||event.target.className.includes('frame-select__box')) {
      
      const tabs = section.querySelectorAll('.content__box');

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('off');
      };

      section.querySelector(`.${event.target.value}`).classList.remove('off');
    };

    // Поправка стилей для текста рядом со лайдером
    if (event.target.value === 'character' || event.target.value === 'equipment') {
      section.previousElementSibling.querySelector(`.сolumn__price`).classList.remove('balancer');
    } else {
      section.previousElementSibling.querySelector(`.сolumn__price`).classList.add('balancer');
    };

    // Переключение видов
    if (event.target.className.includes('radio-btn-subnav')
      ||event.target.className.includes('view-select__box')) {
      
      const tabs = section.querySelectorAll('.ant-carousel');

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('off');
      };

      section.querySelector(`.${event.target.value}`).classList.remove('off');
    };

    // Вызов формы Заказать
    if (event.target.className.includes('header-form__btn')) {
      sendForm.classList.remove('off');
    }
  });
});

// Кастомизация плейсхолдеров
inputsArr.forEach(function(currentInput, index) {
  if (index !== inputsArr.length - 1) {
    currentInput.addEventListener('focus', function(event) {
      placeholder[index].classList.add('send-form__placeholder_focus');
    }); 
  }; 
});

spanArr.forEach(function(currentSpan, index) {

  currentSpan.addEventListener('click', function(event) {
    currentSpan.classList.add('send-form__placeholder_focus');
    input[index].focus();
  });  
});

inputsArr.forEach(function(currentInput, index) {

  currentInput.addEventListener('blur', function(event) {
    if (index !== inputsArr.length - 1) {
      if (!currentInput.value) {
        placeholder[index].classList.remove('send-form__placeholder_focus');
      };
    };
  });  
});

// Открытие меню
function menuBtnClick(event) {
  if (event.target.className.includes('pop-up-open')
   || event.target.className.includes('pop-up-close')) {
    popUpNav.classList.toggle('off');
  };
};

popUpMenuBtn.addEventListener('click', menuBtnClick);

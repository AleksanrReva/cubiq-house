const sections = document.querySelectorAll('.content');
const sectionsArr = Array.prototype.slice.call(sections, 0);

sectionsArr.forEach(function(section, index, sections) {

  section.addEventListener('click', function(event) {

    if (event.target.className.includes('radio-btn_hidden')) {
      
      const tabs = section.querySelectorAll('.content__box');

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('off');
      };

      section.querySelector(`.${event.target.value}`).classList.remove('off');
    };

    if (event.target.className.includes('radio-btn-subnav')) {
      
      const tabs = section.querySelectorAll('.ant-carousel');

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('off');
      };

      section.querySelector(`.${event.target.value}`).classList.remove('off');
    };
  });
});
const navRow = document.querySelector('.frame-nav');
const radioBtns = document.querySelectorAll('.frame-nav__radio-btn');
const tabs = document.querySelectorAll('.content__box');

function switchingTabs(event) {
  if (event.target.tagName === 'INPUT') {
    for (let i = 0; i < radioBtns.length; i++) {
      if (radioBtns[i].checked) {
        tabs[i].classList.toggle('off');
        console.log([tabs[i].parentNode.children].filter(n => n !== tabs[i]))
      }
      // console.log("temp");
    }
  //   radioBtns.forEach(function(radio) {
  //     if (radio.checked) {
  //       console.log(radio.value);
  //     }
  //   });
    // console.log('Yes');
  }
  // console.log(event.target.tagName);
  // radioBtns.forEach(function(radio) {
  //   console.log(radio.value);
  // });
};

navRow.addEventListener('click', switchingTabs);
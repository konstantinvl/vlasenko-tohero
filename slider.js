const slider = document.querySelector('.hobbies__slider');
const sliderField = document.querySelector('.hobbies__slider__main');
const sliderWrapper = document.querySelector('.hobbies__slider__wrapper');
const leftBtn = document.querySelector('.hobbies__slider__control__left');
const rightBtn = document.querySelector('.hobbies__slider__control__right');

let sliderCounter = 1;
let sliderWidth = sliderWrapper.clientWidth;
const sliderLength = sliderField.children.length;

Element.prototype.translateX = function (range) {
  this.style.transform = `translateX(${range}px)`;
};
Element.prototype.setTransition = function (time) {
  this.style.transition = `${time}s`;
};

sliderField.translateX(-sliderWidth * sliderCounter);
onresize = () => {
  sliderWidth = sliderWrapper.clientWidth;
  sliderField.translateX(-sliderWidth * sliderCounter);
};

function moveSlider(target) {
  if (target.id === 'left') {
    sliderCounter--;
  } else {
    sliderCounter++;
  }

  sliderWidth = sliderWrapper.clientWidth;
  sliderField.setTransition(0.5);
  sliderField.translateX(-sliderWidth * sliderCounter);
}

function cicleSlider() {
  if (sliderCounter === 0) {
    sliderCounter = sliderLength - 2;
    sliderField.setTransition(0);
    sliderField.translateX(-sliderWidth * sliderCounter);
  } else if (sliderCounter === sliderLength - 1) {
    sliderCounter = 1;
    sliderField.setTransition(0);
    sliderField.translateX(-sliderWidth * sliderCounter);
  }
}

slider.addEventListener('click', (ev) => moveSlider(ev.target));
slider.addEventListener('mousedown', cicleSlider);

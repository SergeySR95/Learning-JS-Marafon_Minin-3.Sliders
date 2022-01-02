const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");

let activeSlideIndex = 0;

const container = document.querySelector(".container");

// Выравниваем картинки:
const mainSlide = document.querySelector(".main-slide");
// Считаем сколько дивов внутри селектора .main-slide:
const slidesCount = mainSlide.querySelectorAll("div").length;
// Высчитываем по формуле стиль top для меняющегося количества картинок:
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

// Возвращаемся к кнопкам:
upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  // Анимация картинок и сайт-бара:
  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

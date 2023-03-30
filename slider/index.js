const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
}

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
}

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : getFirstSlide();
  changeColor();
});

left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor();
})

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "rgb(33 33 33)";

const resetBg = () => {
  buttons.forEach(button => {
    button.style.backgroundColor = "transparent";
  })
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBg();
    button.style.backgroundColor = "rgb(33 33 33)";
    slideNumber = index + 1;
    slider.style.transform = `translateX(-${index * 800}px)`;
  })
})

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "rgb(33 33 33)";
};
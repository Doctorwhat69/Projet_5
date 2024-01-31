const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let arrow_left = document.querySelector(".arrow_left");
let arrow_right = document.querySelector(".arrow_right");
let dots = document.querySelectorAll(".dot");
let i = 0;

/**  fonction changement de texte
 */
let bannerP = document.querySelector("#banner p");

function next_text_banner() {
  let newText;
  if (i < slides.length - 1) {
    newText = slides[i + 1].tagLine;
  } else {
    newText = slides[0].tagLine;
  }
  bannerP.innerHTML = newText;
}

function previous_text_banner() {
  if (i > 0) {
    newText = slides[i - 1].tagLine;
  } else {
    newText = slides[3].tagLine;
  }
  bannerP.innerHTML = newText;
}

/**  fonctions changmeent de class
 *
 */
function next_class_dot() {
  dots[i].classList.remove("dot_selected");

  if (i < slides.length - 1) {
    dots[i + 1].classList.add("dot_selected");
  } else {
    dots[0].classList.add("dot_selected");
  }
}

function previous_class_dot() {
  if (i > 0) {
    dots[i].classList.remove("dot_selected");
    dots[i - 1].classList.add("dot_selected");
  } else {
    dots[0].classList.remove("dot_selected");
    dots[3].classList.add("dot_selected");
  }
}

/**  fonction changement d'image
 */
let banner_img = document.querySelector(".banner-img");

function next_image_banner() {
  let newImg;
  if (i < slides.length - 1) {
    newImg = slides[i + 1].image;
  } else {
    newImg = slides[0].image;
  }
  banner_img.src = newImg;
}

function previous_image_banner() {
  if (i > 0) {
    newImg = slides[i - 1].image;
  } else {
    newImg = slides[3].image;
  }
  banner_img.src = newImg;
}
/** écoute la fleche droite
 */
arrow_right.addEventListener("click", () => {
  next_class_dot();
  next_image_banner();
  next_text_banner();
  i = (i + 1) % slides.length;
});

arrow_left.addEventListener("click", () => {
  previous_class_dot();
  previous_image_banner();
  previous_text_banner();
  i = (i - 1 + slides.length) % slides.length;
});

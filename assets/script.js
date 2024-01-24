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
console.log("la valeur de i est" + i);

/**  fonction changement de texte
 */
let bannerP = document.querySelector("#banner p");

function next_text_banner() {
  if (i < slides.length - 1) {
    let newText = slides[i + 1].tagLine;
    bannerP.innerHTML = newText;
  } else {
    newText = slides[0].tagLine;
  }
}
function previous_text_banner() {
  let newText = slides[i - 1].tagLine;
  bannerP.innerHTML = newText;
}

/**  fonctions changmeent de class
 *
 */
function next_class_dot() {
  dots[i].classList.remove("dot_selected");
  console.log("Classe 'dot_selected' retirée de l'élément", i);

  if (i < slides.length - 1) {
    dots[i + 1].classList.add("dot_selected");
    console.log("Classe 'dot_selected' ajoutée à l'élément", i + 1);
  } else {
    dots[0].classList.add("dot_selected");
    console.log("Classe 'dot_selected' ajoutée à l'élément 0");
    i = -1;
  }
}

function previous_class_dot() {
  if (i > 0) {
    dots[i].classList.remove("dot_selected");
    console.log("Classe 'dot_selected' retirée de l'élément", i);
    dots[i - 1].classList.add("dot_selected");
    console.log("Classe 'dot_selected' ajoutée à l'élément", i - 1);
  } else {
    i = 3;
    dots[0].classList.remove("dot_selected");
    dots[3].classList.add("dot_selected");
    i++;
  }
}

/**  fonction changement d'image
 */
let banner_img = document.querySelector(".banner-img");
function next_image_banner() {
  if (i < slides.length - 1) {
    let newImg = slides[i + 1].image;
    banner_img.src = newImg;
  } else {
    newImg = slides[0];
  }
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
  console.log("le add event s'est lancé");
  next_class_dot();
  next_image_banner();
  next_text_banner();
  i++;
  console.log("la valeur de i est" + i);
});

/** écoute la fleche gauche
 */
arrow_left.addEventListener("click", () => {
  previous_class_dot();
  previous_image_banner();
  i--;
  console.log("la valeur de i est" + i);
});

/** 




function next_class_dot() {
  dots[i].classList.remove("dot_selected");
  console.log("Classe 'dot_selected' retirée de l'élément", i);

  if (i < slides.length - 1) {
    dots[i + 1].classList.add("dot_selected");
    console.log("Classe 'dot_selected' ajoutée à l'élément", i + 1);
  } else {
    dots[0].classList.add("dot_selected");
    console.log("Classe 'dot_selected' ajoutée à l'élément 0");
    i = -1;
  }
}

function previous_class_dot() {
  if(i>0){dots[i].classList.remove("dot_selected");
  console.log("Classe 'dot_selected' retirée de l'élément", i);
  dots[i - 1].classList.add("dot_selected");
  console.log("Classe 'dot_selected' ajoutée à l'élément", i - 1);}
  else {
    i=3;
    dots[0].classList.remove("dot_selected");
    dots[3].classList.add("dot_selected");
    i++
  }
}


arrow_right.addEventListener("click", () => {
     console.log("le add event s'est lancé")
  next_class_dot();
  i++;
   console.log("la valeur de i est" + i);
});


arrow_left.addEventListener("click", () => {
  previous_class_dot();
  i--
  console.log("la valeur de i est" + i)
 
 
});

 * 
 */

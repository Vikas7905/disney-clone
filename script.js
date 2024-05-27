const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;

const movies = [
  {
    name: "falcon and the winter soldier",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 2.PNG",
  },
  {
    name: "loki",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 1.PNG",
  },
  {
    name: "wanda vision",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 3.PNG",
  },
  {
    name: "raya and the last dragon",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 4.PNG",
  },
  {
    name: "luca",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
    image: "images/slider 5.PNG",
  },
];

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";
  sliders.push(slide);

  if (sliders.length > 1) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  if (slideIndex === movies.length - 1) {
    slideIndex = -1;
  }
  slideIndex++;
  createSlide();
}, 3000);

// vidoo play on hover

const videoCards = document.querySelectorAll(".card-video");
videoCards.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.play();
  });
  item.addEventListener("mouseleave", () => {
    item.pause();
    item.currentTime = 0;
  });
});



let cardContainer = [...document.querySelectorAll(".card-container")];
let prebtn = [...document.querySelectorAll(".pre-btn")];
let nxtbtn = [...document.querySelectorAll(".nxt-btn")];

cardContainer.forEach((items, i) => {
  let contDimention = items.getBoundingClientRect();
  let contwidth = contDimention.width;
  nxtbtn[i].addEventListener("click", () => {
    items.scrollLeft += contwidth - 200;
  });
  prebtn[i].addEventListener("click", () => {
    items.scrollLeft -= contwidth + 200;
  });
});

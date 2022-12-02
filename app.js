// Generate boxs
window.addEventListener("resize", (e) => {
  console.log(e.target.innerWidth);
});
let boxColor = "#013220";
let boxsContainer = document.querySelector(".boxs-container");
let boxsColumnsNums = 20;
let boxsRowsNums = 10;
let i;
let j;
let d;
for (j = 0; j < boxsRowsNums; j++) {
  for (i = 0; i < boxsColumnsNums; i++) {
    const box = document.createElement("div");

    box.classList.add("bg-box");
    const innerBox = document.createElement("div");
    innerBox.classList.add("inner-box");

    box.style.backgroundColor = boxColor;

    d = Math.floor(Math.sqrt(i * i + j * j));
    box.style.opacity = `${(10 - d / 3) / 10}`;
    box.appendChild(innerBox);
    boxsContainer.appendChild(box);
  }
}

// Select a box by coordinates (i, j)
const selectBox = (i, j) => {
  let index = i - 1 + boxsColumnsNums * (j - 1);
  if (i > boxsColumnsNums || j > boxsRowsNums) {
    return boxs[boxs.length - 1];
  } else {
    return boxs[index];
  }
};

// Animate boxs
let hoverBoxs = document.querySelectorAll(".inner-box");
let backgroundAnimationDuration = 400;
let opacityMin = 5;
let opacityMax = 9;
hoverBoxs.forEach((hoverBox) => {
  hoverBox.addEventListener("mouseenter", (e) => {
    let randomOpacity =
      Math.floor(Math.random() * (opacityMax - opacityMin) + opacityMin) / 10;
    hoverBox.style.opacity = randomOpacity;
    setTimeout((e) => {
      hoverBox.style.opacity = "0";
    }, backgroundAnimationDuration);
  });

  hoverBox.addEventListener("mouseleave", (e) => {
    setTimeout((e) => {
    }, backgroundAnimationDuration);
  });
});

// PROJECTS

let rights = document.querySelectorAll(".right");
rights.forEach((right) => {
  let rightCon = right.getElementsByClassName("p--screenshot-container");
  right.addEventListener("mouseenter", (e) => {
    rightCon[0].classList.add("img--move");
  });
  right.addEventListener("mouseleave", (e) => {
    rightCon[0].classList.remove("img--move");
  });
});

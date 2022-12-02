
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
  
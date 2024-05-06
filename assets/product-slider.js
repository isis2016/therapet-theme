function navigation(slider) {
  function updateClasses() {
    var slide = slider.track.details.rel;
    var arrowLeft = document.querySelector(".arrow--left");
    var arrowRight = document.querySelector(".arrow--right");

    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled");
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled");

    dots.forEach(function (dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active");
    });
  }

  function handlePrev() {
    slider.prev();
  }

  function handleNext() {
    slider.next();
  }

  var arrowLeft = document.querySelector(".arrow--left");
  var arrowRight = document.querySelector(".arrow--right");

  arrowLeft.addEventListener("click", handlePrev);
  arrowRight.addEventListener("click", handleNext);

  slider.on("created", () => {
    updateClasses();
  });

  slider.on("slideChanged", () => {
    updateClasses();
  });

  var dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, idx) {
    dot.addEventListener("click", () => slider.moveToIdx(idx));
  });
}

var slider = new KeenSlider("#my-keen-slider", {}, [navigation]);

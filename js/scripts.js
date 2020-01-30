(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    next = $("slider_button_next")[0];
    prev = $("slider_button_prev")[0];
    /*var next = document.getElementsByClassName("slider__button--next")[0],
      prev = document.getElementsByClassName("slider__button--prev")[0];*/

    $(next).on("click", getNext);
    $(prev).on("click", getPrev);

    /*next.addEventListener("click", getNext);
    prev.addEventListener("click", getPrev);*/
  }

  function getNext() {
    /*items[slide].classList.remove("active");*/

    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    }
    items[slide].classList.add("active");
  }

  // TODO

  function getPrev() {
    items[slide].classList.remove("active");
    if (slide === 0) {
      slide = 4;
    } else {
      slide--;
    }

    items[slide].classList.add("active");
  }
  // TODO

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();

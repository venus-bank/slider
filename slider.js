/**
 * @return {HTMLElement}
 */
const el = ($el) => document.querySelector($el);

/**
 * @return {NodeListOf}
 */
const els = ($els) => document.querySelectorAll($els);

function superSlide({
  slide,
  backBtn,
  forwardBtn,
  paginationItems,
  activeClass = 'active-slide',
}) {
  const getDirection = () =>
    window.getComputedStyle(el(slide)).getPropertyValue('direction');

  const getSliderWidth = () =>
    window.getComputedStyle(el(slide)).getPropertyValue('width');

  const slideItems = els(`${slide} > *`);

  let activeSlide = 0;
  let totalSlides = slideItems.length; // slide items count

  el(backBtn).addEventListener('click', () => changeSlideItem('back'));

  el(forwardBtn).addEventListener('click', () => changeSlideItem('forward'));

  function changeSlideItem(direction) {
    let targetSlide = direction === 'back' ? activeSlide - 1 : activeSlide + 1;

    if (targetSlide < 0) animateSlideItem(0);
    else if (targetSlide >= totalSlides) animateSlideItem(totalSlides - 1);
    else animateSlideItem(targetSlide);
  }

  function makeActiveSlide(activeSlide) {
    slideItems.forEach((item, index) => {
      if (index === activeSlide) item.classList.add(activeClass);
      else item.classList.remove(activeClass);
    });
  }

  function animateSlideItem(target) {
    let slideWidth = parseFloat(getSliderWidth()) * target;
    let slideDirection = getDirection() === 'ltr' ? '-' : '';

    makeActiveSlide(target);

    el(
      slide
    ).style.transform = `translate3d(${slideDirection}${slideWidth}px, 0px, 0px)`;

    activeSlide = target;
  }

  // enable slider pagination
  if (paginationItems) {
    els(paginationItems).forEach((item, index) => {
      item.addEventListener('click', () => {
        if (index >= totalSlides)
          console.warn('pagination items is more than slider items');
        else animateSlideItem(index);
      });
    });
  }

  // change slider transform when resize
  window.addEventListener('resize', () => animateSlideItem(activeSlide));
}

superSlide({
  slide: '.slider',
  backBtn: '#back-btn',
  forwardBtn: '#forward-btn',
  paginationItems: '.nav-item',
});

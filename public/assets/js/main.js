$(document).ready(function () {
  scroll();
});

/*======================= Scroll Function =========================*/
  function scroll() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
     $('.navbar').addClass('bg-light');
    } else {
     $('.navbar').removeClass('bg-light');
   }
 });
}

/*============ Highlight Navigation Menu Item ================*/
  let navli = $('nav ul li');
  $(document).on('scroll', function () {
    let currentSection = '';
    $('section').each(function () {
      let destenceOfSectionStartedPointFromTop = $(this).position().top;
      let totalHeightOfSection = $(this).outerHeight();
      let totalScrolledPositionFromTop = $(document).scrollTop();
      if (destenceOfSectionStartedPointFromTop - totalHeightOfSection / 3 <= totalScrolledPositionFromTop) {
        currentSection = $(this).attr('id');
      }
    });
    navli.removeClass('active');
    $(`[data-sectionname= ${currentSection}]`).addClass('active');
/*     let timeout = '';
    setTimeout(
      timeout = function () {
      window.location.hash = `#${currentSection}`;
    }, 50); */
  });
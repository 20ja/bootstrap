$('a[href^="#"]').on('click', function () {
  let $target = $(this.getAttribute('href'));
  if ($target.length) {
    event.preventDefault();
    $('html,body').stop().animate({
      scrollTop: $target.offset().top
    }, 2000, 'easeInOutBack')
  }
})
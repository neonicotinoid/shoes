console.log('ok');


var ham = document.querySelector('.menu-controller'),
    menu = document.querySelector('.main-menu');

ham.addEventListener( 'click' , function() {
  menu.classList.toggle('is-open');
});


$('.slider-wrapper').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  pauseOnFocus: true,
  customPaging : function(slider, i) {
    var title = $(slider.$slides[i]).data('title'),
        desc = $(slider.$slides[i]).data('desc'); 
    return '<div class="dot__text"><span class="dot__name">' + title + '</span><span class="dot__desc">' +  desc  + '</span></div>';
},
responsive: [
  {
    breakpoint: 768,
    settings: {
      infinite: true,
      arrows: false,
    }
  },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
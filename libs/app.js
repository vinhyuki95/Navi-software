
$(document).ready(function(){
  // slick-slider
  $('.box-slider').slick({
     slidesToShow:5,
     slidesToScroll:2,
     arrows: false,
    //  prevArrow:"<button type='button' class='slick-prev slick-slider'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    //  nextArrow:"<button type='button' class='slick-next slick-slider'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive:[
      {
        breakpoint:1800,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
        }
      }, 
    ]
  });
  // click vào icon thembnail

});

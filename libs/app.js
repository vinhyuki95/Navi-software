
$(document).ready(function(){
  // slick-slider
  $('.box-slider').slick({
     slidesToShow:5,
     slidesToScroll:1,
     arrows: false,
     isfinite:false,
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
      {
        breakpoint:1221,
        settings:{
          slidesToShow:2,
          slidesToScroll: 1,
        }
      }
    ]
  });
  // click tap-pane sẽ show content
  $(".block-main .price-menu__right .tap-pane").click(function(){
    $(".table_price").toggle();
    $(".thembnail-block").toggle();
  })
});


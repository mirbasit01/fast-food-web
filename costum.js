// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// // isotope js
// $(window).on('load', function () {
//     $('.filters_menu li').click(function () {
//         $('.filters_menu li').removeClass('active');
//         $(this).addClass('active');

//         var data = $(this).attr('data-filter');
//         $grid.isotope({
//             filter: data
//         })
//     });

//     var $grid = $(".grid").isotope({
//         itemSelector: ".all",
//         percentPosition: false,
//         masonry: {
//             columnWidth: ".all"
//         }
//     })
// });

// nice select
// $(document).ready(function() {
//     $('select').niceSelect();
//   });
//   $(document).ready(function(){
//     // Initialize Owl Carousel
//     $('#menuCarousel').owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: true,
//       autoplay: true,
//       autoplayTimeout: 3000,
//       responsive: {
//         0:{
//           items: 1
//         },
//         600:{
//           items: 2
//         },
//         1000:{
//           items: 3
//         }
//       }
//     });
//   });



$(document).ready(function(){
    // Initialize Owl Carousel
    $('#foodCarousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0:{
          items: 1
        },
        600:{
          items: 2
        },
        1000:{
          items: 3
        }
      }
    });
  });
import Ember from 'ember';

export default Ember.Controller.extend({
});


$(document).ready(function () {
  console.log("plugin loaded");
  //Initialize Swiper
  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    },
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
    },
  });


  ////initialize swiper when document ready
  //var mySwiper = new Swiper('.swiper-container', {
  //  // Optional parameters
  //  direction: 'horizontal',
  //  loop: true
  //})
});

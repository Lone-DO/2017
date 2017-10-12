import Ember from 'ember';

export default Ember.Controller.extend({
});

//initialize swiper when document ready
$(document).ready(function () {
  console.log("plugin loaded");
  //Initialize Swiper
  //var swiper = new Swiper('.swiper-container', {
  //  slidesPerView: 1,
  //  spaceBetween: 50,
  //  slidesPerGroup: 1,
  //  loop: false,
  //  loopFillGroupWithBlank: false,
  //  //pagination: {
  //  //  el: '.swiper-pagination',
  //  //  clickable: true,
  //  //},
  //  navigation: {
  //    nextEl: '.swiper-button-next',
  //    prevEl: '.swiper-button-prev',
  //  },
  //});
  var swiperH = new Swiper('.swiper-container-h', {
    direction: 'horizontal',
    spaceBetween: 50,
    //loop: true,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    },
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 50,
    ////loop: true,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
    }
  });
});

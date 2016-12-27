import Ember from 'ember';

export default Ember.Controller.extend({
});

//Undertale.GalleryController = Em.Controller.extend({});
$(document).ready(function () {
	'use strict';
  
  	//FLICKR API CALLS
	$('#showFlickr').click(function () {
    	// AJAX
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      opts = {
        	tags: 'undertale',
        	format: "json"
      };
    	function displayPhotos(data) {
	      var photoHTML = '<ul>';
			$.each(data.items, function (i, photo) {
				photoHTML += '<li>' + '<a href="' + photo.link + '">';
	        	photoHTML += '<img src="' + photo.media.m + '"></a></li>';
	      });
	      photoHTML += '</ul>';
			$('#flickr').append(photoHTML);
	   }
    	$.getJSON(flickerAPI, opts, displayPhotos);
  	}); //End Flickr

	//TUMBLR API CALLS
  	$('#showTumblr').click(function () {
		// Authenticate via API Key
    	var tumblrAPI = "http://api.tumblr.com/v2/blog/undertale.tumblr.com/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
			tumblrPhoto =
				"http://api.tumblr.com/v2/blog/undertale.tumblr.com/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP";
    	//T-Header
    	$.ajax({
      	url: tumblrAPI,
      	dataType: 'jsonp',
      	success: function (results) {
        		$("h1").html(results.response.blog.title);
      	}
    	});//end Title Pull
    	//T-Photos
    	$.ajax({
      	url: tumblrPhoto,
      	dataType: 'jsonp',
      	success: function (data) {
        		var photos = data.response.posts;
        		$.each(photos, function (i) {
          		var url = photos[i].photos[0].original_size.url,
            	sum = photos[i].summary,
            	photo = '<ul>';
          		photo += '<li>' + '<a href="' + url + '">';
          		photo += '<img src="' + url + '"></a></li>';
          		photo += '</ul>';
          		$('#tumblr').append(photo);
        		});
      	}
    	});//end Photo's Pull
  	});//end tumblr
  
  	//Charadreernurr Tumblr
  	$('#showArtist1').click(function () {
    	var tumblrAPI = 
    			"http://api.tumblr.com/v2/blog/undertale.gq/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      	tumblrPhoto =
        		"http://api.tumblr.com/v2/blog/undertale.gq/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP";
    	$.ajax({
      	url: tumblrAPI,
      	dataType: 'jsonp',
      	success: function (results) {
        		$("h1").html(results.response.blog.title);
      	}
    	});
    	$.ajax({
      	url: tumblrPhoto,
      	dataType: 'jsonp',
      	success: function (data) {
        		var photos = data.response.posts;
        		$.each(photos, function (i) {
          		var url = photos[i].photos[0].original_size.url,
            	sum = photos[i].summary,
            	photo = '<ul>';
          		photo += '<li>' + '<a href="' + url + '">';
          		photo += '<img src="' + url + '"></a></li>';
          		photo += '</ul>';
          		$('#artist1').append(photo);
        		});
      	}
    	});//end Photo's Pull
  	});//end Artist 1
  
  	//Asgore Mememurr Tumblr
  	$('#showArtist2').click(function () {
    	// Authenticate via API Key
    	var tumblrAPI = 
    			"http://api.tumblr.com/v2/blog/undertale.ga/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      	tumblrPhoto =
        		"http://api.tumblr.com/v2/blog/undertale.ga/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP";
    	$.ajax({
      	url: tumblrAPI,
      	dataType: 'jsonp',
      	success: function (results) {
        		$("h1").html(results.response.blog.title);
      	}
    	});
    	$.ajax({
      	url: tumblrPhoto,
      	dataType: 'jsonp',
      	success: function (data) {
        		var photos = data.response.posts;
        		$.each(photos, function (i) {
          		var url = photos[i].photos[0].original_size.url,
            	sum = photos[i].summary,
            	photo = '<ul>';
          		photo += '<li>' + '<a href="' + url + '">';
          		photo += '<img src="' + url + '"></a></li>';
          		photo += '</ul>';
          		$('#artist2').append(photo);
        		});
      	}
    	});//end Photo's Pull
  	});//end Artist 2
}); // end ready

//API Reference: MEOW!
//Reasons this is written in Jquery vs Ember is for many reasons, 
  //Primary reason is that some Scripts are outside the scopes of my knowledge for the time being, that time being limited and the focus is to not only show but prove that i am aware of what i am doing.

  //With Jquery i know purely what is going on, as some scopes just are possible when transcripting from one Language to another, Deprecations & installations are bound, in due time features will change as well as this site. ;D i digress,
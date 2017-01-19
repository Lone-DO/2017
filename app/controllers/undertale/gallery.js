/*global $:false*/
import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		showFlickr: function () {
			$(function () {
				// AJAX
				var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
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
		},
		showTumblr: function() {
			$(function () {
			//TUMBLR API CALLS
			// Authenticate via API Key
				var tumblrAPI = 
					"https://api.tumblr.com/v2/blog/undertale.tumblr.com/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
				tumblrPhoto =
					"https://api.tumblr.com/v2/blog/undertale.tumblr.com/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP";
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
								// sum = photos[i].summary,
								photo = '<ul>';
							photo += '<li>' + '<a href="' + url + '">';
							photo += '<img src="' + url + '"></a></li>';
							photo += '</ul>';
							$('#tumblr').append(photo);
						});
					}
				});//end Photo's Pull
			});//end tumblr
		},
		showArtist1: function() {
			$(function () {
				//Charadreernurr Tumblr
				var tumblrAPI = 
					"https://api.tumblr.com/v2/blog/charadreemurrofficial/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
				tumblrPhoto =
					"https://api.tumblr.com/v2/blog/charadreemurrofficial/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP";
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
							// sum = photos[i].summary,
							photo = '<ul>';
							photo += '<li>' + '<a href="' + url + '">';
							photo += '<img src="' + url + '"></a></li>';
							photo += '</ul>';
							$('#artist1').append(photo);
						});
					}
				});//end Photo's Pull
			});//end Artist 1
		},
		showArtist2: function() {
			$(function () {
				//Asgore Mememurr Tumblr
				// Authenticate via API Key
				var tumblrAPI = 
					"https://api.tumblr.com/v2/blog/alexandrevla/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
				tumblrPhoto =
					"https://api.tumblr.com/v2/blog/alexandrevla/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP";
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
							// sum = photos[i].summary,
							photo = '<ul>';
							photo += '<li>' + '<a href="' + url + '">';
							photo += '<img src="' + url + '"></a></li>';
							photo += '</ul>';
							$('#artist2').append(photo);
						});
					}
				});//end Photo's Pull
			});//end Artist 2
		}
	}
});

//Undertale.GalleryController = Em.Controller.extend({});
//Reasons this is written in Jquery vs Ember is for many reasons, 
	//Primary reason is that some Scripts are outside the scopes of my knowledge for the time being, that time being limited and the focus is to not only show but prove that i am aware of what i am doing.

	//With Jquery i know purely what is going on, as some scopes just are possible when transcripting from one Language to another, Deprecations & installations are bound, in due time features will change as well as this site. ;D i digress,
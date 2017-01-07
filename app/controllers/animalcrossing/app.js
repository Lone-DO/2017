import Ember from 'ember';

/*global $:false*/
var load = $(function () {
	var albumAPI = ('https://api.mlab.com/api/1/databases/lone-do/collections/albums?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0');
		$.ajax({
			url: albumAPI,
			dataType: 'json',
			success: function (data) {
				var albums = data;
				
			//Api Each Loop, sets classes and displays to page
				for (var _i = albums.length - 1; _i >= 0; _i--) {
				//Api data storing
					var _name = albums[_i].title,
						_release = albums[_i].date,
						_platform = albums[_i].platform,
						_img = albums[_i].imageURL,
						_hourID = albums[_i].hourID,
						Collection = '';
						
					//Api loop Head/ Opening
					Collection += '<div class="blog-post">';
					//Api Album Model
						Collection += '<div>';
							Collection += '<h3>' + _name + '</h3>';
							Collection += '<p>' + _release + '</p>';
							Collection += '<p>' + _platform + '</p>';
							Collection += '<img src="' + _img + '"">';
						Collection += '</div>';
						Collection += '<div>';
							Collection += '<ul>';

							for (var h = _hourID.length - 1; h >= 0; h--) {
								var _hour = _hourID[h],
									list = '<li>' + _hour + '</li>';
								Collection += list;
							}

							Collection += '</ul>';
						Collection += '</div>';
					//Api loop closing
						Collection += '</div>';
					//Posting Api data
					$('#gens').append(Collection);
				}
			}
		});
});

export default Ember.Controller.extend({
	actions: {
		isStarted: false, //defaults app to not started
		hintShowing: false, //defaults guide to not show
		hourShowing: false, //defaults guide to not show
	//Onclick of Launch img, Fire application
		end: function () {
            this.set('isStarted', false);
        },
		start: function () {
			'use strict';
			this.set('isStarted', true);
			console.log('App Launched');
			$(function phases() {
				var lastHr = -1,
					lastMin = -1,
					lastSec = -1;
				
			//*** Setting up API ***
				$(function () {
				// Authenticate via API Key
					var albumAPI = ('https://api.mlab.com/api/1/databases/lone-do/collections/albums?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0'),
						_name = '',
						_release = '',
						_platform = '',
						_img = '',
						_imgOver = '',
						_imgOut = '',
						Generation = '';
					console.log('Api location is ' + albumAPI);
				//API Launch
					$.ajax({
						url: albumAPI,
						dataType: 'json',
						success: function (data) {
							var albums = data;
							console.log(albums.length);
	
						//Api Each Loop, sets classes and displays to page
							for (var i = albums.length - 1, t = 0; i >= 0 && t <= albums.length; i--, t++) {
							//Api data storing
								_name = albums[i].title,
								_release = albums[i].date,
								_platform = albums[i].platform,
								_img = albums[i].imageURL,
								_imgOver = albums[i].imageHover,
								_imgOut = albums[i].imageOut,
								Generation = '';
								
							//Api loop Head/ Opening
								Generation += '<div>';
								Generation += '<article><a>';
								
							//Api loop for img data
								Generation += '<a class="set' + t + '">';
								Generation += '<img src="' + _imgOut + '" ';
								Generation += 'onmouseover="this.src=' + "'" + _imgOver + "';" + '" ';
								Generation += 'onmouseout="this.src=' + "'" + _imgOut + "';" + '" ';
								Generation += '></a>';
								
							//Aoi loop for descriptions
								Generation += '<dd class="date">' + _release + '</dd>';
								Generation += '<dd class="genTitle">' + _name + '</dd>';
								
							//Api Loop for play button	
								Generation += '<button class="btn btn-link set' + t + '">';
								Generation += 'Play This' + '</button>';
								
								Generation += '<dd class="platform">' + _platform + '</dd>';
								
								
							//Api loop closing
								Generation += '</a></article></div>';
								
							//Posting Api data
								$('.generation').append(Generation);
							}
							
							var index = albums.length - 1,
								 /**Original/Gamecube**/
								 _oID = albums[index - 0].hourID,
								 /**CityFolk**/
								 _cfID = albums[index - 2].hourID,
								 /**NewLeaf**/
								 _nlID = albums[index - 1].hourID,
								 /**Defaults Original playlist**/
								 _currentGen = _oID, 
								 /**Dev var for verifying generation has changed**/
								 pending = '', 
								 banner = document.getElementById('banner'),
								 img = document.getElementById('clockPhase'),
								 iframe = document.getElementById('songPhase'),
								 source = "../assets/images/AC_App/Timeline/",
								 vSource = "http://www.youtube.com/embed/",
								 imgTag = "", //Tag for img by hour
								 currentTime = "",
								 autoplay = "?autoplay=1",
								 extend = "&loop=1&playlist=";
							
							setInterval(function () {
								var date = new Date(),
									 hours = date.getHours(),
									 minutes = date.getMinutes(),
									 seconds = date.getSeconds(),
									 vidTagAm = "", //Tag for vid by hour
									 vidTagPm = "", //Tag for vid by hour
									 tagHrs = ""; //Tracks hour and selects array
								
							//Adds 0 on front to avoid single digit time
								if (hours < 10) {hours = "0" + hours; }
								if (minutes < 10) {minutes = "0" + minutes; }
								if (seconds < 10) {seconds = "0" + seconds; }
								
								var play = function () {
									if (hours < 10) {
										tagHrs = hours.slice(1);
										vidTagAm = vSource;
										vidTagAm += _currentGen[tagHrs];
										vidTagAm += autoplay;
										vidTagAm += extend + _currentGen[tagHrs];
										iframe.src = vidTagAm;
									} else {
										vidTagPm = vSource;
										vidTagPm += _currentGen[hours];
										vidTagPm += autoplay;
										vidTagPm += extend + _currentGen[hours];
										iframe.src = vidTagPm;
									}
								};
								
							//Concatinates time Data & Displays
								currentTime = hours + ":" + minutes + ":" + seconds;
								/**Plays NewLeaf**/
								$('.set2').click(function (){
									pending = _currentGen;
									_currentGen = _nlID;
									play();
									banner.src = 
										("../../../assets/images/AC_App/Animal_Crossing_New_Leaf_logo.png");
								});
								/**Plays CityFolk**/
								$('.set1').click(function (){
									pending = _currentGen;
									_currentGen = _cfID;
									play();
									banner.src = 
										("../../../assets/images/AC_App/Animal_Crossing_City_Folk_(logo).png");
								});
								/**Plays Original**/
								$('.set0').click(function (){
									pending = _currentGen;
									_currentGen = _oID;
									play();
									banner.src = ("../../../assets/images/AC_App/Animal_Crossing_Logo.png");
								});

							//Updating Seconds
								if (seconds !== lastSec) {
									for (var i = 6, len = 8;
									  i < len; i++) {
									$('._t' + i).text(currentTime[i]);
								}  
									lastSec = seconds;
								}//End Sec refresh

							//Updating Minutes
								if (minutes !== lastMin) {
									for (var i = 3, len = 5;
									  i < len; i++) {
									$('._t' + i).text(currentTime[i]);
								}  
									lastMin = minutes;
								}//End of Min refresh
								
							//Updating Hours
								if (hours !== lastHr) {
									for (var i = 0, len = 2;
									  i < len; i++) {
									$('._t' + i).text(currentTime[i]);
								}  
								//Auto Swaps clock shift on hour change
									$(function clockPhase() {
										imgTag = source + "(";
										imgTag += hours;
										imgTag += "00).png";
										img.src = imgTag;
									});
								//Autoplays song on hour change
									$(function songPhase() {
										play();
									});
									lastHr = hours;
								}//end hour refresh
							}, 1000);
						}//End Api.Success
					});//End Api
				});
			// *****API Rendering*****
			}); //End of Strict Script
		},
		load: function () {
			var albumAPI = ('https://api.mlab.com/api/1/databases/lone-do/collections/albums?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0');
			$.ajax({
				url: albumAPI,
				dataType: 'json',
				success: function (data) {
					var albums = data;
					
				//Api Each Loop, sets classes and displays to page
					for (var _i = albums.length - 1; _i >= 0; _i--) {
					//Api data storing
						var _name = albums[_i].title,
							_release = albums[_i].date,
							_platform = albums[_i].platform,
							_img = albums[_i].imageURL,
							_hourID = albums[_i].hourID,
							Collection = '';
							
						//Api loop Head/ Opening
						Collection += '<div class="blog-post">';
						//Api Album Model
							Collection += '<div>';
								Collection += '<h3>' + _name + '</h3>';
								Collection += '<p>' + _release + '</p>';
								Collection += '<p>' + _platform + '</p>';
								Collection += '<img src="' + _img + '"">';
							Collection += '</div>';
							Collection += '<div>';
								Collection += '<ul>';

								for (var h = _hourID.length - 1; h >= 0; h--) {
									var _hour = _hourID[h],
										list = '<li>' + _hour + '</li>';
									Collection += list;
								}

								Collection += '</ul>';
							Collection += '</div>';
						//Api loop closing
							Collection += '</div>';
						//Posting Api data
						$('#gens').append(Collection);
					}
				}
			});
		}
    }
});
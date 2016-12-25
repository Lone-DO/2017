import Ember from 'ember';

/*global $:false*/
var currentUrl = window.location.href;
if (currentUrl.indexOf("/#/") > -1) {
	currentUrl = currentUrl.slice(0, -2);
}
if (currentUrl.indexOf("/actunes") > -1) {
	currentUrl = currentUrl.slice(0, -7);
}
if (currentUrl.indexOf("/gen") > -1) {
	currentUrl = currentUrl.slice(0, -3);
}


export default Ember.Controller.extend({
	actions: {
		isStarted: false, //defaults app to not started
		hintShowing: false, //defaults guide to not show
		end: function () {
            this.set('isStarted', false);
        },
	//Onclick of Launch img, Fire application
		start: function () {
			'use strict';
			this.set('isStarted', true);
			console.log('App Launched');
			if (currentUrl.indexOf("/gen") > -1) {
				currentUrl = currentUrl.slice(0, -3);
			} else if (currentUrl.indexOf("/actunes") > -1) {
				currentUrl = currentUrl.slice(0, -3);
			}
			$(function phases() {
				var lastHr = -1,
					lastMin = -1,
					lastSec = -1;
				
			//*** Setting up API ***
				$(function () {
				// Authenticate via API Key
					var albumAPI = (currentUrl + 'api/albums'),
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
							var albums = data.albums;
							
						//Api Each Loop, sets classes and displays to page
							for (var i = albums.length - 1, t = 0; i >= 0 && t <= albums.length; i--, t++) {
							//Api data storing
								_name = albums[i].labelName,
								_release = albums[i].releaseDate,
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
										("../../../assets/images/Animal_Crossing_New_Leaf_logo.png");
								});
								/**Plays CityFolk**/
								$('.set1').click(function (){
									pending = _currentGen;
									_currentGen = _cfID;
									play();
									banner.src = 
										("../../../assets/images/Animal_Crossing-_City_Folk_(logo).png");
								});
								/**Plays Original**/
								$('.set0').click(function (){
									pending = _currentGen;
									_currentGen = _oID;
									play();
									banner.src ("../../../assets/images/Animal_Crossing_Logo.png");
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
		showHint: function () {
            this.set('hintShowing', true);
        },
        hideHint: function () {
            this.set('hintShowing', false);
        }
    }
});
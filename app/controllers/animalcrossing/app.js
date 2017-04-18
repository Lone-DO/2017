import Ember from 'ember';

/*global $:false*/
export default Ember.Controller.extend({
	actions: {
		isStarted: false, //defaults app to not started
		genShowing: false, //defaults gen to not show
		hintShowing: false, //defaults guide to not show
	//Onclick of Launch img, Fire application
		end: function () {
            this.set('genShowing', false);
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
								

							/***
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="card">
                                        <img class="card-img-top hidden-xs-down" src="" alt="Card image cap">
                                        <h5 class="card-header text-center"></h5>
                                        <div class="card-block">
                                            <button type="button" class="btn btn-primary"></button>
                                            <p class="card-text">date</p>
                                            <p class="card-text">console</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            */

							    //Api loop Head/ Opening
							    Generation += '<div class="col-md-4">';
							    Generation += '<div class="card">';
								
							    //Api loop for img data
							    Generation += '<a class="set' + t + '">';
							    Generation += '<img class="card-img-top hidden-xs-down" src="' + _imgOut + '" ';
							    Generation += 'onmouseover="this.src=' + "'" + _imgOver + "';" + '" ';
							    Generation += 'onmouseout="this.src=' + "'" + _imgOut + "';" + '" ';
							    Generation += '></a>';
								
							    //Aoi loop for descriptions
							    Generation += '<h5 class="card-header text-center genTitle">' + _name + '</h5>';
							    Generation += '<div class="card-block">';
								
							    //Api Loop for play button	
							    Generation += '<button type="button" class="btn btn-link set' + t + '">';
							    Generation += 'Play This' + '</button>';
								
							    Generation += '<p class="card-text platform">' + _release + '</p>';
							    Generation += '<p class="card-text platform">' + _platform + '</p>';
								
							    //Api loop closing
							    Generation += '</div></div></div>';

							////Api loop Head/ Opening
							//	Generation += '<div>';
							//	Generation += '<article><a>';
								
							////Api loop for img data
							//	Generation += '<a class="set' + t + '">';
							//	Generation += '<img src="' + _imgOut + '" ';
							//	Generation += 'onmouseover="this.src=' + "'" + _imgOver + "';" + '" ';
							//	Generation += 'onmouseout="this.src=' + "'" + _imgOut + "';" + '" ';
							//	Generation += '></a>';
								
							////Aoi loop for descriptions
							//	Generation += '<dd class="date">' + _release + '</dd>';
							//	Generation += '<dd class="genTitle">' + _name + '</dd>';
								
							////Api Loop for play button	
							//	Generation += '<button class="btn btn-link set' + t + '">';
							//	Generation += 'Play This' + '</button>';
								
							//	Generation += '<dd class="platform">' + _platform + '</dd>';
								
								
							////Api loop closing
							//	Generation += '</a></article></div>';
								
							//Posting Api data
								$('.generation').append(Generation);
							}
							
							var index = albums.length - 1,
								 /**Original/Gamecube**/
								 _oID = albums[index - 2].hourID,
								 /**CityFolk**/
								 _cfID = albums[index - 1].hourID,
								 /**NewLeaf**/
								 _nlID = albums[index - 0].hourID,

								 /**Defaults Original playlist**/
								 _currentGen = _oID, 
								 /**Dev var for verifying generation has changed**/
								 pending = '', 
								 banner = document.getElementById('banner'),
								 img = document.getElementById('clockPhase'),
								 iframe = document.getElementById('songPhase'),
								 // source = "../assets/images/AC_App/Timeline/",
								 source = "https://raw.githubusercontent.com/Lone-DO/lone-do.github.io/ember/public/assets/images/AC_App/Timeline/",
								 vSource = "https://www.youtube.com/embed/",
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
									tagHrs = "", //Tracks hour and selects array
									currentUrl = window.location.href;
								
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
								$('.set0').click(function (){
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
								$('.set2').click(function (){
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
		}
    }
});
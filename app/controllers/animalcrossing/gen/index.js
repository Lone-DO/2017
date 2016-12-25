import Ember from 'ember';
/*global $:false*/
export default Ember.Controller.extend({
	actions: {
		isLoaded: false, //defaults app to not started
		load: function () {
			this.set('isLoaded', true);
			var currentUrl = window.location.href,
				 context = '';
			$("#gensBtn").html(context);
			
			$(function () {
				currentUrl = currentUrl.slice(0, -11);
				var albumAPI = (currentUrl + 'api/albums');
				$.ajax({
					url: albumAPI,
					dataType: 'json',
					success: function (data) {
						var albums = data.albums;
						
					//Api Each Loop, sets classes and displays to page
						for (var _i = albums.length - 1; _i >= 0; _i--) {
						//Api data storing
							var _name = albums[_i].labelName,
								 _release = albums[_i].releaseDate,
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
		}
	}
});	
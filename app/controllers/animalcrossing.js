import Ember from 'ember';

export default Ember.Controller.extend({
	 actions: {
	 	end: function () {
            this.set('isStarted', false);
        },
        showHint: function () {
            this.set('hintShowing', true);
        },
        hideHint: function () {
            this.set('hintShowing', false);
        },
        showGen: function () {
            this.set('genShowing', true);
            $(function () {
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
            })
        },
        hideGen: function () {
            this.set('genShowing', false);
        }
    }
});
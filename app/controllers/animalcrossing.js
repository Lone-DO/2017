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
                const albumAPI = ('https://api.mlab.com/api/1/databases/lone-do/collections/albums?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0');
                $.ajax({
                    url: albumAPI,
                    dataType: 'json',
                    success: function (data) {
                        const albums = data;
                        
                    //Api Each Loop, sets classes and displays to page
                        for (let _i = albums.length - 1; _i >= 0; _i--) {
                        //Api data storing
                            let _name = albums[_i].title,
                                _release = albums[_i].date,
                                _platform = albums[_i].platform,
                                _img = albums[_i].imageURL,
                                _hourID = albums[_i].hourID;
                            
                            let Collection = `
                                <div class="blog-post">
                                    <div>
                                        <h3>${_name}</h3>
                                        <p>${_release}</p>
                                        <p>${_platform}</p>
                                        <img class="img-fluid" src="${_img}">
                                    </div>
                                    <div>
                                        <ul>
                            `;
                            for (let h = _hourID.length - 1; h >= 0; h--) {
                                let _hour = _hourID[h],
                                    list = `<li>${_hour}</li>`;
                                Collection += list;
                            }
                                Collection += `
                                        </ul>
                                    </div>'
                                </div>'
                                `;
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
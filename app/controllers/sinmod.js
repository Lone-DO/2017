import Ember from 'ember';

let ballet = "",
    $stringed = "",
    balletAPI = "https://api.mlab.com/api/1/databases/lone-do/collections/ballets?apiKey=9P6rUGDfq5OxFXag9RZYNkk3U2vF6IT0",
    serverAPI = "https://7daystodie-servers.com/api/?object=servers&element=voters&key=ie9uc889pv9tq8czt1h44vckjnfq81vp0i&month=current&format=json";

export default Ember.Controller.extend({
    actions: {
        serverLog: function () {
            $(function phases() {
                // Authenticate via API Key
                let _nickname = '',
                    _votes = '',
                    log = '';
                console.log('Api location is ' + serverAPI);
                //API Launch
                $.ajax({
                    url: serverAPI,
                    dataType: 'json',
                    success: function (data) {
                        const info = data.voters;
                        let date = new Date(),
                            locale = "en-us",
                            month = date.toLocaleString(locale, { month: "short" }), //Dec
                            monthName = date.toLocaleString(locale, { month: "long" }), //December
                            n = $('.sinData').length;

                        ballet = { Jul: { "voters": info } };// Compiles data
                        $stringed = JSON.stringify(ballet); // serealizes Array into json string
                       
                        if ($('.sinData').length > 0) { //Wipes the div if already loaded
                            $('.sinData').html(`<h3>${monthName}</h3>`);
                        }

                        for (let i = 0; i < info.length; i++) { //loops through array & inputs
                            _nickname = info[i].nickname,
                                _votes = info[i].votes;

                            log = `<p class="card-text platform">`;
                            log += `${_nickname} has made ${_votes} total vote(s),`;
                            if (info[i].votes / 5 >= 1) {
                                let _entry = Math.floor(info[i].votes / 5);
                                log += ` with ${_entry} ticket(s)`;
                            };
                            log += '</p>';
                            $('.sinData').append(log);
                        }
                    }
                });
            });
        },
        serverUpload: function () {
            $.ajax({
                'type': 'POST',
                'url': balletAPI,
                'contentType': 'application/json',
                'data': JSON.stringify(ballet),
                'dataType': 'json',
                'success': function (save) {
                    alert(`Upload was a Success!, Here's what was uploaded... ${$stringed}`);
                },
                error: function () {
                    alert("Error Saving Data... Check that you have Pulled the data first before uploading");
                }
            });
        }
    }
});

//setInterval(function () {
//    console.error($stringed);
//}, 10000);
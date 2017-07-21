import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        serverLog: function () {
            $(function phases() {
                // Authenticate via API Key
                let serverAPI = ('https://7daystodie-servers.com/api/?object=servers&element=voters&key=ie9uc889pv9tq8czt1h44vckjnfq81vp0i&month=current&format=json'),
                    _name = '',
                    _address = '',
                    _port = '',
                    _month = '',
                    _voters = '',
                    _nickname = '',
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
                            month = date.toLocaleString(locale, { month: "short" }),
                            monthName = date.toLocaleString(locale, { month: "long" }),
                            n = $('.sinData').length,
                            ballet = { Jul: { "voters" : info } };
                        console.log(ballet);
                       
                        if (n > 0) { //Wipes the div if already loaded
                            $('.sinData').html(`<h3>${monthName}</h3> <span>${ballet}</span>`);
                        }

                        for (let i = 0; i < info.length; i++) {
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
        }
    }
});

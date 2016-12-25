var models = require('./models');

module.exports = {

    addAlbum: function(labelName, releaseDate, platform, imageURL, hourID, callback) {
        console.log('INFO: Adding gen album: ' + labelName);
        var albumID = Math.random().toString(36).replace(/[^a-z]+/g, ''),
            newAlbum = new models.GenAlbum(albumID, labelName, releaseDate, platform, imageURL, hourID);
        global.db.albums.save(newAlbum, function(err, saved) {
            if(err || !saved) {
                console.log('ERR: Error saving new gen Album!');
                console.log(err);
                callback({status: 'ERR', error: err});
            } else {
                console.log('INFO: New Album saved.');
                callback({status: 'OK'});
            }
        });
    },

    getAlbums: function(callback) {
        console.log('INFO: Getting gen Albums');
        global.db.albums.find({}, null, {sort: [['postTime', -1]]}, function(err, albums) {
            if(err || !albums) {
                console.log('ERR: Cannot find any albums.');
                console.log(err);
                callback({albums: []});
            } else {
                console.log('INFO: Found ' + albums.length + ' albums.');
                albums.forEach(function(album) { delete album._id; }); //don't return internal id
                callback({albums: albums});
            }
        });
    }
};
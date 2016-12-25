var gen = require('./genRoutes');

module.exports = function(app) {
	app.get('/api/albums', gen.getAlbums);
    app.post('/api/albums', gen.saveAlbum);
};
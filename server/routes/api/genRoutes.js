var genController = require('../../controllers/gen');

module.exports = {

	getAlbums: function (req, res) {
		genController.getAlbums(function (respData) {
			res.json(respData);
		});
	},

	saveAlbum: function (req, res) {
		var labelName = req.body.labelName,
			releaseDate = req.body.releaseDate,
			platform = req.body.platform,
			imageURL = req.body.imageURL,
			hourID = req.body.hourID;

		genController.addAlbum(labelName, releaseDate, platform, imageURL, hourID, function (respData) {
			res.json(respData);
		});
	}
};

//module.exports = {
//
//    additem: function (req, res) {
//        var itemText = req.body.text;
//		genController.addItem(itemText, function (respData) {
//            res.json(respData);
//        });
//    },
//
//    getItems: function (req, res) {
//		genController.getGenIDs(function (respData) {
//            res.json(respData);
//        });
//    },
//
//    updateItem: function (req, res) {
//        var itemID = req.body.id,
//			isActive = req.body.isActive === 'true';
//		genController.updateGenID(itemID, isActive, function (respData) {
//            res.json(respData);
//        });
//    },
//
//    deleteItem: function (req, res) {
//        var itemID = req.body.id;
//		genController.deleteItem(itemID, function (respData) {
//            res.json(respData);
//        });
//    }
//};
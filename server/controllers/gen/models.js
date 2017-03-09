module.exports = {
	GenAlbum: function (albumID, title, releaseDate, platform, imageURL, hourID) {
		this.albumID = albumID;
		this.labelName = title;
		this.releaseDate = releaseDate;
		this.platform = platform;
		this.imageURL = imageURL;
		this.hourID = hourID;
		this.postTime = new Date();
	}
};
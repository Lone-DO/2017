module.exports = {
	GenAlbum: function (albumID, labelName, releaseDate, platform, imageURL, hourID) {
		this.albumID = albumID;
		this.labelName = labelName;
		this.releaseDate = releaseDate;
		this.platform = platform;
		this.imageURL = imageURL;
		this.hourID = hourID;
		this.postTime = new Date();
	}
};
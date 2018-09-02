////YouTube Video
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class for a youtube Video
var YouTubeVideo = /** @class */ (function () {
    //constructor of class YouTubeVideo
    function YouTubeVideo(title, src, noOfViews, noOfLikes, noOfDislikes, publishDate, description, category, channelName, videoQualityAvailable, isCaptionAvailable, noOfTimesReported) {
        var _this = this;
        //Getters for properties
        this.getTitle = function () {
            return _this.title;
        };
        this.getSource = function () {
            return _this.src;
        };
        this.getNoOfViews = function () {
            return _this.noOfViews;
        };
        this.getNoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.getNoOfDislikes = function () {
            return _this.noOfDislikes;
        };
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getVideoQuality = function () {
            return _this.videoQualityAvailable;
        };
        this.getIsCaptionAvailable = function () {
            if (_this.isCaptionAvailable) {
                return "yes";
            }
            else {
                return "no";
            }
        };
        this.getNoOfTimesReported = function () {
            return _this.noOfTimesReported;
        };
        //setters for properties
        this.setTitle = function (titleName) {
            _this.title = titleName;
        };
        this.setSource = function (sourceUrl) {
            _this.src = sourceUrl;
        };
        this.setNoOfViews = function () {
            _this.noOfViews = _this.noOfViews + 1;
        };
        this.setNoOfLikes = function () {
            _this.noOfLikes = _this.noOfLikes + 1;
        };
        this.setNoOfDislikes = function () {
            _this.noOfDislikes = _this.noOfDislikes + 1;
        };
        this.setPublishDate = function (publishedOn) {
            _this.publishDate = publishedOn;
        };
        this.setDescription = function (videoDescription) {
            _this.description = videoDescription;
        };
        this.setCategory = function (category) {
            _this.category = category;
        };
        this.setChannelName = function (channelName) {
            _this.channelName = channelName;
        };
        this.setVideoQuality = function () {
            var quality = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                quality[_i] = arguments[_i];
            }
            _this.videoQualityAvailable.concat(quality);
        };
        this.setIsCaptionAvailable = function (caption) {
            _this.isCaptionAvailable = caption;
        };
        this.setNoOfTimesReported = function () {
            _this.noOfTimesReported = _this.noOfTimesReported + 1;
        };
        this.getRelatedVideos = function () {
            return "Yet to implement";
        };
        this.title = title;
        this.src = src;
        this.noOfViews = noOfViews;
        this.noOfLikes = noOfLikes;
        this.noOfDislikes = noOfDislikes;
        this.publishDate = publishDate;
        this.description = description;
        this.category = category;
        this.channelName = channelName;
        this.videoQualityAvailable = videoQualityAvailable;
        this.isCaptionAvailable = isCaptionAvailable;
        this.noOfTimesReported = noOfTimesReported;
    }
    return YouTubeVideo;
}());
//Sub class of YouTubeVideo Class
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie(price, title, src, noOfViews, noOfLikes, noOfDislikes, publishDate, description, category, channelName, videoQualityAvailable, isCaptionAvailable, noOfTimesReported) {
        var _this = _super.call(this, title, src, noOfViews, noOfLikes, noOfDislikes, publishDate, description, category, channelName, videoQualityAvailable, isCaptionAvailable, noOfTimesReported) || this;
        _this.getPrice = function () {
            return _this.price;
        };
        _this.setPrice = function () {
            var price = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                price[_i] = arguments[_i];
            }
            return "Yet to implement";
        };
        _this.price = price;
        return _this;
    }
    return Movie;
}(YouTubeVideo));
//instantiating a new Video
var kamikaze = new YouTubeVideo("Kamikaze [Official Audio]", "https://www.youtube.com/watch?v=FhF9RwkHAJw", 2054657, 124000, 1700, "30 Aug 2018", "From the album Kamikaze, out now: http://shady.sr/Kamikaze\n\nhttp://eminem.com\nhttp://facebook.com/eminem\nhttp://twitter.com/eminem\nhttp://instagram.com/eminem\nhttp://eminem.tumblr.com\n\nhttp://shadyrecords.com\nhttp://facebook.com/shadyrecords\nhttp://twitter.com/shadyrecords\nhttp://instagram.com/shadyrecords\nhttp://trustshady.tumblr.com\n\nMusic in this video\nSong\nKamikaze\nArtist\nEminem\nLicensed to YouTube by\nUMG (on behalf of UMGRI Interscope)\nBuy it now on Google Play", "Music", "EminemMusic", [144, 240, 366, 480, 720, 1080], false, 2);
console.log("*YOU TUBE VIDEO*");
console.log("Title : " + kamikaze.getTitle());
console.log("Source : " + kamikaze.getSource());
console.log("Number Of Views : " + kamikaze.getNoOfViews());
console.log("Likes : " + kamikaze.getNoOfLikes());
console.log("Dislikes : " + kamikaze.getNoOfDislikes());
console.log("Published On : " + kamikaze.getPublishDate());
console.log("Description : " + kamikaze.getDescription());
console.log("Category : " + kamikaze.getCategory());
console.log("Channel : " + kamikaze.getChannelName());
console.log("Video Quality : " + kamikaze.getVideoQuality());
console.log("Caption added : " + kamikaze.getIsCaptionAvailable());
console.log("No of times reported : " + kamikaze.getNoOfTimesReported());
console.log("Related Videos : " + kamikaze.getRelatedVideos());
console.log("If someone views a video call setNoOfViews to update the Views");
kamikaze.setNoOfViews();
console.log("Updated Number of Views : " + kamikaze.getNoOfViews());
console.log("------------------------------------------------------");
// class for Social Profile
var UserProfile = /** @class */ (function () {
    //constructor used to instantiate a new object
    function UserProfile(userName, emails, birthDate, birthMonth, birthYear, gender, phoneNumber, socialLinks, website, interestedIn, languagesKnown, religiousViews, politicalViews, aboutYou, favoriteQuotes, bloodGroup, relationshipStatus, familyMembers, workPlaces, currentCity, hometown, educationDetails, lifeEvents) {
        var _this = this;
        //getters for the properties
        this.getUserName = function () {
            return _this.userName;
        };
        this.getPhoneNumber = function () {
            if (_this.phoneNumber === undefined) {
                return "N/A";
            }
            else {
                return _this.phoneNumber;
            }
        };
        this.getEmails = function () {
            return _this.emails;
        };
        this.getSocialLinks = function () {
            if (_this.socialLinks === undefined) {
                return "N/A";
            }
            else {
                return _this.socialLinks;
            }
        };
        this.getWebSite = function () {
            if (_this.website === undefined) {
                return "N/A";
            }
            else {
                return _this.website;
            }
        };
        this.getBirthDate = function () {
            return _this.birthDate;
        };
        this.getBirthMonth = function () {
            return _this.birthMonth;
        };
        this.getBirthYear = function () {
            return _this.birthYear;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getInterestedIn = function () {
            if (_this.interestedIn === undefined) {
                return "N/A";
            }
            else {
                return _this.interestedIn;
            }
        };
        this.getLanguagesKnown = function () {
            if (_this.languagesKnown === undefined) {
                return "N/A";
            }
            else {
                return _this.languagesKnown;
            }
        };
        this.getReligiousViews = function () {
            if (_this.religiousViews === undefined) {
                return "N/A";
            }
            else {
                return _this.religiousViews;
            }
        };
        this.getPolticalViews = function () {
            if (_this.politicalViews === undefined) {
                return "N/A";
            }
            else {
                return _this.politicalViews;
            }
        };
        this.getAboutYou = function () {
            if (_this.aboutYou === undefined) {
                return "N/A";
            }
            else {
                return _this.aboutYou;
            }
        };
        this.getFavoriteQuote = function () {
            if (_this.favoriteQuotes === undefined) {
                return "N/A";
            }
            else {
                return _this.favoriteQuotes;
            }
        };
        this.getBloodGroup = function () {
            if (_this.bloodGroup === undefined) {
                return "N/A";
            }
            else {
                return _this.bloodGroup;
            }
        };
        this.getRelationshipStatus = function () {
            if (_this.relationshipStatus === undefined) {
                return "N/A";
            }
            else {
                return _this.relationshipStatus;
            }
        };
        this.getFamilyMembers = function () {
            if (_this.familyMembers === undefined) {
                return "N/A";
            }
            else {
                return _this.familyMembers;
            }
        };
        this.getWorkPlaces = function () {
            if (_this.workPlaces === undefined) {
                return "N/A";
            }
            else {
                return _this.workPlaces;
            }
        };
        this.getCurrentLocation = function () {
            if (_this.currentCity === undefined) {
                return "N/A";
            }
            else {
                return _this.currentCity;
            }
        };
        this.getHomeTown = function () {
            if (_this.hometown === undefined) {
                return "N/A";
            }
            else {
                return _this.hometown;
            }
        };
        this.getEducationDetails = function () {
            if (_this.educationDetails === undefined) {
                return "N/A";
            }
            else {
                return _this.educationDetails;
            }
        };
        this.getLifeEvents = function () {
            if (_this.lifeEvents === undefined) {
                return "N/A";
            }
            else {
                return _this.lifeEvents;
            }
        };
        //setters for properties
        this.setPhoneNumber = function () {
            var phoneNo = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                phoneNo[_i] = arguments[_i];
            }
            if (_this.phoneNumber === undefined) {
                _this.phoneNumber = phoneNo;
            }
            else {
                _this.phoneNumber.concat(phoneNo);
            }
        };
        this.setSocialLink = function () {
            var socialLink = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                socialLink[_i] = arguments[_i];
            }
            var _a;
            if (_this.socialLinks === undefined) {
                _this.socialLinks = socialLink;
            }
            else {
                (_a = _this.socialLinks).concat.apply(_a, socialLink);
            }
        };
        this.setWebsite = function (website) {
            if (_this.website === undefined) {
                _this.website = website;
            }
            else {
                _this.website.concat(website);
            }
        };
        this.setBirthDate = function (birthDt) {
            _this.birthDate = birthDt;
        };
        this.setBirthYear = function (birthYr) {
            _this.birthYear = birthYr;
        };
        this.setGender = function (userGender) {
            _this.gender = userGender;
        };
        this.setInterestedIn = function () {
            var interests = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                interests[_i] = arguments[_i];
            }
            _this.interestedIn = interests;
        };
        this.setLanguagesKnown = function () {
            var languages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                languages[_i] = arguments[_i];
            }
            if (_this.languagesKnown === undefined) {
                _this.languagesKnown = languages;
            }
            else {
                _this.languagesKnown.concat(languages);
            }
        };
        this.setReligiousViews = function () {
            var religiousView = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                religiousView[_i] = arguments[_i];
            }
            if (_this.religiousViews === undefined) {
                _this.religiousViews = religiousView;
            }
            else {
                _this.religiousViews.concat(religiousView);
            }
        };
        this.setPoliticalViews = function () {
            var politicalView = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                politicalView[_i] = arguments[_i];
            }
            if (_this.politicalViews === undefined) {
                _this.politicalViews = politicalView;
            }
            else {
                _this.politicalViews.concat(politicalView);
            }
        };
        this.setAboutYou = function (about) {
            _this.aboutYou = about;
        };
        this.setFavoriteQuotes = function (quote) {
            _this.favoriteQuotes = quote;
        };
        this.setBloodGroup = function (bloodGrp) {
            _this.bloodGroup = bloodGrp;
        };
        this.setRelationshipStatus = function (relationShipSt) {
            _this.relationshipStatus = relationShipSt;
        };
        this.setFamilyMembers = function () {
            var familyMember = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                familyMember[_i] = arguments[_i];
            }
            _this.familyMembers = familyMember;
        };
        this.setWorkPlaces = function () {
            var workPlace = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                workPlace[_i] = arguments[_i];
            }
            if (_this.workPlaces === undefined) {
                _this.workPlaces = workPlace;
            }
            else {
                _this.workPlaces.concat(workPlace);
            }
        };
        this.setCurrentCity = function (currentCt) {
            _this.currentCity = currentCt;
        };
        this.setHomeTown = function (homeTown) {
            _this.hometown = homeTown;
        };
        this.setEducationDetails = function () {
            var educationDetail = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                educationDetail[_i] = arguments[_i];
            }
            if (_this.educationDetails === undefined) {
                _this.educationDetails = educationDetail;
            }
            else {
                _this.educationDetails.concat(educationDetail);
            }
        };
        this.setLifeEvents = function () {
            var lifeEvent = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                lifeEvent[_i] = arguments[_i];
            }
            if (_this.lifeEvents === undefined) {
                _this.lifeEvents = lifeEvent;
            }
            else {
                _this.lifeEvents.concat(lifeEvent);
            }
        };
        this.getAge = function () {
            var dob = new Date(_this.birthYear, _this.birthMonth, _this.birthDate);
            var currrentDate = new Date();
            var age = currrentDate.getFullYear() - dob.getFullYear();
            var m = currrentDate.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && currrentDate.getDate() < dob.getDate())) {
                age--;
            }
            return age;
        };
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.emails = emails;
        this.socialLinks = socialLinks;
        this.website = website;
        this.birthDate = birthDate;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.languagesKnown = languagesKnown;
        this.religiousViews = religiousViews;
        this.politicalViews = politicalViews;
        this.aboutYou = aboutYou;
        this.favoriteQuotes = favoriteQuotes;
        this.bloodGroup = bloodGroup;
        this.relationshipStatus = relationshipStatus;
        this.familyMembers = familyMembers;
        this.workPlaces = workPlaces;
        this.currentCity = currentCity;
        this.hometown = hometown;
        this.educationDetails = educationDetails;
        this.lifeEvents = lifeEvents;
    }
    return UserProfile;
}());
var amIt = new UserProfile("Amit Tyagi", ["amit1947tyagi@gmail.com"], 4, 5, 1993, "Male");
console.log("*SOCIAL PROFILE*");
console.log("User Name : " + amIt.getUserName());
console.log("Email Address : " + amIt.getEmails());
console.log("Birthday : " + new Date(amIt.getBirthYear(), amIt.getBirthMonth() - 1, amIt.getBirthDate()));
console.log("Gender : " + amIt.getGender());
amIt.setPhoneNumber(9457558571);
amIt.setSocialLink(["Instagram", "still_speeding"], ["twitter", "i_am_it"]);
amIt.setBloodGroup("AB+");
amIt.setInterestedIn("Male");
amIt.setLanguagesKnown("Hindi, English");
amIt.setAboutYou("Always, Looking for food.");
amIt.setRelationshipStatus("Engaged");
amIt.setFamilyMembers(["Brother", "Vaibhav Tyagi"], ["Sister", "Depika Tyagi"]);
amIt.setCurrentCity("Bangalore");
amIt.setHomeTown("Muzaffarnagar");
console.log("Phone number : " + amIt.getPhoneNumber());
console.log("social links : " + amIt.getSocialLinks()[0][0] + " - " + amIt.getSocialLinks()[0][1] + ", " + amIt.getSocialLinks()[1][0] + " - " + amIt.getSocialLinks()[1][1]);
console.log("Websites : " + amIt.getWebSite());
console.log("Age : " + amIt.getAge());
console.log("Blood group : " + amIt.getBloodGroup());
console.log("Interested In : " + amIt.getInterestedIn());
console.log("Languages : " + amIt.getLanguagesKnown());
console.log("Religious View : " + amIt.getReligiousViews());
console.log("Political View : " + amIt.getPolticalViews());
console.log("About You : " + amIt.getAboutYou());
console.log("Favorite Quote : " + amIt.getFavoriteQuote());
console.log("Relationship Status : " + amIt.getRelationshipStatus());
console.log("Family Member : " + amIt.getFamilyMembers()[0][0] + " - " + amIt.getFamilyMembers()[0][1] + ", " + amIt.getFamilyMembers()[1][0] + " - " + amIt.getFamilyMembers()[1][1]);
console.log("Worked At : " + amIt.getWorkPlaces());
console.log("Current City : " + amIt.getCurrentLocation());
console.log("Hometown : " + amIt.getHomeTown());
console.log("Education Details : " + amIt.getEducationDetails());
console.log("Life events: " + amIt.getLifeEvents());

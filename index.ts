////YouTube Video

//class for a youtube Video
class YouTubeVideo {
    protected title : string
    protected src : string //url
    protected noOfViews : number
    protected noOfLikes : number
    protected noOfDislikes : number
    protected publishDate : string
    protected description : string
    protected category : string
    protected channelName : string
    protected videoQualityAvailable : number[] //in Pixels
    protected isCaptionAvailable : boolean
    protected noOfTimesReported : number
    
    //constructor of class YouTubeVideo
    constructor(title : string,src : string, noOfViews : number, noOfLikes : number, noOfDislikes : number, publishDate : string, description : string, category : string, channelName : string, videoQualityAvailable : number[], isCaptionAvailable : boolean, noOfTimesReported : number){
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

    //Getters for properties
    getTitle = ()=>{
        return this.title
    }

    getSource = ()=>{
        return this.src
    }

    getNoOfViews = ()=>{
        return this.noOfViews
    }

    getNoOfLikes = ()=>{
        return this.noOfLikes
    }

    getNoOfDislikes = ()=>{
        return this.noOfDislikes
    }

    getPublishDate = ()=>{
        return this.publishDate
    }

    getDescription = ()=>{
        return this.description
    }

    getCategory = ()=>{
        return this.category
    }

    getChannelName = ()=>{
        return this.channelName
    }

    getVideoQuality = ()=>{
        return this.videoQualityAvailable
    }

    getIsCaptionAvailable = ()=>{
        if(this.isCaptionAvailable){
            return "yes"
        }
        else{
            return "no"
        }
    }

    getNoOfTimesReported = ()=>{
        return this.noOfTimesReported
    }

    //setters for properties
    setTitle = (titleName:string)=>{
        this.title = titleName
    }

    setSource = (sourceUrl:string)=>{
        this.src = sourceUrl
    }

    setNoOfViews = ()=>{
        this.noOfViews = this.noOfViews + 1
    }

    setNoOfLikes = ()=>{
        this.noOfLikes = this.noOfLikes + 1
    }

    setNoOfDislikes = ()=>{
        this.noOfDislikes = this.noOfDislikes + 1
    }

    setPublishDate = (publishedOn:string)=>{
        this.publishDate = publishedOn
    }

    setDescription = (videoDescription:string)=>{
        this.description = videoDescription
    }

    setCategory = (category:string)=>{
        this.category = category
    }

    setChannelName = (channelName:string)=>{
        this.channelName = channelName
    }

    setVideoQuality = (...quality:number[])=>{
        this.videoQualityAvailable.concat(quality)
    }

    setIsCaptionAvailable = (caption:boolean)=>{
       this.isCaptionAvailable = caption
    }

    setNoOfTimesReported = ()=>{
        this.noOfTimesReported = this.noOfTimesReported + 1
    }

    getRelatedVideos = ()=>{
        return "Yet to implement"
    }

}

//Sub class of YouTubeVideo Class
class Movie extends YouTubeVideo{
    protected price : number[]  //different prices according to Video quality
    constructor(price:number[], title : string,src : string, noOfViews : number, noOfLikes : number, noOfDislikes : number, publishDate : string, description : string, category : string, channelName : string, videoQualityAvailable : number[], isCaptionAvailable : boolean, noOfTimesReported : number){
        super(title,src, noOfViews, noOfLikes, noOfDislikes, publishDate, description, category, channelName, videoQualityAvailable, isCaptionAvailable, noOfTimesReported)
        this.price = price
    }

    getPrice = ()=>{
        return this.price
    }
    setPrice = (...price:number[])=>{
        return "Yet to implement"
    }
}

//instantiating a new Video

let kamikaze = new YouTubeVideo("Kamikaze [Official Audio]","https://www.youtube.com/watch?v=FhF9RwkHAJw",2054657,124000,1700,"30 Aug 2018",`From the album Kamikaze, out now: http://shady.sr/Kamikaze

http://eminem.com
http://facebook.com/eminem
http://twitter.com/eminem
http://instagram.com/eminem
http://eminem.tumblr.com

http://shadyrecords.com
http://facebook.com/shadyrecords
http://twitter.com/shadyrecords
http://instagram.com/shadyrecords
http://trustshady.tumblr.com

Music in this video
Song
Kamikaze
Artist
Eminem
Licensed to YouTube by
UMG (on behalf of UMGRI Interscope)
Buy it now on Google Play`,"Music","EminemMusic",[144,240,366,480,720,1080],false,2)

console.log(`*YOU TUBE VIDEO*`)
console.log(`Title : ${kamikaze.getTitle()}`)

console.log(`Source : ${kamikaze.getSource()}`)

console.log(`Number Of Views : ${kamikaze.getNoOfViews()}`)

console.log(`Likes : ${kamikaze.getNoOfLikes()}`)

console.log(`Dislikes : ${kamikaze.getNoOfDislikes()}`)

console.log(`Published On : ${kamikaze.getPublishDate()}`)

console.log(`Description : ${kamikaze.getDescription()}`)

console.log(`Category : ${kamikaze.getCategory()}`)

console.log(`Channel : ${kamikaze.getChannelName()}`)

console.log(`Video Quality : ${kamikaze.getVideoQuality()}`)

console.log(`Caption added : ${kamikaze.getIsCaptionAvailable()}`)

console.log(`No of times reported : ${kamikaze.getNoOfTimesReported()}`)

console.log(`Related Videos : ${kamikaze.getRelatedVideos()}`)

console.log("If someone views a video call setNoOfViews to update the Views")
kamikaze.setNoOfViews()

console.log(`Updated Number of Views : ${kamikaze.getNoOfViews()}`)



console.log("------------------------------------------------------")



// class for Social Profile

class UserProfile{
    protected userName : string
    protected phoneNumber? : number[]
    protected emails : string[]
    protected socialLinks? : [string,string][]
    protected website? : string[]
    protected birthDate : number
    protected birthMonth : number
    protected birthYear : number
    protected gender : string
    protected interestedIn? : string[]
    protected languagesKnown? : string[]
    protected religiousViews? : [string,string][]
    protected politicalViews? : [string,string][]
    protected aboutYou? : string
    protected favoriteQuotes? : string
    protected bloodGroup? : string
    protected relationshipStatus? : string
    protected familyMembers? : [string,string][]
    protected workPlaces? : [string,string,string,string,string][]
    protected currentCity? :  string
    protected hometown? : string
    protected educationDetails? : [string,string,string,string,string][]
    protected lifeEvents? : any[]
    
    //constructor used to instantiate a new object
    constructor(userName : string, emails : string[], birthDate : number, birthMonth : number, birthYear : number, gender : string, phoneNumber? : number[], socialLinks? : [string,string][], website? : string[], interestedIn? : string[], languagesKnown? : string[], religiousViews? : [string,string][], politicalViews? : [string,string][], aboutYou? : string, favoriteQuotes? : string, bloodGroup? : string, relationshipStatus? : string, familyMembers? : [string,string][], workPlaces? : [string,string,string,string,string][], currentCity? :  string, hometown? : string, educationDetails? : [string,string,string,string,string][], lifeEvents? : any[]){
        this.userName = userName
        this.phoneNumber = phoneNumber
        this.emails = emails
        this.socialLinks = socialLinks
        this.website = website
        this.birthDate = birthDate
        this.birthMonth = birthMonth
        this.birthYear = birthYear
        this.gender = gender
        this.interestedIn = interestedIn
        this.languagesKnown = languagesKnown
        this.religiousViews = religiousViews
        this.politicalViews = politicalViews
        this.aboutYou = aboutYou
        this.favoriteQuotes = favoriteQuotes
        this.bloodGroup = bloodGroup
        this.relationshipStatus = relationshipStatus
        this.familyMembers = familyMembers
        this.workPlaces = workPlaces
        this.currentCity = currentCity
        this.hometown = hometown
        this.educationDetails = educationDetails
        this.lifeEvents = lifeEvents
    }

    //getters for the properties
    getUserName = ()=> {
        return this.userName;
    }

    getPhoneNumber = ()=>{
        if(this.phoneNumber===undefined){
            return "N/A"
        }
        else{
            return this.phoneNumber
        }
    }

    getEmails = ()=>{
        return this.emails
    }

    getSocialLinks = ()=>{
        if(this.socialLinks===undefined){
            return "N/A"
        }
        else{
            return this.socialLinks
        }
    }

    getWebSite = ()=>{
        if(this.website===undefined){
            return "N/A"
        }
        else{
            return this.website
        }
    }

    getBirthDate = ()=>{
        return this.birthDate
    }

    getBirthMonth = ()=>{
        return this.birthMonth
    }

    getBirthYear = ()=>{
        return this.birthYear
    }

    getGender = ()=>{
        return this.gender
    }

    getInterestedIn = ()=>{
        if(this.interestedIn===undefined){
            return "N/A"
        }
        else{
            return this.interestedIn
        }
    }

    getLanguagesKnown = ()=>{
        if(this.languagesKnown===undefined){
            return "N/A"
        }
        else{
            return this.languagesKnown
        }
    }

    getReligiousViews = ()=>{
        if(this.religiousViews===undefined){
            return "N/A"
        }
        else{
            return this.religiousViews
        }
    }

    getPolticalViews = ()=>{
        if(this.politicalViews===undefined){
            return "N/A"
        }
        else{
            return this.politicalViews
        }
    }

    getAboutYou = ()=>{
        if(this.aboutYou===undefined){
            return "N/A"
        }
        else{
            return this.aboutYou
        }
    }

    getFavoriteQuote = ()=>{
        if(this.favoriteQuotes===undefined){
            return "N/A"
        }
        else{
            return this.favoriteQuotes
        }
    }

    getBloodGroup = ()=>{
        if(this.bloodGroup===undefined){
            return "N/A"
        }
        else{
            return this.bloodGroup
        }
    }

    getRelationshipStatus = ()=>{
        if(this.relationshipStatus===undefined){
            return "N/A"
        }
        else{
            return this.relationshipStatus
        }
    }

    getFamilyMembers = ()=>{
        if(this.familyMembers===undefined){
            return "N/A"
        }
        else{
            return this.familyMembers
        }
    }

    getWorkPlaces = ()=>{
        if(this.workPlaces===undefined){
            return "N/A"
        }
        else{
            return this.workPlaces
        }
    }

    getCurrentLocation = ()=>{
        if(this.currentCity===undefined){
            return "N/A"
        }
        else{
            return this.currentCity
        }
    }

    getHomeTown = ()=>{
        if(this.hometown===undefined){
            return "N/A"
        }
        else{
            return this.hometown
        }
    }

    getEducationDetails = ()=>{
        if(this.educationDetails===undefined){
            return "N/A"
        }
        else{
            return this.educationDetails
        }
    }

    getLifeEvents =()=>{
        if(this.lifeEvents===undefined){
            return "N/A"
        }
        else{
            return this.lifeEvents
        }
    }

    //setters for properties
    setPhoneNumber=(...phoneNo:number[])=>{
        if(this.phoneNumber === undefined)
        {
            this.phoneNumber = phoneNo
        }
        else{
            this.phoneNumber.concat(phoneNo)
        }
    }

    setSocialLink = (...socialLink:[string,string][])=>{
        if(this.socialLinks === undefined)
        {
            this.socialLinks = socialLink
        }
        else{
            this.socialLinks.concat(...socialLink)
        }
    }

    setWebsite = (website:string[])=>{
        if(this.website === undefined)
        {
            this.website = website
        }
        else{
            this.website.concat(website)
        } 
    }

    setBirthDate = (birthDt:number)=>{
        this.birthDate = birthDt
    }

    setBirthYear = (birthYr:number)=>{
        this.birthYear = birthYr
    }

    setGender = (userGender:string)=>{
        this.gender = userGender
    }

    setInterestedIn = (...interests:string[])=>{
        this.interestedIn = interests
    }

    setLanguagesKnown = (...languages:string[])=>{
        if(this.languagesKnown === undefined)
        {
            this.languagesKnown = languages
        }
        else{
            this.languagesKnown.concat(languages)
        }
        
    }

    setReligiousViews = (...religiousView:[string,string][])=>{
        if(this.religiousViews === undefined)
        {
            this.religiousViews = religiousView
        }
        else{
            this.religiousViews.concat(religiousView)
        }
    }

    setPoliticalViews = (...politicalView:[string,string][])=>{
        if(this.politicalViews === undefined)
        {
            this.politicalViews = politicalView
        }
        else{
            this.politicalViews.concat(politicalView)
        }
    }

    setAboutYou = (about:string)=>{
        this.aboutYou = about
    }

    setFavoriteQuotes = (quote:string)=>{
        this.favoriteQuotes = quote
    }

    setBloodGroup = (bloodGrp:string)=>{
        this.bloodGroup = bloodGrp
    }

    setRelationshipStatus = (relationShipSt:string)=>{
        this.relationshipStatus = relationShipSt
    }

    setFamilyMembers = (...familyMember:[string,string][])=>{
        this.familyMembers = familyMember
    }

    setWorkPlaces = (...workPlace:[string,string,string,string,string][])=>{
        if(this.workPlaces === undefined)
        {
            this.workPlaces = workPlace
        }
        else{
            this.workPlaces.concat(workPlace)
        }
    }

    setCurrentCity = (currentCt:string)=>{
        this.currentCity = currentCt
    }

    setHomeTown = (homeTown:string)=>{
        this.hometown = homeTown
    }

    setEducationDetails = (...educationDetail:[string,string,string,string,string][])=>{
        if(this.educationDetails === undefined)
        {
            this.educationDetails = educationDetail
        }
        else{
            this.educationDetails.concat(educationDetail)
        }
    }

    setLifeEvents = (...lifeEvent:[string,string,string,string,string][])=>{
        if(this.lifeEvents === undefined)
        {
            this.lifeEvents = lifeEvent
        }
        else{
            this.lifeEvents.concat(lifeEvent)
        }
    }

    getAge = ()=>{
        let dob = new Date(this.birthYear,this.birthMonth,this.birthDate)
        let currrentDate = new Date()
        let age = currrentDate.getFullYear() - dob.getFullYear();
        let m = currrentDate.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && currrentDate.getDate() < dob.getDate())) {
            age--;
        }
        return age
    }
}

let amIt = new UserProfile("Amit Tyagi",["amit1947tyagi@gmail.com"],4,5,1993,"Male")
console.log(`*SOCIAL PROFILE*`)

console.log(`User Name : ${amIt.getUserName()}`)

console.log(`Email Address : ${amIt.getEmails()}`)

console.log(`Birthday : ${new Date(amIt.getBirthYear(),amIt.getBirthMonth()-1,amIt.getBirthDate())}`)

console.log(`Gender : ${amIt.getGender()}`)

amIt.setPhoneNumber(9457558571)

amIt.setSocialLink(["Instagram","still_speeding"],["twitter","i_am_it"])

amIt.setBloodGroup("AB+")

amIt.setInterestedIn("Male")

amIt.setLanguagesKnown("Hindi, English")

amIt.setAboutYou("Always, Looking for food.")

amIt.setRelationshipStatus("Engaged")

amIt.setFamilyMembers(["Brother","Vaibhav Tyagi"], ["Sister","Depika Tyagi"])

amIt.setCurrentCity("Bangalore")

amIt.setHomeTown("Muzaffarnagar")

console.log(`Phone number : ${amIt.getPhoneNumber()}`)

console.log(`social links : ${amIt.getSocialLinks()[0][0]} - ${amIt.getSocialLinks()[0][1]}, ${amIt.getSocialLinks()[1][0]} - ${amIt.getSocialLinks()[1][1]}`)

console.log(`Websites : ${amIt.getWebSite()}`)

console.log(`Age : ${amIt.getAge()}`)

console.log(`Blood group : ${amIt.getBloodGroup()}`)

console.log(`Interested In : ${amIt.getInterestedIn()}`)

console.log(`Languages : ${amIt.getLanguagesKnown()}`)

console.log(`Religious View : ${amIt.getReligiousViews()}`)

console.log(`Political View : ${amIt.getPolticalViews()}`)

console.log(`About You : ${amIt.getAboutYou()}`)

console.log(`Favorite Quote : ${amIt.getFavoriteQuote()}`)

console.log(`Relationship Status : ${amIt.getRelationshipStatus()}`)

console.log(`Family Member : ${amIt.getFamilyMembers()[0][0]} - ${amIt.getFamilyMembers()[0][1]}, ${amIt.getFamilyMembers()[1][0]} - ${amIt.getFamilyMembers()[1][1]}`)

console.log(`Worked At : ${amIt.getWorkPlaces()}`)

console.log(`Current City : ${amIt.getCurrentLocation()}`)

console.log(`Hometown : ${amIt.getHomeTown()}`)

console.log(`Education Details : ${amIt.getEducationDetails()}`)

console.log(`Life events: ${amIt.getLifeEvents()}`)
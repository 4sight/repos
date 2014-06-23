function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

var username = _.template( $('#headerData').html() );
var picThumb = _.template( $('#avatar').html() );
var picture = _.template( $('#sidebar').html() );

var pullData = function (data) {
	$('#headerDataWrap').html( username(data));
	$('#smallPic').html( picThumb(data));
	$('#side').html( picture(data));
};

var cID = clientID || '';
var cSECRET = clientSecret || '';

$.getJSON('https://api.github.com/users/4sight', {client_id: cID, client_secret: cSECRET}, function (data) {
	pullData(data);
});

var listing = _.template( $('#repos').html() );

var pullRepos = function (myRepos) {
	$('#main').html( listing(myRepos));
};

$.getJSON('https://api.github.com/users/4sight/repos', function (myRepos) {
		_.each( myRepos, function(a){
			$('#list').append( listing(a));
		});
});
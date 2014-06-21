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

var list = _.template( $('#repos').html() );

var pullData = function (myRepos) {
	$('#main').html( list(myRepos));
};

$.getJSON('https://api.github.com/users/4sight', {client_id: cID, client_secret: cSECRET}, function (myRepos) {
	pullData(myRepos);
});
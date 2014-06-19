var username = _.template( $('#headerData').html() );
var picThumb = _.template( $('#avatar').html() );

var pullData = function (data) {
	$('#headerDataWrap').html( username(data)) ;
	$('#smallPic').html( picThumb(data)) ;
};

var cID = clientID || '';
var cSECRET = clientSecret || '';

$.getJSON('https://api.github.com/users/4sight', {client_id: cID, client_secret: cSECRET}, function (data) {
	pullData(data);
});
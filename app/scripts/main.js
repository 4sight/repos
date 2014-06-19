var template = _.template( $('#headerData').html() );
var pullData = function (data) {
  $('#headerDataWrap').html( template(data)) ;
};

var cID = clientID || '';
var cSECRET = clientSecret || '';

$.getJSON('https://api.github.com/users/4sight', {client_id: cID, client_secret: cSECRET}, function (data) {
	pullData(data);
});
var OmnichannelApi = require('omnichannel_api');

var defaultClient = OmnichannelApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_MESSENTE_API_USERNAME';
basicAuth.password = 'YPUR_MESSENTE_API_PASSWORD';

var api = new OmnichannelApi.OmnimessageApi();
var body = new OmnichannelApi.Omnimessage(); // {Omnimessage} Omnimessage to be sent

var viber = new OmnichannelApi.Viber();
viber.text = "Hello Viber!";
viber.sender = "<sender name (optional field)>";

var sms = new OmnichannelApi.SMS();
sms.text = "Hello SMS!";
sms.sender = "<sender name (optional field)>";

// order of the messages in the array defines in which order the respective channels are tried
body.messages = [viber, sms];
body.to = "<phone number in international format>";


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};
api.sendOmnimessage(body, callback);

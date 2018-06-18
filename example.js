var OmnichannelApi = require('omnichannel_api');

var defaultClient = OmnichannelApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_MESSENTE_API_USERNAME';
basicAuth.password = 'YPUR_MESSENTE_API_PASSWORD';

var api = new OmnichannelApi.OmnimessageApi();
var body = new OmnichannelApi.Omnimessage(); // {Omnimessage} Omnimessage to be sent

var viber = new OmnichannelApi.Viber();
viber.text="Hello Viber!";
viber.sender = "<phone number or sender name (optional field)>";

var sms = new OmnichannelApi.SMS();
sms.text = "Hello SMS!";
sms.sender = "<phone number or sender name (optional field)>";

var scenarios = new OmnichannelApi.Scenarios();
var scenarioItemViber = new OmnichannelApi.ScenarioItem(channel=OmnichannelApi.ScenarioItem.ChannelEnum.viber);
var scenarioItemSms = new OmnichannelApi.ScenarioItem(channel=OmnichannelApi.ScenarioItem.ChannelEnum.sms);

body.scenarios = [scenarioItemViber, scenarioItemSms];
body.viber = viber;
body.sms = sms;
body.to = "<phone number>";


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};
api.sendOmnimessage(body, callback);

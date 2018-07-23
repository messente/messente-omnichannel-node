const OmnichannelApi = require('omnichannel_api');

const defaultClient = OmnichannelApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
const basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_MESSENTE_API_USERNAME';
basicAuth.password = 'YOUR_MESSENTE_API_PASSWORD';

const api = new OmnichannelApi.OmnimessageApi();

const viber = OmnichannelApi.Viber.constructFromObject(
    {
        text:"Hello Viber!",
        sender: "Messente",
    }
);

const sms = OmnichannelApi.SMS.constructFromObject(
    {
        text: "Hello SMS!",
    }
);

const omnimessage = OmnichannelApi.Omnimessage.constructFromObject({
    messages: [viber, sms],
    to:"+37253448365"
});

api.sendOmnimessage(omnimessage, (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ', data);
    }
});


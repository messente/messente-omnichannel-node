# Omnichannel API Client for Node

OmnichannelApiNode - NodeJS client for Messente's OmnichannelAPI

This is the client for the beta version of Omnichannel API

## Installation

#### git
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/omnichannel_api
then install it via:

```shell
    npm install YOUR_USERNAME/omnichannel_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
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

```

## Documentation for API Endpoints

All URIs are relative to *https://api.messente.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OmnichannelApi.OmnimessageApi* | [**sendOmnimessage**](docs/OmnimessageApi.md#sendOmnimessage) | **POST** /omnimessage | Sends an Omnimessage


## Documentation for Models

 - [OmnichannelApi.ErrorResponse](docs/ErrorResponse.md)
 - [OmnichannelApi.MessageResult](docs/MessageResult.md)
 - [OmnichannelApi.OmniMessageCreateSuccessResponse](docs/OmniMessageCreateSuccessResponse.md)
 - [OmnichannelApi.Omnimessage](docs/Omnimessage.md)
 - [OmnichannelApi.SMS](docs/SMS.md)
 - [OmnichannelApi.ScenarioItem](docs/ScenarioItem.md)
 - [OmnichannelApi.Scenarios](docs/Scenarios.md)
 - [OmnichannelApi.Viber](docs/Viber.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication


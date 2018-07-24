# omnichannel_api

OmnichannelApi - JavaScript client for omnichannel_api

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install omnichannel_api --save
```

##### Local development

To use the library locally , first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your omnichannel_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('omnichannel_api')` in javascript files from the directory you ran the last 
command above from.

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
    to:"<phone number in international format>"
});

api.sendOmnimessage(omnimessage, (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ', data);
    }
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.messente.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OmnichannelApi.DeliveryReportApi* | [**retrieveDeliveryReport**](docs/DeliveryReportApi.md#retrieveDeliveryReport) | **GET** /omnimessage/{omnimessage_id}/status | Retrieves the delivery report for the Omnimessage
*OmnichannelApi.OmnimessageApi* | [**cancelScheduledMessage**](docs/OmnimessageApi.md#cancelScheduledMessage) | **DELETE** /omnimessage/{omnimessage_id} | Cancels a scheduled Omnimessage
*OmnichannelApi.OmnimessageApi* | [**sendOmnimessage**](docs/OmnimessageApi.md#sendOmnimessage) | **POST** /omnimessage | Sends an Omnimessage


## Documentation for Models

 - [OmnichannelApi.Channel](docs/Channel.md)
 - [OmnichannelApi.DeliveryReportResponse](docs/DeliveryReportResponse.md)
 - [OmnichannelApi.DeliveryResult](docs/DeliveryResult.md)
 - [OmnichannelApi.Err](docs/Err.md)
 - [OmnichannelApi.ErrorItem](docs/ErrorItem.md)
 - [OmnichannelApi.ErrorResponse](docs/ErrorResponse.md)
 - [OmnichannelApi.Message](docs/Message.md)
 - [OmnichannelApi.MessageResult](docs/MessageResult.md)
 - [OmnichannelApi.OmniMessageCreateSuccessResponse](docs/OmniMessageCreateSuccessResponse.md)
 - [OmnichannelApi.Omnimessage](docs/Omnimessage.md)
 - [OmnichannelApi.ResponseErrorCode](docs/ResponseErrorCode.md)
 - [OmnichannelApi.ResponseErrorTitle](docs/ResponseErrorTitle.md)
 - [OmnichannelApi.SMS](docs/SMS.md)
 - [OmnichannelApi.Status](docs/Status.md)
 - [OmnichannelApi.Viber](docs/Viber.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication


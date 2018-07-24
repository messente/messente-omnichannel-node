# OmnichannelApi.OmnimessageApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelScheduledMessage**](OmnimessageApi.md#cancelScheduledMessage) | **DELETE** /omnimessage/{omnimessage_id} | Cancels a scheduled Omnimessage
[**sendOmnimessage**](OmnimessageApi.md#sendOmnimessage) | **POST** /omnimessage | Sends an Omnimessage


<a name="cancelScheduledMessage"></a>
# **cancelScheduledMessage**
> cancelScheduledMessage(omnimessageId)

Cancels a scheduled Omnimessage

### Example
```javascript
const OmnichannelApi = require('omnichannel_api');
const defaultClient = OmnichannelApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
const basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_MESSENTE_API_USERNAME';
basicAuth.password = 'YOUR_MESSENTE_API_PASSWORD';

const omnimessageId = null; // String | UUID of the scheduled Omnimessage to be cancelled
const api = new OmnichannelApi.OmnimessageApi();

api.cancelScheduledMessage(omnimessageId, (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ', data);
    }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omnimessageId** | [**String**](.md)| UUID of the scheduled Omnimessage to be cancelled | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendOmnimessage"></a>
# **sendOmnimessage**
> OmniMessageCreateSuccessResponse sendOmnimessage(omnimessage)

Sends an Omnimessage

### Example
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **omnimessage** | [**Omnimessage**](Omnimessage.md)| Omnimessage to be sent | 

### Return type

[**OmniMessageCreateSuccessResponse**](OmniMessageCreateSuccessResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


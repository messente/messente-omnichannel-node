# OmnichannelApi.OmnimessageApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendOmnimessage**](OmnimessageApi.md#sendOmnimessage) | **POST** /omnimessage | Sends an Omnimessage


<a name="sendOmnimessage"></a>
# **sendOmnimessage**
> OmniMessageCreateSuccessResponse sendOmnimessage(body)

Sends an Omnimessage



### Example
```javascript
var OmnichannelApi = require('omnichannel_api');
var defaultClient = OmnichannelApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new OmnichannelApi.OmnimessageApi();

var body = new OmnichannelApi.Omnimessage(); // Omnimessage | Omnimessage to be sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sendOmnimessage(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Omnimessage**](Omnimessage.md)| Omnimessage to be sent | 

### Return type

[**OmniMessageCreateSuccessResponse**](OmniMessageCreateSuccessResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


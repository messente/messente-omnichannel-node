# OmnichannelApi.DeliveryReportApi

All URIs are relative to *https://api.messente.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveDeliveryReport**](DeliveryReportApi.md#retrieveDeliveryReport) | **GET** /omnimessage/{omnimessage_id}/status | Retrieves the delivery report for the Omnimessage


<a name="retrieveDeliveryReport"></a>
# **retrieveDeliveryReport**
> DeliveryReportResponse retrieveDeliveryReport(omnimessageId)

Retrieves the delivery report for the Omnimessage

### Example
```javascript
const OmnichannelApi = require('omnichannel_api');
const defaultClient = OmnichannelApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
const basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR_MESSENTE_API_USERNAME';
basicAuth.password = 'YOUR_MESSENTE_API_PASSWORD';

const api = new OmnichannelApi.DeliveryReportApi();
const omnimessageId = null; // String | UUID of the Omnimessage to for which the delivery report is to be retrieved

api.retrieveDeliveryReport(omnimessageId, (error, data) => {
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
 **omnimessageId** | [**String**](.md)| UUID of the Omnimessage to for which the delivery report is to be retrieved | 

### Return type

[**DeliveryReportResponse**](DeliveryReportResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


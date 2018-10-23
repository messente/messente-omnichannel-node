# OmnichannelApi.DeliveryResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**Status**](Status.md) |  | [optional] 
**channel** | [**Channel**](Channel.md) |  | [optional] 
**messageId** | **String** | Unique identifier for the message | [optional] 
**error** | **String** | Human-readable description of what went wrong, *null* in case of success or if the messages has not been processed yet | [optional] 
**err** | **Number** | Machine-readable error code, &#x60;null&#x60; when the message has not been processed yet * 0 - No error * 1 - Delivery failure * 2 - Sending message expired * 3 - Invalid number * 4 - Error crediting account * 5 - Invalid number format * 6 - Too many identical messages * 7 - Sender name not allowed * 8 - Operator blacklisted * 9 - Unroutable * 999 - General temporary error  | [optional]
**timestamp** | **Date** | When this status was received by Omnichannel API | [optional] 



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


<a name="ErrEnum"></a>
## Enum: ErrEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)

* `8` (value: `8`)

* `9` (value: `9`)

* `999` (value: `999`)





# OmnichannelApi.Viber

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender** | **String** | Phone number or alphanumeric sender name | [optional] 
**validity** | **Number** | After how many minutes this channel is considered as failed and the next channel is attempted | [optional] 
**text** | **String** | Plaintext content for Viber | [optional] 
**imageUrl** | **String** | URL for the embedded image. Valid combinations: 1) &#39;image_url&#39; 2) &#39;text&#39;, &#39;image_url&#39;, &#39;button_url&#39;, &#39;button_text&#39; | [optional] 
**buttonUrl** | **String** | URL of the button, must be specified along with &#39;text&#39;, &#39;button_text&#39;  and &#39;image_url&#39; (optional) | [optional] 
**buttonText** | **String** | Must be specified along with &#39;text&#39;, &#39;button_url&#39;, &#39;button_text&#39;, &#39;image_url&#39; (optional) | [optional] 
**channel** | **String** |  | [optional] [default to &#39;viber&#39;]



/**
 * Omnichannel API
 * Messente's API which allows sending messages via various channels with fallback options.
 *
 * OpenAPI spec version: 0.0.2
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OmnichannelApi) {
      root.OmnichannelApi = {};
    }
    root.OmnichannelApi.SMS = factory(root.OmnichannelApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SMS model module.
   * @module model/SMS
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SMS</code>.
   * SMS message content
   * @alias module:model/SMS
   * @class
   * @param text {String} Text content of the SMS
   */
  var exports = function(text) {
    var _this = this;

    _this['text'] = text;
  };

  /**
   * Constructs a <code>SMS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMS} obj Optional instance to populate.
   * @return {module:model/SMS} The populated <code>SMS</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
      if (data.hasOwnProperty('validity')) {
        obj['validity'] = ApiClient.convertToType(data['validity'], 'Number');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('autoconvert')) {
        obj['autoconvert'] = ApiClient.convertToType(data['autoconvert'], 'String');
      }
      if (data.hasOwnProperty('udh')) {
        obj['udh'] = ApiClient.convertToType(data['udh'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
    }
    return obj;
  }

  /**
   * Phone number or alphanumeric sender name
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * After how many minutes this channel is considered as failed and the next channel is attempted
   * @member {Number} validity
   */
  exports.prototype['validity'] = undefined;
  /**
   * Text content of the SMS
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Defines how non-GSM characters will be treated: - \"on\" Use replacement settings from the account's [API Auto Replace settings page](https://dashboard.messente.com/api-settings/auto-replace)(default) - \"full\" All non GSM 03.38 characters will be replaced with suitable alternatives - \"off\" Message content is not modified in any way 
   * @member {module:model/SMS.AutoconvertEnum} autoconvert
   */
  exports.prototype['autoconvert'] = undefined;
  /**
   * hex-encoded string containing SMS UDH
   * @member {String} udh
   */
  exports.prototype['udh'] = undefined;
  /**
   * @member {String} channel
   * @default 'sms'
   */
  exports.prototype['channel'] = 'sms';


  /**
   * Allowed values for the <code>autoconvert</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AutoconvertEnum = {
    /**
     * value: "full"
     * @const
     */
    "full": "full",
    /**
     * value: "on"
     * @const
     */
    "on": "on",
    /**
     * value: "off"
     * @const
     */
    "off": "off"  };


  return exports;
}));



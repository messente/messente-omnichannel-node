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
 * OpenAPI Generator version: 3.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Channel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Channel'));
  } else {
    // Browser globals (root is window)
    if (!root.OmnichannelApi) {
      root.OmnichannelApi = {};
    }
    root.OmnichannelApi.MessageResult = factory(root.OmnichannelApi.ApiClient, root.OmnichannelApi.Channel);
  }
}(this, function(ApiClient, Channel) {
  'use strict';




  /**
   * The MessageResult model module.
   * @module model/MessageResult
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>MessageResult</code>.
   * @alias module:model/MessageResult
   * @class
   * @param messageId {String} Unique identifier for the message
   * @param channel {module:model/Channel} 
   * @param sender {String} Sender that was used for the message
   */
  var exports = function(messageId, channel, sender) {
    var _this = this;

    _this['message_id'] = messageId;
    _this['channel'] = channel;
    _this['sender'] = sender;
  };

  /**
   * Constructs a <code>MessageResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageResult} obj Optional instance to populate.
   * @return {module:model/MessageResult} The populated <code>MessageResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message_id')) {
        obj['message_id'] = ApiClient.convertToType(data['message_id'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = Channel.constructFromObject(data['channel']);
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = ApiClient.convertToType(data['sender'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the message
   * @member {String} message_id
   */
  exports.prototype['message_id'] = undefined;
  /**
   * @member {module:model/Channel} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * Sender that was used for the message
   * @member {String} sender
   */
  exports.prototype['sender'] = undefined;



  return exports;
}));



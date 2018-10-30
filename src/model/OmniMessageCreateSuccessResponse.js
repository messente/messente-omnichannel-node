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
    define(['ApiClient', 'model/MessageResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MessageResult'));
  } else {
    // Browser globals (root is window)
    if (!root.OmnichannelApi) {
      root.OmnichannelApi = {};
    }
    root.OmnichannelApi.OmniMessageCreateSuccessResponse = factory(root.OmnichannelApi.ApiClient, root.OmnichannelApi.MessageResult);
  }
}(this, function(ApiClient, MessageResult) {
  'use strict';




  /**
   * The OmniMessageCreateSuccessResponse model module.
   * @module model/OmniMessageCreateSuccessResponse
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>OmniMessageCreateSuccessResponse</code>.
   * @alias module:model/OmniMessageCreateSuccessResponse
   * @class
   * @param messages {Array.<module:model/MessageResult>} List of messages that compose the Omnimessage
   * @param to {String} Recipient phone number in e.164 format
   * @param omnimessageId {String} Unique identifier for the Omnimessage
   */
  var exports = function(messages, to, omnimessageId) {
    var _this = this;

    _this['messages'] = messages;
    _this['to'] = to;
    _this['omnimessage_id'] = omnimessageId;
  };

  /**
   * Constructs a <code>OmniMessageCreateSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OmniMessageCreateSuccessResponse} obj Optional instance to populate.
   * @return {module:model/OmniMessageCreateSuccessResponse} The populated <code>OmniMessageCreateSuccessResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [MessageResult]);
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('omnimessage_id')) {
        obj['omnimessage_id'] = ApiClient.convertToType(data['omnimessage_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * List of messages that compose the Omnimessage
   * @member {Array.<module:model/MessageResult>} messages
   */
  exports.prototype['messages'] = undefined;
  /**
   * Recipient phone number in e.164 format
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Unique identifier for the Omnimessage
   * @member {String} omnimessage_id
   */
  exports.prototype['omnimessage_id'] = undefined;



  return exports;
}));



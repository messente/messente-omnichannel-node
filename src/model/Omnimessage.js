/**
 * Omnichannel API
 * This is the beta version of Omnichannel API
 *
 * OpenAPI spec version: 0.0.1
 * Contact: messente@messente.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.1.0-SNAPSHOT
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
    root.OmnichannelApi.Omnimessage = factory(root.OmnichannelApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Omnimessage model module.
   * @module model/Omnimessage
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Omnimessage</code>.
   * @alias module:model/Omnimessage
   * @class
   * @param messages {Array.<Object>} 
   * @param to {String} Phone number of the recipient in international number format
   */
  var exports = function(messages, to) {
    var _this = this;

    _this['messages'] = messages;
    _this['to'] = to;


  };

  /**
   * Constructs a <code>Omnimessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Omnimessage} obj Optional instance to populate.
   * @return {module:model/Omnimessage} The populated <code>Omnimessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], [Object]);
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('drl_url')) {
        obj['drl_url'] = ApiClient.convertToType(data['drl_url'], 'String');
      }
      if (data.hasOwnProperty('time_to_send')) {
        obj['time_to_send'] = ApiClient.convertToType(data['time_to_send'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} messages
   */
  exports.prototype['messages'] = undefined;
  /**
   * Phone number of the recipient in international number format
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * URL where the delivery report will be sent
   * @member {String} drl_url
   */
  exports.prototype['drl_url'] = undefined;
  /**
   * Optional parameter for sending messages at some specific time in the future. Time must be specified in the 8601 format. If no timezone is specified, then the timezone is assumed to be UTC. Examples: Time specified with timezone: 2018-06-22T09:05:07+00:00 Time specified in UTC: 2018-06-22T09:05:07Z Time specified without timezone: 2018-06-22T09:05 (equivalent to 2018-06-22T09:05+00:00) 
   * @member {Date} time_to_send
   */
  exports.prototype['time_to_send'] = undefined;



  return exports;
}));



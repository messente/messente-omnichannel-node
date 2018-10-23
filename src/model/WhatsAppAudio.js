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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OmnichannelApi) {
      root.OmnichannelApi = {};
    }
    root.OmnichannelApi.WhatsAppAudio = factory(root.OmnichannelApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WhatsAppAudio model module.
   * @module model/WhatsAppAudio
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>WhatsAppAudio</code>.
   * @alias module:model/WhatsAppAudio
   * @class
   * @param content {String} Base64-encoded audio
   */
  var exports = function(content) {
    var _this = this;

    _this['content'] = content;
  };

  /**
   * Constructs a <code>WhatsAppAudio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhatsAppAudio} obj Optional instance to populate.
   * @return {module:model/WhatsAppAudio} The populated <code>WhatsAppAudio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }

  /**
   * Base64-encoded audio
   * @member {String} content
   */
  exports.prototype['content'] = undefined;



  return exports;
}));


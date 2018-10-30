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
    define(['ApiClient', 'model/Message', 'model/WhatsAppAudio', 'model/WhatsAppDocument', 'model/WhatsAppImage', 'model/WhatsAppText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Message'), require('./WhatsAppAudio'), require('./WhatsAppDocument'), require('./WhatsAppImage'), require('./WhatsAppText'));
  } else {
    // Browser globals (root is window)
    if (!root.OmnichannelApi) {
      root.OmnichannelApi = {};
    }
    root.OmnichannelApi.WhatsApp = factory(root.OmnichannelApi.ApiClient, root.OmnichannelApi.Message, root.OmnichannelApi.WhatsAppAudio, root.OmnichannelApi.WhatsAppDocument, root.OmnichannelApi.WhatsAppImage, root.OmnichannelApi.WhatsAppText);
  }
}(this, function(ApiClient, Message, WhatsAppAudio, WhatsAppDocument, WhatsAppImage, WhatsAppText) {
  'use strict';




  /**
   * The WhatsApp model module.
   * @module model/WhatsApp
   * @version 0.0.2
   */

  /**
   * Constructs a new <code>WhatsApp</code>.
   * @alias module:model/WhatsApp
   * @class
   * @extends module:model/Message
   * @implements module:model/Message
   * @param channel {} 
   */
  var exports = function(channel) {
    var _this = this;
    Message.call(_this, channel);
    Message.call(_this, channel);
    _this['channel'] = "whatsapp";




  };

  /**
   * Constructs a <code>WhatsApp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WhatsApp} obj Optional instance to populate.
   * @return {module:model/WhatsApp} The populated <code>WhatsApp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Message.constructFromObject(data, obj);
      Message.constructFromObject(data, obj);
      if (data.hasOwnProperty('text')) {
        obj['text'] = WhatsAppText.constructFromObject(data['text']);
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = WhatsAppImage.constructFromObject(data['image']);
      }
      if (data.hasOwnProperty('document')) {
        obj['document'] = WhatsAppDocument.constructFromObject(data['document']);
      }
      if (data.hasOwnProperty('audio')) {
        obj['audio'] = WhatsAppAudio.constructFromObject(data['audio']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Message.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/WhatsAppText} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/WhatsAppImage} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {module:model/WhatsAppDocument} document
   */
  exports.prototype['document'] = undefined;
  /**
   * @member {module:model/WhatsAppAudio} audio
   */
  exports.prototype['audio'] = undefined;

  // Implement Message interface:
  /**
   * @member {String} channel
   */
exports.prototype['channel'] = undefined;

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



  return exports;
}));



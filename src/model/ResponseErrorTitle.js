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
    root.OmnichannelApi.ResponseErrorTitle = factory(root.OmnichannelApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class ResponseErrorTitle.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Not found"
     * @const
     */
    "Not found": "Not found",
    /**
     * value: "Forbidden"
     * @const
     */
    "Forbidden": "Forbidden",
    /**
     * value: "Unauthorized"
     * @const
     */
    "Unauthorized": "Unauthorized",
    /**
     * value: "Invalid data"
     * @const
     */
    "Invalid data": "Invalid data",
    /**
     * value: "Internal Server Error"
     * @const
     */
    "Internal Server Error": "Internal Server Error",
    /**
     * value: "Missing data"
     * @const
     */
    "Missing data": "Missing data"  };

  /**
   * Returns a <code>ResponseErrorTitle</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ResponseErrorTitle} The enum <code>ResponseErrorTitle</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


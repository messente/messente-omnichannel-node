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
    define(['ApiClient', 'model/DeliveryReportResponse', 'model/ErrorResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeliveryReportResponse'), require('../model/ErrorResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.OmnichannelApi) {
      root.OmnichannelApi = {};
    }
    root.OmnichannelApi.DeliveryReportApi = factory(root.OmnichannelApi.ApiClient, root.OmnichannelApi.DeliveryReportResponse, root.OmnichannelApi.ErrorResponse);
  }
}(this, function(ApiClient, DeliveryReportResponse, ErrorResponse) {
  'use strict';

  /**
   * DeliveryReport service.
   * @module omnichannel_api/DeliveryReportApi
   * @version 0.0.1
   */

  /**
   * Constructs a new DeliveryReportApi. 
   * @alias module:omnichannel_api/DeliveryReportApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the retrieveDeliveryReport operation.
     * @callback module:omnichannel_api/DeliveryReportApi~retrieveDeliveryReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeliveryReportResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the delivery report for the Omnimessage
     * @param {String} omnimessageId UUID of the Omnimessage to for which the delivery report is to be retrieved
     * @param {module:omnichannel_api/DeliveryReportApi~retrieveDeliveryReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeliveryReportResponse}
     */
    this.retrieveDeliveryReport = function(omnimessageId, callback) {
      var postBody = null;

      // verify the required parameter 'omnimessageId' is set
      if (omnimessageId === undefined || omnimessageId === null) {
        throw new Error("Missing the required parameter 'omnimessageId' when calling retrieveDeliveryReport");
      }


      var pathParams = {
        'omnimessage_id': omnimessageId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = DeliveryReportResponse;

      return this.apiClient.callApi(
        '/omnimessage/{omnimessage_id}/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

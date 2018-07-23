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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OmnichannelApi);
  }
}(this, function(expect, OmnichannelApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OmnichannelApi.DeliveryResult();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeliveryResult', function() {
    it('should create an instance of DeliveryResult', function() {
      // uncomment below and update the code to test DeliveryResult
      //var instance = new OmnichannelApi.DeliveryResult();
      //expect(instance).to.be.a(OmnichannelApi.DeliveryResult);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new OmnichannelApi.DeliveryResult();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new OmnichannelApi.DeliveryResult();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new OmnichannelApi.DeliveryResult();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instance = new OmnichannelApi.DeliveryResult();
      //expect(instance).to.be();
    });

    it('should have the property err (base name: "err")', function() {
      // uncomment below and update the code to test the property err
      //var instance = new OmnichannelApi.DeliveryResult();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new OmnichannelApi.DeliveryResult();
      //expect(instance).to.be();
    });

  });

}));
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
    instance = new OmnichannelApi.WhatsApp();
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

  describe('WhatsApp', function() {
    it('should create an instance of WhatsApp', function() {
      // uncomment below and update the code to test WhatsApp
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be.a(OmnichannelApi.WhatsApp);
    });

    it('should have the property sender (base name: "sender")', function() {
      // uncomment below and update the code to test the property sender
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be();
    });

    it('should have the property validity (base name: "validity")', function() {
      // uncomment below and update the code to test the property validity
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be();
    });

    it('should have the property document (base name: "document")', function() {
      // uncomment below and update the code to test the property document
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be();
    });

    it('should have the property audio (base name: "audio")', function() {
      // uncomment below and update the code to test the property audio
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new OmnichannelApi.WhatsApp();
      //expect(instance).to.be();
    });

  });

}));

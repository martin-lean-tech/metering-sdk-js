/*
 * Revenium Metering API
 * Revenium Metering API
 *
 * OpenAPI spec version: 1.14.0-SNAPSHOT
 * Contact: info@revenium.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
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
    factory(root.expect, root.ReveniumMeteringApi);
  }
}(this, function(expect, ReveniumMeteringApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ElementDTO', function() {
      beforeEach(function() {
        instance = new ReveniumMeteringApi.ElementDTO();
      });

      it('should create an instance of ElementDTO', function() {
        // TODO: update the code to test ElementDTO
        expect(instance).to.be.a(ReveniumMeteringApi.ElementDTO);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));

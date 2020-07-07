"use strict";

var expect = require('chai').expect;
var indx = require('../index')

describe('ImageResize Test', function() {
    
	describe('#ImageResize()', function() {
        it('Should return width 320', function() {
			
			indx.ImageResize().then(imgsz=>
			{expect(imgsz).to.be.equal(320);}
			);
		
        });
    });
});
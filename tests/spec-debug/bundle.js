/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zapBaseJsObject = __webpack_require__(1);

	describe('zap-base-js-object', function () {
	    beforeEach(function () {});

	    afterEach(function () {});

	    describe('zap-base-js-object should have the following methods', function () {
	        it('assign', function () {
	            expect(_zapBaseJsObject.assign).toEqual(jasmine.any(Function));
	        });

	        it('clone', function () {
	            expect(_zapBaseJsObject.clone).toEqual(jasmine.any(Function));
	        });

	        it('extend', function () {
	            expect(_zapBaseJsObject.extend).toEqual(jasmine.any(Function));
	        });

	        it('each', function () {
	            expect(_zapBaseJsObject.each).toEqual(jasmine.any(Function));
	        });

	        it('forEach', function () {
	            expect(_zapBaseJsObject.forEach).toEqual(jasmine.any(Function));
	        });

	        it('length', function () {
	            expect(_zapBaseJsObject.length).toEqual(jasmine.any(Function));
	        });
	    });

	    describe('assign', function () {
	        it('zapObjectAssign({}, {x:1, y:1}, {x:2}) should be equal to {x:2, y:1}', function () {
	            var obj1 = {
	                x: 1,
	                y: 1
	            };
	            var obj2 = (0, _zapBaseJsObject.assign)({}, obj1, {
	                x: 2
	            });

	            expect(obj2).toEqual({
	                x: 2,
	                y: 1
	            });
	        });
	    });

	    describe('extend', function () {
	        it('zapObjectExtend({}, {x:1, y:1}, {x:2}) should be equal to {x:2, y:1}', function () {
	            var obj1 = {
	                x: 1,
	                y: 1
	            };
	            var obj2 = (0, _zapBaseJsObject.extend)({}, obj1, {
	                x: 2
	            });

	            expect(obj2).toEqual({
	                x: 2,
	                y: 1
	            });
	        });
	    });

	    describe('clone', function () {
	        it('zapObjectClone() cloned object should be a new object', function () {
	            var obj = {
	                x: 1,
	                y: 1
	            };
	            var objClone = (0, _zapBaseJsObject.clone)(obj);

	            expect(obj === objClone).toEqual(false);
	        });
	    });

	    describe('each', function () {
	        it('zapObjectEach({x:1, y:1}) should return xy2', function () {
	            var obj = {
	                x: 1,
	                y: 1
	            };
	            var values = 0;
	            var result = '';

	            (0, _zapBaseJsObject.each)(obj, function (value, key) {
	                values += value;
	                result += key;
	            });

	            result += '' + values;

	            expect(result).toEqual('xy2');
	        });
	    });

	    describe('forEach', function () {
	        it('zapBaseObjectForEach({x:1, y:1}) should return xy2', function () {
	            var obj = {
	                x: 1,
	                y: 1
	            };
	            var values = 0;
	            var result = '';

	            (0, _zapBaseJsObject.forEach)(obj, function (value, key) {
	                values += value;
	                result += key;
	            });

	            result += '' + values;

	            expect(result).toEqual('xy2');
	        });
	    });

	    describe('length', function () {
	        it('zapBaseObjectLength({x:1, y:1}) should return 2', function () {
	            var obj = {
	                x: 1,
	                y: 1
	            };

	            expect((0, _zapBaseJsObject.length)(obj)).toEqual(2);
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.assign = assign;
	exports.clone = clone;
	exports.each = each;
	exports.length = length;

	/**
	 * @param {...Object} [obj]
	 * @returns {Object}
	 */
	function assign() {
	    return _extends.apply(undefined, [{}].concat(Array.prototype.slice.call(arguments)));
	}

	/**
	 * @param {Object} obj
	 * @returns {Object}
	 */
	function clone(obj) {
	    return _extends({}, obj);
	}

	/**
	 * @alias of assign
	 * @param {...Object} [obj]
	 * @returns {Object}
	 */
	exports.extend = assign;

	/**
	 * @param {object} obj
	 * @param {Function} fn
	 */

	function each(obj, fn) {
	    Object.keys(obj).forEach(function (key) {
	        fn(obj[key], key);
	    });
	}

	/**
	 * @alias of each
	 * @param {object} obj
	 * @param {Function} fn
	 */
	exports.forEach = each;

	/**
	 * @param {Object} obj
	 * @returns {Number}
	 */

	function length(obj) {
	    return Object.keys(obj).length;
	}

/***/ }
/******/ ]);
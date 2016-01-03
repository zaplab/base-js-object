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
    return _extends({}, ...arguments);
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
    Object.keys(obj).forEach(key => {
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

/**
 * @param {...Object} [obj]
 * @returns {Object}
 */
export function assign() {
    return Object.assign({}, ...arguments);
}

/**
 * @param {Object} obj
 * @returns {Object}
 */
export function clone(obj) {
    return Object.assign({}, obj);
}

/**
 * @alias of assign
 * @param {...Object} [obj]
 * @returns {Object}
 */
export {
    assign as extend,
};

/**
 * @param {object} obj
 * @param {Function} fn
 */
export function each(obj, fn) {
    Object.keys(obj).forEach(key => {
        fn(obj[key], key);
    });
}

/**
 * @alias of each
 * @param {object} obj
 * @param {Function} fn
 */
export {
    each as forEach,
};

/**
 * @param {Object} obj
 * @returns {Number}
 */
export function length(obj) {
    return Object.keys(obj).length;
}

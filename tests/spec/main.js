
require('babel-polyfill');

import {
    assign as zapObjectAssign,
    clone as zapObjectClone,
    extend as zapObjectExtend,
    each as zapObjectEach,
    forEach as zapObjectForEach,
    length as zapObjectLength,
} from 'zap-base-js-object';

describe('zap-base-js-object', () => {
    beforeEach(() => {
    });

    afterEach(() => {
    });

    describe('zap-base-js-object should have the following methods', () => {
        it('assign', () => {
            expect(zapObjectAssign).toEqual(jasmine.any(Function));
        });

        it('clone', () => {
            expect(zapObjectClone).toEqual(jasmine.any(Function));
        });

        it('extend', () => {
            expect(zapObjectExtend).toEqual(jasmine.any(Function));
        });

        it('each', () => {
            expect(zapObjectEach).toEqual(jasmine.any(Function));
        });

        it('forEach', () => {
            expect(zapObjectForEach).toEqual(jasmine.any(Function));
        });

        it('length', () => {
            expect(zapObjectLength).toEqual(jasmine.any(Function));
        });
    });

    describe('assign', () => {
        it('zapObjectAssign({}, {x:1, y:1}, {x:2}) should be equal to {x:2, y:1}', () => {
            const obj1 = {
                x: 1,
                y: 1,
            };
            const obj2 = zapObjectAssign({}, obj1, {
                x: 2,
            });

            expect(obj2).toEqual({
                x: 2,
                y: 1,
            });
        });
    });

    describe('extend', () => {
        it('zapObjectExtend({}, {x:1, y:1}, {x:2}) should be equal to {x:2, y:1}', () => {
            const obj1 = {
                x: 1,
                y: 1,
            };
            const obj2 = zapObjectExtend({}, obj1, {
                x: 2,
            });

            expect(obj2).toEqual({
                x: 2,
                y: 1,
            });
        });
    });

    describe('clone', () => {
        it('zapObjectClone() cloned object should be a new object', () => {
            const obj = {
                x: 1,
                y: 1,
            };
            const objClone = zapObjectClone(obj);

            expect(obj === objClone).toEqual(false);
        });
    });

    describe('each', () => {
        it('zapObjectEach({x:1, y:1}) should return xy2', () => {
            const obj = {
                x: 1,
                y: 1,
            };
            let values = 0;
            let result = '';

            zapObjectEach(obj, function (value, key) {
                values += value;
                result += key;
            });

            result += ('' + values);

            expect(result).toEqual('xy2');
        });
    });

    describe('forEach', () => {
        it('zapBaseObjectForEach({x:1, y:1}) should return xy2', () => {
            const obj = {
                x: 1,
                y: 1,
            };
            let values = 0;
            let result = '';

            zapObjectForEach(obj, function (value, key) {
                values += value;
                result += key;
            });

            result += ('' + values);

            expect(result).toEqual('xy2');
        });
    });

    describe('length', () => {
        it('zapBaseObjectLength({x:1, y:1}) should return 2', () => {
            var obj = {
                x: 1,
                y: 1,
            };

            expect(zapObjectLength(obj)).toEqual(2);
        });
    });
});

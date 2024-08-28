const Myclass = require('./myclass');

/**
 * @author diego
 * @since 1.0.0
 */
describe('Myclass first class', () => {


    test('sum of two natural numbers', () => {

        let obj = new Myclass();

        expect(obj.sum(150, 150)).toBe(300);

    });

});
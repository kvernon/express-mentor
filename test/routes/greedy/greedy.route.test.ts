'use strict';

const get = require('../../../src/routes/greedy/get-hello');

describe('get-hello unit tests', () => {
    describe('and calling route', () => {
        test('should return "hello"', () => {
            const response = {
                send: jest.fn()
            };

            get.getHello(null, response);

            expect(response.send).toBeCalledWith('hello');
        });
    });
});

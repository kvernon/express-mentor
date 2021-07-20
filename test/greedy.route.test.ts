'use strict';

const route = require('./../src/greedy.route');

describe('greedy.route unit tests', () => {
    describe('and useRoute', () => {
        test('should call', () => {
            const server = {get: jest.fn()};

            route.useRoute(server);

            expect(server.get).toBeCalledWith('/', expect.any(Function));
        });
    });

    describe('and calling route', () => {
        test('should return "hello"', () => {
            const response = {
                send: jest.fn()
            };

            route.routeMethod(null, response);

            expect(response.send).toBeCalledWith('hello');
        });
    });
});

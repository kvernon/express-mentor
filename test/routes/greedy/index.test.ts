'use strict';

const route = require('../../../src/routes/greedy');

describe('greedy unit tests', () => {
    describe('and useRoute', () => {
        test('should call', () => {
            const server = {
                use: jest.fn()
            };

            route.useRoute(server);

            expect(server.use).toBeCalledWith('/', expect.any(Function));
        });
    });
});

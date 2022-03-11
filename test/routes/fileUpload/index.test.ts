const route = require('../../../src/routes/fileUpload');

describe('fileUpload index unit tests', () => {
    describe('and useRoute', () => {
        test('should call', () => {
            const server = {all: jest.fn()};

            route.useRoute(server);

            expect(server.all).toBeCalledWith('/file', expect.any(Function));
        });
    });
});

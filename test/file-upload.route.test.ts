const route = require('../src/routes/file-upload.route');

describe('file-upload.route unit tests', () => {
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
                status: jest.fn()
            };

            route.postUpload(null, response);

            expect(response.status).toBeCalledWith(202);
        });
    });
});

jest.mock('./../src/greedy.route');

describe('starting unit tests', () => {
    let app;
    let expressMock;
    let server;
    let greedy;

    beforeEach(() => {
        server = {
            get: jest.fn(),
            listen: jest.fn()
        };

        jest.doMock('express', () => {
            expressMock = jest.fn().mockReturnValueOnce(server);
            return expressMock;
        });
        app = require('./../src/app');

        greedy = require('./../src/greedy.route');
    });

    afterEach(() => {
        server = null;
        app = null;
        expressMock = null;
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    describe('and bootstrap', () => {
        test('should run', () => {
            app.bootstrap();

            expect(expressMock).toBeCalled();
            expect(server.get).toBeCalledWith(greedy.route, greedy.method);
            expect(server.listen).toBeCalledWith(3000, expect.any(Function));
        });
    });
});

/**

 FileUpload
    Uploader::S3
       presignedUrl
         Configurefile
         WebClient
            Axios
 */

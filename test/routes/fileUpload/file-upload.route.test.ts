const {postUpload} = require('../../../src/routes/fileUpload/postUpload');

describe('post upload unit tests', () => {
    describe('and calling route', () => {
        test('should return "hello"', () => {
            const response = {
                status: jest.fn()
            };

            postUpload(null, response);

            expect(response.status).toBeCalledWith(202);
        });
    });
});

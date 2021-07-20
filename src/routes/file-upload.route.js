const postUpload = (req, res) => {

    res.status(202);
};

module.exports.postUpload = postUpload

module.exports.useRoute = (server) => {
    server.get('/', postUpload);
}



//THIS IS ONLY TO BYPASS THE PARCEL ERROR NOT LOADING EXTERNAL IMAGES LOCALLY
module.exports = function (app) {
    app.use((req, res, next) => {
        res.removeHeader('Cross-Origin-Resource-Policy');
        res.removeHeader('Cross-Origin-Embedder-Policy');
        next();
    });
};
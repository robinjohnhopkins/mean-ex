// app/routes.js

// make the routes available to our application with module.exports
module.exports = function(app) {
    // application -------------------------------------------------------------
    // the default route for our application that serves the index.html
    app.get('/original', function(req, res) {
        res.sendFile('./public/index1.html', { root: __dirname });
    });
    app.get('/', function(req, res) {
        res.sendFile('./public/index.html', { root: __dirname });
    });

};

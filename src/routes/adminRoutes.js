var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [{
    title: 'Book 1',
    gener: 'Gener 1',
    author: 'Author 1',
    read: false
}, {
    title: 'Book 2',
    gener: 'Gener 2',
    author: 'Author 2',
    read: false
}, {
    title: 'Book 3',
    gener: 'Gener 3',
    author: 'Author 3',
    read: false
}, {
    title: 'Book 4',
    gener: 'Gener 4',
    author: 'Author 4',
    read: false
}, {
    title: 'Book 5',
    gener: 'Gener 5',
    author: 'Author 5',
    read: false
}];

var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url =
                'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    });
            });
            //res.send('Inserting Books ...');
        });

    return adminRouter;
};

module.exports = router;
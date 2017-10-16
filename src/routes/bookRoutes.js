var express = require('express');
var bookRouter = express.Router();

var router = function(nav){
    var books = [{
        title: 'Book 1',
        gener: 'Gener 1',
        author: 'Aothor 1',
        read: false
    }, {
        title: 'Book 2',
        gener: 'Gener 2',
        author: 'Aothor 2',
        read: false
    }, {
        title: 'Book 3',
        gener: 'Gener 3',
        author: 'Aothor 3',
        read: false
    }, {
        title: 'Book 4',
        gener: 'Gener 4',
        author: 'Aothor 4',
        read: false
    }, {
        title: 'Book 5',
        gener: 'Gener 5',
        author: 'Aothor 5',
        read: false
    }];
    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Books Page',
                nav: nav,
                books: books
            });
        });
    
    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books Page',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
}

module.exports = router;
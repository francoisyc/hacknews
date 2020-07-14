
const path = require('path');
const db = require('./db');


module.exports = {
    showIndex(req, res) {
        db.getAllNews(data => {
            res.render('index.html', { list: data });
        })
    },
    showDetails(req, res) {
        let id = req.query.id;
        db.getNewsById(id, data => {
            res.render('details.html', data);
        })
    },
    showSubmit(req, res) {
        res.sendFile(path.join(__dirname, 'pages', 'submit.html'));
    },
    addPost(req, res) {
        let info = req.body;
        db.insertNews(info, () => {
            res.redirect('/');
        })
    }
}



// 启动服务器
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express(); //

app.engine('html', require('express-art-template'));
app.set('views', './pages');
app.use('/assets', express.static('assets'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router); 

app.use('/index', (req, res) => { })




app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));
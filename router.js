// 路由模块
const router = require('express').Router(); 
const handler = require('./hanlder');

router.get('/', (req, res) => {      
    handler.showIndex(req, res);
})

router.get('/index', (req, res) => {
    handler.showIndex(req, res);
})
// 详情页
router.get('/details', (req, res) => {
    handler.showDetails(req, res);
})
// 提交页
router.get('/submit', (req, res) => {
    handler.showSubmit(req, res);
})
// 添加
router.post('/add', (req, res) => {
    handler.addPost(req, res);
})

module.exports = router; 





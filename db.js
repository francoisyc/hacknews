
const mongodb = require('mongodb'); 

// 创建客户端
const mongodbClient = mongodb.MongoClient;  
const url = 'mongodb://127.0.0.1:27017';

module.exports = {
    getAllNews(fn) {
        conDB(news => {
            news.find().toArray((err, data) => {
                if (err) { return console.log(err); }
                fn && fn(data) 
            })
        })
    },
    getNewsById(id, fn) {
        id = new mongodb.ObjectID(id);
        conDB(news => {
            news.find({ _id: id }).toArray((err, data) => {
                if (err) { return console.log(err); }
                fn && fn (data[0])
            })
        })
    },
    insertNews(info, fn) {
        conDB(news => {
            news.insert(info);
            fn && fn();
        })
    }
}



// 封装连接数据库方法
function conDB(fn) {
    mongodbClient.connect(url, (err, client) => {
        if (err) {
            return console.log('数据库连接失败', err);
        }
        const news = client.db('hk').collection('news');
        fn && fn(news);
        client.close();
    })
}
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient }  = require("mongodb");
const cors = require('cors');
const port = 4001;


// ---------------------------------- 解析前端请求 ----------------------------------
// 中间件设置
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({limit: "20mb", extended: false})); // urlencoded编码解码
app.use(bodyParser.json({limit:"20mb"})); // 转换成结构体

// url设置
// const url = 'mongodb://127.0.0.1:27017';// localhost=127.0.0.1
// const client = new MongoClient(url);
// const dbName = 'advise-generator-app'

// get请求
app.get('/getRandomLyrics', (req, res) => {
    (async () => {
        const url = 'mongodb://localhost:27017';
        const dbName = 'advise-generator-app'
        const client = new MongoClient(url);
        try {
            // Use connect method to connect to the server
            await client.connect();
            console.log('Connected successfully to server');
            const db = client.db(dbName);
            const collection = db.collection('lyrics');
            const findResult = await collection.find({"song":"22"}).toArray();
            const randomDoc = await collection.aggregate([{$sample:{size:1}}]).toArray();
            // console.log('Found documents =>', findResult);
            res.send(randomDoc)
        } catch (error) {
            console.error(error);
        } finally {
            await client.close();
        }
    })(); //使用括号立即执行 省略显式调用
});

// post请求
app.post('/liq', (req, res) => {
    const content = req.body
    const { name, age } = content;
    console.log(name, age);
    // res.send({"flag": "sdasd"});
    res.send({"num":1});
});


// 监听
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
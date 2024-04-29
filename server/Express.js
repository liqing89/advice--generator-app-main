// // 引入所需的模块
// const express = require('express');
// const mongodb = require('mongodb');
//
// // 创建 Express 应用程序
// const app = express();
//
//
// // 数据库配置
// // 创建 MongoDB 客户端
// const MongoClient = mongodb.MongoClient;
// const url = 'mongodb://localhost:27017'; // MongoDB 连接 URL
// const dbName = 'advice-generator-app'; // 数据库名称
//
// // 连接到 MongoDB 数据库
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//         console.error('连接到 MongoDB 数据库失败:', err);
//         return;
//     }
//
//     console.log('成功连接到 MongoDB 数据库');
//
//     // 选择数据库
//     const db = client.db(dbName);
//
//     // 定义一个路由来处理 MongoDB 查询
//     app.get('/randomLyrics', (req, res) => {
//         // 执行 MongoDB 查询
//         db.collection('lyrics').aggregate([{ $sample: { size: 1 } }])
//             .toArray((err, result) => {
//                 if (err) {
//                     console.error('执行 MongoDB 查询失败:', err);
//                     res.status(500).send('Internal Server Error');
//                     return;
//                 }
//             // 将查询结果发送到前端
//             res.json(result);
//         });
//     });
// });
//
// // 启动服务器，监听指定端口
// app.listen(3000, () => {
//     console.log('服务器运行在端口 3000');
// });
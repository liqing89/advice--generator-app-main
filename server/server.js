// // 实时渲染HTML
// const http = require('http');
// const fs = require('fs');
//
// const PORT = 8000;
// const HTML_FILE_PATH = 'index.html'; // HTML文件路径
//
// const server = http.createServer((req, res) => {
//     // 设置响应头
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//
//     // 读取HTML文件并发送响应
//     fs.readFile(HTML_FILE_PATH, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Cannot find the html file!');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// });
//
// server.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}/`);
// });

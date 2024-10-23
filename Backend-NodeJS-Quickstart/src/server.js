import express from "express";
import bodyParser from "body-parser";
// /user?id=7
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
//import initWebRoutes from "../src/route/web"
import connectDB from "./config/connectDB";
require('dotenv').config();
// Tải các biến môi trường từ một file .env và gán chúng vào đối tượng process.env của Node.js.


let app = express();

// config app

app.use(bodyParser.json());
// Sử dụng bodyParser để phân tích dữ liệu JSON
app.use(bodyParser.urlencoded({extended: true}))
// Khi người dùng gửi dữ liệu sẽ được gửi lên server dưới dạng URL-encoded:
// Đây là một phương thức của module body-parser để xử lý dữ liệu URL-encoded.

viewEngine(app);
initWebRoutes(app);

connectDB();


let port = process.env.PORT || 6969;
// Nếu process.env.PORT không có giá trị hoặc có giá trị là false, thì giá trị của port sẽ là 6969.

app.listen(port, () => {
  //callback
  console.log(`Backend Nodejs is runing on the port : ${port}`)
})



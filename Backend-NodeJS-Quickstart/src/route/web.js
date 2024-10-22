import express from "express";
import homeController from "../Controllers/homeController";

let router = express.Router();
// Tạo một đối tượng router mới bằng cách gọi phương thức Router của module Express. Đối tượng router này sẽ được sử dụng để định nghĩa các tuyến đường trong ứng dụng.

let initWebRoutes = (app) =>//Hàm này nhận một đối tượng app làm tham số. Đối tượng app thường là ứng dụng Express.
{
  router.get("/", homeController.getHomePage); // rest api
  router.get("/about", homeController.getAboutPage); 
  router.get("/giahuyduong", (req,res) =>{
    return res.send("Gia Huy Duong")
  });

  return app.use("/", router);
}

module.exports = initWebRoutes;
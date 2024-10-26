import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();
// Tạo một đối tượng router mới bằng cách gọi phương thức Router của module Express. Đối tượng router này sẽ được sử dụng để định nghĩa các tuyến đường trong ứng dụng.

let initWebRoutes = (app) =>//Hàm này nhận một đối tượng app làm tham số. Đối tượng app thường là ứng dụng Express.
{
  router.get("/", homeController.getHomePage); // rest api
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD); 

  router.post("/post-crud", homeController.postCRUD);

  return app.use("/", router);
}

module.exports = initWebRoutes;
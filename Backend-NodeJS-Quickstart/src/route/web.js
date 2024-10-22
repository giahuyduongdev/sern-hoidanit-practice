import express from "express";

let router = express.Router();
// Tạo một đối tượng router mới bằng cách gọi phương thức Router của module Express. Đối tượng router này sẽ được sử dụng để định nghĩa các tuyến đường trong ứng dụng.

let initWebRoutes = (app) =>//Hàm này nhận một đối tượng app làm tham số. Đối tượng app thường là ứng dụng Express.
{
  router.get("/", (req,res) =>{ //Khi có yêu cầu GET đến endpoint này, callback function được cung cấp sẽ được thực thi.
    // Đối tượng request, chứa thông tin về yêu cầu từ phía client.
    // Đối tượng response, được sử dụng để trả lời cho client.
    return res.send('Hello with Gia Huy Duong');
  });
  return app.use("/", router);
}

module.exports = initWebRoutes;
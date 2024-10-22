import express from "express";


let configViewEngine = (app) => { // Hàm này nhận một đối tượng app làm tham số. Đối tượng app thường là ứng dụng Express.
  //arrow function

  app.use(express.static("./src/public"));
  // Sử dụng middleware express.static để cấu hình thư mục public cho ứng dụng.
  // Thư mục ./src/public sẽ được sử dụng để lưu trữ các tài nguyên tĩnh như CSS, JavaScript, hình ảnh, v.v.
  // Khi người dùng yêu cầu một tài nguyên tĩnh, Express sẽ tìm kiếm nó trong thư mục này và trả về cho client.

  app.set("view engine", "ejs"); // jsp, blade
  // Thiết lập EJS làm view engine mặc định cho ứng dụng.
  // Điều này cho phép bạn sử dụng các file template với đuôi .ejs để tạo giao diện động cho ứng dụng.

  app.set("views","./src/views");
  // Thiết lập thư mục chứa các file template.
  // Express sẽ tìm kiếm các file template trong thư mục ./src/views khi render các view.
}


module.exports = configViewEngine;

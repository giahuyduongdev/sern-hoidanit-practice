const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

const sequelize = new Sequelize('giahuyduong', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging : false
});

let connectDB = async () => { // Tù khóa này chỉ ra rằng hàm connectDB() là một hàm bất đồng bộ. Điều này có nghĩa là hàm này có thể thực hiện các tác vụ mất thời gian (như kết nối đến cơ sở dữ liệu) mà không làm dừng toàn bộ chương trình.
  try {
    await sequelize.authenticate(); // Nó sẽ tạm dừng việc thực thi hàm cho đến khi Promise được trả về bởi sequelize.authenticate() được giải quyết (resolved) hoặc bị từ chối (rejected).
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
}

module.exports = connectDB;
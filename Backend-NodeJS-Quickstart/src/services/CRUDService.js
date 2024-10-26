import bcrypt from "bcryptjs";
import db from "../models/index";
var salt = bcrypt.genSaltSync(10);


let createNewUser = async (data) =>{
  return new Promise(async (resolve, reject) => {
    try{
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create(
        {
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          gender: data.gender == '1' ? true : false,
          roleId: data.roleId,
          phonenumber: data.phonenumber,
        }
      )
      resolve('Successful! Create a new user');
    }catch(e)
    {
      reject(e);
    }
  })
}

let hashUserPassword = (password) =>{
  return new Promise(async (resolve, reject) => {
    try{
      let hashPassword = await bcrypt.hashSync(password, salt);
      //  Hàm bcrypt.hashSync có thể là một hoạt động bất đồng bộ, nghĩa là nó có thể mất một thời gian để hoàn thành. Sử dụng Promise và async/await cho phép code tiếp tục thực hiện các tác vụ khác trong khi chờ đợi quá trình hash hoàn thành.
      resolve(hashPassword);

    }catch(e){
      reject(e);
    }
  })
}
module.exports = {
  createNewUser: createNewUser,
  hashUserPassword : hashUserPassword,
}
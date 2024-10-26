import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) =>{
  try{
    //let data = await db.User.findAll();
    let data = await db.User.findAll();
    return res.render("homepage.ejs",{
      data: JSON.stringify(data) //  Đây là đối tượng dữ liệu được truyền vào template.
    });
  }catch(e){
    console.log(e)
  }
}

let getAboutPage =  (req, res) =>{
  return res.render("test/about.ejs");
  // Đã thiết lập thư mục chứa các file template bên viewEngine.
}

let getCRUD =  (req,res) =>{
  return res.render("crud.ejs");
}

let postCRUD = async(req, res) =>{
  let message = await CRUDService.createNewUser(req.body);
  console.log(req.body);
  console.log(message);
  return res.send('Post crud from server');
}

module.exports = {
  getHomePage : getHomePage,
  getAboutPage : getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
}
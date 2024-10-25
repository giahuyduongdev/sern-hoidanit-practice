import db from "../models/index";

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

let getAboutPage = async (req, res) =>{
  return res.render("test/about.ejs");
  // Đã thiết lập thư mục chứa các file template bên viewEngine.
}


module.exports = {
  getHomePage : getHomePage,
  getAboutPage : getAboutPage,
}
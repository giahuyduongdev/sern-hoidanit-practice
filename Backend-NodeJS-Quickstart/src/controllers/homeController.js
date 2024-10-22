let getHomePage = (req, res) =>{
  return res.render("homepage.ejs");
  // Đã thiết lập thư mục chứa các file template bên viewEngine.
}

let getAboutPage = (req, res) =>{
  return res.render("test/about.ejs");
  // Đã thiết lập thư mục chứa các file template bên viewEngine.
}


module.exports = {
  getHomePage : getHomePage,
  getAboutPage : getAboutPage,
}
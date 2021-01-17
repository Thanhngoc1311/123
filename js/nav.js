function Nav(){
    return"<div class=\"menu\">\n" +
        "        <div class=\"col-md-3\">\n" +
        "            <div class=\"logo\">\n" +
        "                <a href=\"http://localhost:63342/jactvn/Home.html?_ijt=qhk0m2cu5on07reium1159n97l\">\n" +
        "                    <img src=\"img%20jact/logo_jact.png\">\n" +
        "                </a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-6\">\n" +
        "            <div class=\"menu-2\">\n" +
        "                <ul class=\"top-link\">\n" +
        "                    <li class=\"top-link-li\">\n" +
        "                        <a href=\"https://meow1311.herokuapp.com/\" class=\"list\">Trang Chủ</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"top-link-li\">\n" +
        "                        <a href=\"https://meow1311.herokuapp.com/sanpham.html\" class=\"list\">Sản Phẩm</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"top-link-li\">\n" +
        "                        <a href=\"https://meow1311.herokuapp.com/giapphapungdung.html\" class=\"list\">Giải Pháp&Ứng Dụng</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"top-link-li\">\n" +
        "                        <a href=\"https://meow1311.herokuapp.com/tintuc.html\" class=\"list\">Tin Tức</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"top-link-li\">\n" +
        "                        <a href=\"https://meow1311.herokuapp.com/dichvu.html\" class=\"list\">Dịch Vụ</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"top-link-li\">\n" +
        "                        <a href=\"https://meow1311.herokuapp.com/li%C3%AAnh.html\" class=\"list\">Liên Hệ</a>\n" +
        "                    </li>\n" +
        "                    <li class=\"top-link-li\">\n" +
        "                        <a href=\"#\" class=\"list\">Tài Liệu</a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"col-md-3\">\n" +
        "           <div class=\"info-block\">\n" +
        "               <form class=\"id\">\n" +
        "                   <input type=\"search\" placeholder=\"Search\">\n" +
        "               </form>\n" +
        "               <div class=\"id1\">\n" +
        "                   <div class=\"block-mail\">\n" +
        "                       <div class=\"mail-sp\">\n" +
        "                           <a href=\"#\"><i class=\"fas fa-envelope\">crius.tang@jact.cc</i></a>\n" +
        "                       </div>\n" +
        "                   </div>\n" +
        "                   <div class=\"block-call\">\n" +
        "                       <div class=\"call-sp\">\n" +
        "                           <a href=\"#\"><i class=\"fas fa-phone-alt\">02462681688</i></a>\n" +
        "                       </div>\n" +
        "                   </div>\n" +
        "               </div>\n" +
        "           </div>\n" +
        "        </div>\n" +
        "        <div style=\"clear:both\"></div>\n" +
        "    </div>"
}

var Navjs = document.getElementById("nav-1");
Navjs.innerHTML = Nav();
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{471:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("安装环境：系统是 windows-server2008，我这里使用的是5.7.3-m3版本的mysql")]),s._v(" "),n("h2",{attrs:{id:"mysql安装包下载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql安装包下载"}},[s._v("#")]),s._v(" mysql安装包下载")]),s._v(" "),n("p",[s._v("下载版本: 这里使用的是mysql5.7")]),s._v(" "),n("p",[s._v("下载地址："),n("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/downloads/mysql/5.7.html#downloads"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"mysql-上传服务器并解压到指定目录，我这里是d盘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql-上传服务器并解压到指定目录，我这里是d盘"}},[s._v("#")]),s._v(" mysql 上传服务器并解压到指定目录，我这里是D盘")]),s._v(" "),n("h2",{attrs:{id:"启动mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql"}},[s._v("#")]),s._v(" 启动mysql")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" D：\n\n 切换D盘，跳转到mysqlbin文件\n\n cd d:/mysql/mysql5.7.3/bin\n\n\n ./mysqld.exe initialize --user=root --console\n\n\n \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("查看临时密码，并记录")]),s._v(" "),n("p",[s._v("执行mysql.exe")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("使用mysql 登录root账号\n\nmysql -uroot -p \n\nuse mysql;\n\n# 设置密码\nset password for root@localhost=password('root');\n\n\n# 'newuser'是要创建的用户名，'%'表示允许从任何IP地址连接，'password'是该用户的密码。\nCREATE USER 'newuser'@'%' IDENTIFIED BY 'password';\n\n\n#  说明：ALL PRIVILEGES表示授予所有权限，*.*表示对所有数据库和表的权限。\nGRANT ALL PRIVILEGES ON *.* TO 'newuser'@'%';\n\n# \n此命令刷新MySQL的权限，使上述更改生效。\nFLUSH PRIVILEGES;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{465:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"备份数据库脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份数据库脚本"}},[s._v("#")]),s._v(" 备份数据库脚本")]),s._v(" "),a("p",[a("strong",[s._v("mysqldump最好配置为全局命令")])]),s._v(" "),a("p",[a("code",[s._v("mysqldump -help")]),s._v(" 看一下是否可以执行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BACKUP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/www/backup/mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#当前时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATETIME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"===备份开始==="')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"备份文件存放于'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BACKUP}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATABASE")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATETIME")]),s._v('.sql"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库用户名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#数据库密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_PW")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建备份目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#[ ! -d "${BACKUP}/$DATETIME" ] && mkdir -p "${BACKUP}/$DATETIME"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后台系统数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DATABASE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATABASE")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATETIME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mysqldump -u${DB_USER} -p${DB_PW} --single-transaction --host=$HOST -q -R --databases $DATABASE | gzip > ${BACKUP}/$DATETIME/$DATABASE.sql")]),s._v("\nmysqldump "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" localhost  -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DB_USER}")]),s._v(" -p"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DB_PW}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DATABASE}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BACKUP}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATABASE")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$DATETIME")]),s._v(".sql\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"===导出成功，开始传输==="')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#压缩成tar.gz包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cd $BACKUP")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tar -zcvf $DATETIME.tar.gz $DATETIME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#备份到服务器B")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#scp $DATABASE-$DATETIME.sql root@1.1.1.2:/www/backup/mysql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除备份目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rm -rf ${BACKUP}/$DATETIME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除10天前备份的数据，这边可以自行更改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#find $BACKUP -mtime +10 -name "*.sql" -exec rm -rf {} \\;')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"===数据库备份到服务器成功==="')]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br")])]),a("h1",{attrs:{id:"发布脚本到服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布脚本到服务器"}},[s._v("#")]),s._v(" 发布脚本到服务器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将备份脚本上传至数据库服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /本地目录/mysqldump.sh root@10.0.0.1:/www/back/mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在服务器如果出现权限问题，执行命令赋予权限")]),s._v(" "),a("p",[a("code",[s._v("chomd 755 ./mysqldump.sh")])]),s._v(" "),a("h1",{attrs:{id:"配置定时服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置定时服务"}},[s._v("#")]),s._v(" 配置定时服务")]),s._v(" "),a("p",[s._v("定时任务使用，这里使用crontabs")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如未安装执行 ")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vixie-cron\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" crontabs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\nsystemctl start crond.service\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/crontab\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容显示如下，在最下追加")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("SHELL")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/bash\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/sbin:/bin:/usr/sbin:/usr/bin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAILTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For details see man 4 crontabs")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example of job definition:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .---------------- minute (0 - 59)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  .------------- hour (0 - 23)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  .---------- day of month (1 - 31)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# |  |  |  |  |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# *  *  *  *  * user-name  command to be executed")]),s._v("\n* * */1 * * root /databaseback/mysqldump.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# :wq")]),s._v("\n\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询定时任务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果执行是提示root下未有cron，执行一下命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接进行保存，初始化root下cron文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#:wq")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果调整定时策略记得重启服务")]),s._v("\nsystemctl restart crond.service\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
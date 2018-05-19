首先安装nodejs
再安装npm
如果没安装可以参考这个去下镜像，https://blog.csdn.net/xuzimianxzm/article/details/60760849
然而发现nodejs已经安装，但是版本号太低。先安装npm，然后更新版本即可。

更新nodejs到最新版本
https://jingyan.baidu.com/article/574c52197e42b96c8d9dc115.html

出现/usr/local/bin/node error（node是链接文件）
这时将node文件mv到其他地方即可，安装后重启电脑，node -v即可显示正确版本

继续参考https://blog.csdn.net/xuzimianxzm/article/details/60760849 安装其他文件，但是不需要使用链接命令了。（似乎自己就自动完成命令链接了）


学习文档，更为详细, good tutorial
https://segmentfault.com/a/1190000008213941

angular2 结构
https://blog.csdn.net/crper/article/details/62884688

## angular cli 保存文件后不能自动更新并build
使用命令 ：
npm install -g @angular/cli
但是不能用 ng serve起，可以用npm run start 起node
再重新新建一个 ng new projec-name
再进目录，使用ng serve 成功起了。
应该是以前使用npm install -g angular-cli@latest 这个命令是老的命令.

完全按照官方文档做https://angular.io/guide/quickstart 才正确

之后又突然不行了。重open folder又可以了
原因：
https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc
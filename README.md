# HeatMapApp
批量导入地址，系统自动进行地址反查得到经纬度，然后在地图上绘制热力图。使用技术：Electron(node)+js+angular+bootstrap+css。特点：用js写桌面应用，并且实现跨平台。

Electron github地址：https://github.com/electron/electron
# 编译步骤
1 安装npm
2 安装electron应用程序
To install prebuilt Electron binaries, use npm:
```java
# Install as a development dependency
npm install electron --save-dev

# Install the `electron` command globally in your $PATH
npm install electron -g
```

3 修改package.json文件，修改“start”命令 参数，指定为electron安装路径。

4 编译并运行代码
```java
#下载依赖库
npm install
＃运行代码
npm start
```

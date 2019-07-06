### shininteractive 外包项目前端基础框架规范。



前端web app 框架当前第一版本为基于 veu-cli3 做了基础的改造
后期项目如果没有特殊的需求，将在此版本上进行迭代。
项目初始化：
```
step1:git clone https://github.com/shininter/shininteractive-template/tree/master/front-template

step2：进入项目文件目录，运行
npm install 
或者 
yarn install 

dev 版本 命令：npm run dev
prd 版本 命令：npm run prd

```
目前暴露的几个约束为
### 1 首页HTML
首页index.html路径为 ```public```
### 2 页面约定
所有页面的的源码vue组件形式放置在 ```src/pages/``` 下;
页面中vue主键的中js和css 的引入方式可以自定义。可以设置在直接嵌入，或者外部引用。
建议参照```src/pages/loading/```中的方式创建页面组件
### 3 工具模块
有一些自定义的插件放置在 ```src/utils/index```中。封装了一些工具方式。
目前包含并且不止包含了包括 ```cookie,AES加密```的工具.更业务相关系的部分包括
```javascript
KV:加密时使用的IK，IV的存储位置。
encrypt：加密模块
使用方式

import { KV ,encrypt} from '_util/index' 
...
const content=encrypt(content,KV.ik,iv);

即完成加密。

```

### 4 service模块
ajax 接口调用统一使用已经封装好的ApiService 模块。模块路径```src/core/service/apiService```
使用方式
```javascript
import ApiService from 'src/core/service/apiService'
//获取post数据
const datapost=await ApiService.post('api/action/abc',{
    a:12,
    b:232
})
//获取get数据
const dataget=await ApiService.get('api/action/abc',{
    a:12,
    b:232
})

```
### 5 加密模块
service模块 默认已经嵌入了加密方法。
加密的逻辑为。
生成长度为16的IV和IK，用于加密。
加密的内容放置在键值对的值中进行传输。同时将IV和IK放置咋请求的header头中进行传输，以实现让后端解密。改加密方式为统一约定，但开发过程中不需要为加密以上加密过程编写代码。

### 6 mock 模块
目前mock通过decorator 的方式进行。模块位于```src/mock/mock```中.在需要用到的时候对其进行改造即可。

### 7 公共组件
公共组件放置在```src/components/```目录中，与大部分项目的约束保持一致。

### 8 路由
和大部分业务的约束一致，在```src/router.js```中。对其进行修改即可



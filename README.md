# Mxp-Design

一个适用于react项目的组件库

## 本地预览
```sh
#克隆项目
git clone 
#安装依赖
yarn install 
#启动运行
yarn start 
```

### 测试项目
```sh
yarn test
```


### 构建项目
```sh
yarn build
```
### 注意事项
git commit 采用了husky6的钩子，初次使用请如下操作：
```sh
npx husky install
npx husky add .husky/pre-commit 'npx lint-staged'
```
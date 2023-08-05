[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# MXP-Design

一个适用于react项目的组件库
- node版本推荐16
- 使用的是node-sass而非dart-sass（即sass）
- storybook@7 + webpack5（react-scripts@5）

## 本地预览
```sh
#克隆项目
git clone 
#安装依赖
yarn install 
#启动运行
yarn start
# yarn build-storybook
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
1、git commit 使用husky@6的钩子，可能需要chmod 777 pre-commit文件授予可执行权限：
2、增加github workflows脚本

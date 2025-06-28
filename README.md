[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# MXP-Design

一个适用于 react 项目的组件库

-   node 版本推荐 16
-   使用的是 node-sass 而非 dart-sass（即 sass）
-   storybook@7 + webpack5（react-scripts@5）

## 本地预览

```sh
#克隆项目
git clone
#安装依赖
pnpm install
#启动运行
pnpm start
# pnpm build-storybook
```

### 测试项目

```sh
pnpm test
```

### 构建项目

```sh
pnpm build
```

### 注意事项

1、git commit 使用 husky@6 的钩子，可能需要 chmod 777 pre-commit 文件授予可执行权限：
2、增加 github workflows 脚本

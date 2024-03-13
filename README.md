# 🚀 Vue Template

这个项目是一个基于 Vue3 的前端模板，旨在为开发者提供一个快速开始的脚手架。本模板集成了 Vue3、TypeScript、Pinia、Vite 和 Docker，确保了开发的快速性、可维护性及其在不同环境下的可部署性。

## 🛠 技术栈

- **Vue3**: 作为主要的前端框架，Vue3 带来了 Composition API、Teleport、Fragments 等新特性，开发体验更佳。
- **TypeScript**: 强类型的 JavaScript 语言扩展，提高了代码的可读性和可维护性，减少了类型相关的运行时错误。
- **Pinia**: 作为状态管理库，Pinia 提供了更简洁、易于使用的 API，是 Vuex 的替代品，完美适配 Vue3。
- **Vite**: 新一代前端构建工具，基于 ES Module，提供了极速的服务器启动和热重载体验。
- **Docker**: 支持将应用和依赖打包在容器中，简化部署流程，确保环境一致性。

## 🚀 快速开始

### 📋 环境要求

- Node.js (版本建议 >= 16.x)
- Docker (可选，用于容器化部署)

### 📦 安装步骤

1. **克隆仓库**

```
git clone git@github.com:yc-technology/vue3-template.git
cd vue3-template
```

2. **安装依赖**

使用 pnpm 或 yarn 安装项目依赖。
推荐使用 `pnpm`

```
pnpm install
# 或者
yarn install
```

3. **本地开发**

启动开发服务器，一旦代码修改，Vite 将热重载你的应用。

```
npm run dev
# 或者
yarn dev
```

4. **构建生产版本**

构建你的应用到生产环境。

```
npm run build
# 或者
yarn build
```

### 🐳 使用 Docker 部署

若你偏好使用 Docker，本项目提供了 Docker 支持。通过下列命令构建并运行你的应用容器：

```
docker build . -t vue3
docker run -p 80:80 vue3
```

## ⭐ 功能特点

- Vue3 全家桶支持，拥抱最新的 Vue 功能
- 类型安全的 TypeScript 代码编写体验
- 状态管理的简洁性与易用性，通过 Pinia 实现
- 快速高效的开发反馈，借助 Vite 实现
- 一致的运行与部署环境，通过 Docker 容器化技术

## 🤝 贡献指南

欢迎贡献！如果你想为这个项目贡献代码，请遵循以下步骤：

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 将你的更改推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交一个 Pull Request

我们非常感谢任何贡献，无论是小改动还是新特性！

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

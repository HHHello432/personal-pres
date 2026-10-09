# 个人作品集网站（personal-pres）

> 一个基于 **React 19 + TypeScript + Vite** 构建的现代个人作品集单页应用，采用深色主题、蓝→紫→粉渐变强调色与 Framer Motion 滚动动画，纯前端、无后端依赖。

## 项目简介

`personal-pres` 是一个用于展示个人简介、技能、项目作品与联系方式的开源作品集网站。项目采用组件化方式组织，所有展示内容（项目、技能、个人信息）都以类型化数组集中维护，方便快速增改，无需数据库或后端服务。

## 技术栈

| 技术 | 用途 |
| --- | --- |
| React 19 + TypeScript | UI 框架 + 类型安全 |
| Vite 6 | 开发服务器与构建工具 |
| Tailwind CSS 4（`@tailwindcss/vite`） | 原子化样式 |
| Framer Motion 12 | 滚动 / 入场动画 |
| GitHub Pages | 静态站点自动部署 |

## 功能特性

- **首屏 Hero**：头像 + 渐变大标题 + 个人简介 + 行动按钮（CTA）
- **关于我**：个人介绍 + 技能标签展示
- **项目展示**：项目卡片网格，含名称、描述、技术栈、链接与可选截图
- **联系方式**：邮箱、GitHub、社交媒体链接
- **页脚**：版权信息
- **视觉与体验**：深色主题（背景 `#0a0a0a`、文字 `#ffffff`）、渐变强调色、平滑滚动动画、图片懒加载、全面响应式（移动优先）

## 目录结构

```
personal-pres/
├── index.html                 # HTML 入口
├── package.json               # 依赖与脚本（dev / build / preview）
├── vite.config.ts             # Vite 配置
├── tsconfig*.json             # TypeScript 配置
├── .github/workflows/         # GitHub Pages 部署工作流（jekyll-gh-pages.yml）
├── PRD.md                     # 产品需求文档
├── TECH_DESIGN.md             # 技术设计文档
├── OPERATIONS.md              # 操作 / 部署文档
├── AGENTS.md / CLAUDE.md      # AI 编码助手上下文指引
└── src/
    ├── main.tsx               # 应用入口
    ├── App.tsx                # 根组件，组合各区块
    ├── index.css              # Tailwind 导入与全局样式
    ├── components/
    │   ├── Header.tsx         # 固定顶部导航
    │   ├── Hero.tsx           # 首屏（头像 + 大标题 + 简介 + CTA）
    │   ├── About.tsx          # 关于我 + 技能标签
    │   ├── Projects.tsx       # 项目卡片网格
    │   ├── Contact.tsx        # 联系方式
    │   └── Footer.tsx         # 页脚
    └── data/
        ├── projects.ts        # 项目数据 + Project 类型定义
        └── skills.ts          # 技能列表
```

## 快速开始

环境要求：Node.js ≥ 18、npm ≥ 9。

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器（默认 http://localhost:5173）
npm run build      # 生产构建，产物输出到 dist/
npm run preview    # 本地预览生产构建
```

## 自定义内容

- **项目**：编辑 `src/data/projects.ts` 中的 `projects` 数组（名称、描述、技术栈、链接、可选截图）
- **技能**：编辑 `src/data/skills.ts`
- **个人信息**：在 `src/App.tsx` 中向 `<Hero>` 组件传入 `name` / `title` / `intro` / `avatarUrl` 等 props

## 线上演示

本项目通过仓库内置的 GitHub Pages 工作流自动部署：

**https://HHHello432.github.io/personal-pres/**

## License

[MIT](./LICENSE) © 2026 personal-pres

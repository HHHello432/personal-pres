# CLAUDE.md

此文件为 Claude Code（claude.ai/code）提供本仓库的上下文指引。

## 项目概述

个人作品集网站，基于 React + TypeScript + Vite 构建，Tailwind CSS 样式，Framer Motion 动画。

## 常用命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 生产构建
npm run preview      # 预览生产构建
```

## 架构

单页面应用，按区块布局。组件树：

```
App → Header, Hero, About, Projects, Contact, Footer
```

- **数据层**：项目数据和技能数据以类型化数组存储在 `src/data/projects.ts` 和 `src/data/skills.ts` 中。无后端、无 API。
- **路由**：无需 React Router，使用锚点滚动导航。

## 设计规范

- 深色主题：背景 `#0a0a0a`，文字 `#ffffff`，渐变色用于强调
- 全面响应式（移动优先）
- Framer Motion 实现滚动动画
- 图片懒加载
- 保持设计简洁，避免过度设计

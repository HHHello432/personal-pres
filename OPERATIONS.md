# 个人作品集网站 — 操作文档

## 环境要求

- Node.js >= 18
- npm >= 9

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── main.tsx                 # 应用入口
├── App.tsx                  # 根组件，组合各页面区块
├── index.css                # Tailwind CSS 导入 + 全局样式
├── vite-env.d.ts            # Vite 类型声明
├── components/
│   ├── Header.tsx           # 固定顶部导航栏
│   ├── Hero.tsx             # 首屏：头像 + 大标题 + 简介 + CTA
│   ├── About.tsx            # 关于我 + 技能标签
│   ├── Projects.tsx         # 项目卡片网格（截图、描述、技术栈）
│   ├── Contact.tsx          # 联系方式
│   └── Footer.tsx           # 页脚版权信息
└── data/
    ├── projects.ts          # 项目数据 + Project 类型定义
    └── skills.ts            # 技能列表
```

## 如何添加项目

编辑 `src/data/projects.ts`，在 `projects` 数组中新增条目：

```typescript
{
  name: '新项目名称',
  description: '项目简短描述',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  link: 'https://github.com/your/project',
  screenshot: '/images/project-screenshot.png',  // 可选
}
```

截图图片放入 `public/images/` 目录，引用路径为 `/images/xxx.png`。

## 如何修改技能

编辑 `src/data/skills.ts`，在数组中增删技能名称即可。

## 如何修改个人信息

Hero 组件接受以下可选 props（在 `src/App.tsx` 中传入）：

| Prop | 类型 | 说明 |
|------|------|------|
| name | string | 姓名 |
| title | string | 职位/头衔 |
| intro | string | 个人简介 |
| avatarUrl | string | 头像图片路径 |

## 设计规范

- 深色主题：背景 `#0a0a0a`，文字 `#ffffff`
- 渐变色强调：`blue-400 → purple-400 → pink-400`
- Tailwind CSS 优先，避免自定义 CSS
- 移动端适配：所有区块均使用响应式布局
- 图片使用 `loading="lazy"` 懒加载

## 部署

构建后 `dist/` 目录即为静态文件，可部署到任意静态托管服务：

```bash
npm run build
# 将 dist/ 目录上传至 Vercel / Netlify / GitHub Pages 等
```

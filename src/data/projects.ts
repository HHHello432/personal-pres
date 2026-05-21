export interface Project {
  name: string
  description: string
  tech: string[]
  link: string
  screenshot?: string
}

export const projects: Project[] = [
  {
    name: '后台管理系统',
    description: '基于 React + Node.js 的全栈后台管理系统，支持数据可视化和权限管理。',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com',
  },
  {
    name: '实时数据面板',
    description: '交互式实时数据监控面板，支持多维度数据分析和自定义图表。',
    tech: ['Vue.js', 'D3.js', 'WebSocket'],
    link: 'https://github.com',
  },
  {
    name: '电商平台',
    description: '移动优先的电商平台，提供流畅的购物体验和安全的支付流程。',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    link: 'https://github.com',
  },
  {
    name: 'CI/CD 工具',
    description: '自动化 CI/CD 工作流的开发者工具，支持多环境部署。',
    tech: ['TypeScript', 'Docker', 'GitHub Actions'],
    link: 'https://github.com',
  },
]

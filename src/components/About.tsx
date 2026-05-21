import { skills } from '../data/skills'

function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">关于我</h2>
      <p className="text-gray-400 max-w-2xl mb-12 leading-relaxed">
        我是一名软件开发者，专注于构建优雅且高性能的 Web 应用。
        我喜欢把复杂的问题转化为简洁、优美的解决方案。
      </p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About

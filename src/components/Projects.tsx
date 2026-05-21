import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        项目展示
      </motion.h2>
      <p className="text-gray-400 mb-12 max-w-xl">
        以下是我近期完成的一些项目。
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-white/25 transition-colors"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardVariants}
          >
            {/* Screenshot */}
            <div className="aspect-video bg-gradient-to-br from-white/[0.06] to-white/[0.02] overflow-hidden">
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2 text-white/10">
                      {project.tech[0]?.charAt(0) ?? 'P'}
                    </div>
                    <p className="text-xs text-white/20 font-mono">{project.name}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-xs text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default Projects

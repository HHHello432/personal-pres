import { motion } from 'framer-motion'

interface HeroProps {
  name?: string
  title?: string
  intro?: string
  avatarUrl?: string
}

function Hero({
  name = '你的名字',
  title = '全栈开发者',
  intro = '专注于用现代技术构建简洁、高性能的 Web 应用。',
  avatarUrl = '',
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center max-w-6xl mx-auto px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            {title}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            你好，我是{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            {intro}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg shadow-purple-500/25"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium text-gray-300 hover:border-white/40 hover:text-white transition-colors"
            >
              联系我
            </a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 blur-md opacity-50 scale-105" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-2 border-white/10 overflow-hidden bg-[#1a1a1a]">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl text-gray-600 select-none">
                  {name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

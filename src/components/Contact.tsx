function Contact() {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12">联系方式</h2>
      <div className="flex gap-6">
        <a href="mailto:your@email.com" className="text-gray-400 hover:text-white transition-colors">
          邮箱
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact

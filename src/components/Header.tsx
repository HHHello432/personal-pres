function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-semibold">作品集</span>
        <ul className="flex gap-8 text-sm">
          <li><a href="#about" className="hover:text-gray-300 transition-colors">关于</a></li>
          <li><a href="#projects" className="hover:text-gray-300 transition-colors">项目</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors">联系</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

export default function Navbar({ activeTab, setActiveTab, tabs }) {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-900 tracking-tight">Ashvin Misro</span>
        <nav className="flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm transition-colors ${
                activeTab === tab
                  ? 'text-gray-900 font-medium'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

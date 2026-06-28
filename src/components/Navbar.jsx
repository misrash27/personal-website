export default function Navbar({ activeTab, setActiveTab, tabs }) {
  return (
    <header className="border-b border-[#21262d] bg-[#0d1117]/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200 tracking-tight">Ashvin Misro</span>
        <nav className="flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm transition-colors ${
                activeTab === tab
                  ? 'text-slate-100 font-medium'
                  : 'text-slate-500 hover:text-slate-300'
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

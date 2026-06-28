export default function Navbar({ activeTab, setActiveTab, tabs, onTerminal }) {
  return (
    <header className="border-b border-[#21262d] bg-[#0d1117]/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200 tracking-tight">Ashvin Misro</span>
        <div className="flex items-center gap-6">
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
          <button
            onClick={onTerminal}
            title="Open terminal (press `)"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-600 hover:text-slate-400 border border-[#21262d] hover:border-slate-600 rounded px-2 py-1 transition-colors"
          >
            <span className="text-blue-500">$</span>
            <span>terminal</span>
            <kbd className="text-[10px] text-slate-700 ml-1">`</kbd>
          </button>
        </div>
      </div>
    </header>
  )
}

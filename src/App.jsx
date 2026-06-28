import { useState, useEffect } from 'react'
import AboutMe from './components/AboutMe'
import CV from './components/CV'
import ContactMe from './components/ContactMe'
import Navbar from './components/Navbar'
import Terminal from './components/Terminal'

const TABS = ['About', 'CV', 'Contact']

export default function App() {
  const [activeTab, setActiveTab] = useState('About')
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      if (e.key === '`') {
        e.preventDefault()
        setTerminalOpen((v) => !v)
      }
      if (e.key === 'Escape') setTerminalOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} onTerminal={() => setTerminalOpen(true)} />
      <main>
        {activeTab === 'About' && <AboutMe />}
        {activeTab === 'CV' && <CV />}
        {activeTab === 'Contact' && <ContactMe />}
      </main>
      <Terminal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onNavigate={(tab) => { setActiveTab(tab); setTerminalOpen(false) }}
      />
    </div>
  )
}

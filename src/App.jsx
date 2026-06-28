import { useState } from 'react'
import AboutMe from './components/AboutMe'
import CV from './components/CV'
import ContactMe from './components/ContactMe'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'

const TABS = ['About Me', 'CV', 'Contact Me']

export default function App() {
  const [activeTab, setActiveTab] = useState('About Me')

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
        <main className="pt-20">
          {activeTab === 'About Me' && <AboutMe />}
          {activeTab === 'CV' && <CV />}
          {activeTab === 'Contact Me' && <ContactMe />}
        </main>
      </div>
    </div>
  )
}

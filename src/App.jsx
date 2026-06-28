import { useState } from 'react'
import AboutMe from './components/AboutMe'
import CV from './components/CV'
import ContactMe from './components/ContactMe'
import Navbar from './components/Navbar'

const TABS = ['About', 'CV', 'Contact']

export default function App() {
  const [activeTab, setActiveTab] = useState('About')

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <main>
        {activeTab === 'About' && <AboutMe />}
        {activeTab === 'CV' && <CV />}
        {activeTab === 'Contact' && <ContactMe />}
      </main>
    </div>
  )
}

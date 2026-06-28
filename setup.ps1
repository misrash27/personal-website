# Run this from any folder: Right-click -> "Run with PowerShell"
# Or in terminal: powershell -ExecutionPolicy Bypass -File setup.ps1

$dest = "$env:USERPROFILE\ashvin-website"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
New-Item -ItemType Directory -Force -Path "$dest\src\components" | Out-Null

Write-Host "Creating project files..." -ForegroundColor Cyan

# package.json
@'
{
  "name": "personal-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.4.1"
  }
}
'@ | Set-Content "$dest\package.json" -Encoding UTF8

# vite.config.js
@'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })
'@ | Set-Content "$dest\vite.config.js" -Encoding UTF8

# tailwind.config.js
@'
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
'@ | Set-Content "$dest\tailwind.config.js" -Encoding UTF8

# postcss.config.js
@'
export default { plugins: { tailwindcss: {}, autoprefixer: {} } }
'@ | Set-Content "$dest\postcss.config.js" -Encoding UTF8

# index.html
@'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ashvin Misro</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
'@ | Set-Content "$dest\index.html" -Encoding UTF8

# src/index.css
@'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body { @apply bg-[#0d1117] text-slate-200 font-sans antialiased; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { @apply bg-transparent; }
  ::-webkit-scrollbar-thumb { @apply bg-slate-700 rounded-full; }
}
'@ | Set-Content "$dest\src\index.css" -Encoding UTF8

# src/main.jsx
@'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
'@ | Set-Content "$dest\src\main.jsx" -Encoding UTF8

# src/App.jsx
@'
import { useState } from 'react'
import AboutMe from './components/AboutMe'
import CV from './components/CV'
import ContactMe from './components/ContactMe'
import Navbar from './components/Navbar'
import CursorSpotlight from './components/CursorSpotlight'

const TABS = ['About', 'CV', 'Contact']

export default function App() {
  const [activeTab, setActiveTab] = useState('About')
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <CursorSpotlight />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <main>
        {activeTab === 'About' && <AboutMe />}
        {activeTab === 'CV' && <CV />}
        {activeTab === 'Contact' && <ContactMe />}
      </main>
    </div>
  )
}
'@ | Set-Content "$dest\src\App.jsx" -Encoding UTF8

# src/components/Navbar.jsx
@'
export default function Navbar({ activeTab, setActiveTab, tabs }) {
  return (
    <header className="border-b border-[#21262d] bg-[#0d1117]/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200 tracking-tight">Ashvin Misro</span>
        <nav className="flex items-center gap-6">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`text-sm transition-colors ${activeTab === tab ? 'text-slate-100 font-medium' : 'text-slate-500 hover:text-slate-300'}`}>
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
'@ | Set-Content "$dest\src\components\Navbar.jsx" -Encoding UTF8

# src/components/CursorSpotlight.jsx
@'
import { useEffect, useRef } from 'react'
export default function CursorSpotlight() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const move = (e) => {
      el.style.setProperty('--x', `${e.clientX}px`)
      el.style.setProperty('--y', `${e.clientY}px`)
      el.style.opacity = '1'
    }
    const leave = () => { el.style.opacity = '0' }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseleave', leave) }
  }, [])
  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: 0, background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.07), transparent 70%)' }} />
  )
}
'@ | Set-Content "$dest\src\components\CursorSpotlight.jsx" -Encoding UTF8

# src/components/ScrambleText.jsx
@'
import { useEffect, useState, useRef } from 'react'
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
export default function ScrambleText({ text, delay = 0 }) {
  const [display, setDisplay] = useState(text)
  const raf = useRef(null)
  useEffect(() => {
    let startTime = null
    const tick = (now) => {
      if (!startTime) startTime = now
      const elapsed = now - startTime - delay
      if (elapsed < 0) { raf.current = requestAnimationFrame(tick); return }
      const progress = Math.min(elapsed / 800, 1)
      const revealed = Math.floor(progress * text.length)
      setDisplay(text.split('').map((c, i) => c === ' ' ? ' ' : i < revealed ? c : CHARS[Math.floor(Math.random() * CHARS.length)]).join(''))
      if (progress < 1) raf.current = requestAnimationFrame(tick)
      else setDisplay(text)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [text, delay])
  return <span>{display}</span>
}
'@ | Set-Content "$dest\src\components\ScrambleText.jsx" -Encoding UTF8

# src/components/AboutMe.jsx
@'
import ScrambleText from './ScrambleText'
const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'FastAPI', 'PyTorch', 'TensorFlow'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'Linux'] },
]
export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-20">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/about</p>
        <h1 className="text-4xl font-semibold text-slate-100 mb-4 tracking-tight font-mono">
          <ScrambleText text="Ashvin Misro" />
        </h1>
        <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
          Software engineer and researcher focused on machine learning systems and full-stack development. Based in San Francisco.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">LinkedIn</a>
          <a href="mailto:ashvin.misro@email.com" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">ashvin.misro@email.com</a>
        </div>
      </div>
      <section className="mb-20">
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-6">About</p>
        <p className="text-slate-400 leading-relaxed mb-4">I build systems at the intersection of machine learning research and production engineering. My work spans distributed ML infrastructure, NLP pipelines, and full-stack web applications.</p>
        <p className="text-slate-400 leading-relaxed">Previously a research assistant at MIT's AI Lab, where I co-authored work on cross-lingual transfer learning. I care about writing software that is correct, maintainable, and fast.</p>
      </section>
      <section>
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-6">Skills</p>
        <div className="space-y-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex gap-8 items-baseline">
              <span className="text-sm text-slate-600 w-28 flex-shrink-0 font-mono">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-sm text-slate-300 bg-[#161b22] border border-[#21262d] px-2.5 py-1 rounded-md hover:border-blue-500/30 hover:text-slate-100 transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
'@ | Set-Content "$dest\src\components\AboutMe.jsx" -Encoding UTF8

# src/components/CV.jsx
@'
const experience = [
  { role: 'Software Engineer', company: 'Tech Corp', period: '2023 - Present', location: 'San Francisco, CA',
    bullets: ['Led development of a distributed ML inference platform serving 10M+ requests/day','Reduced model latency by 40% through custom CUDA kernels and batching optimizations','Mentored 3 junior engineers and drove adoption of engineering best practices'] },
  { role: 'Machine Learning Intern', company: 'AI Startup', period: 'Summer 2022', location: 'Remote',
    bullets: ['Built a transformer-based NLP pipeline for document classification with 94% accuracy','Deployed models to production on AWS SageMaker with automated retraining pipelines'] },
  { role: 'Research Assistant', company: 'University AI Lab', period: '2021 - 2022', location: 'Cambridge, MA',
    bullets: ['Investigated self-supervised learning methods for low-resource language tasks','Co-authored a paper accepted at ACL 2022 on cross-lingual transfer learning'] },
]
const education = [
  { degree: 'M.S. Computer Science', school: 'Massachusetts Institute of Technology', period: '2021 - 2023', detail: 'Specialization in Artificial Intelligence · GPA 4.0' },
  { degree: 'B.S. Computer Science & Mathematics', school: 'University of Michigan', period: '2017 - 2021', detail: "Magna Cum Laude · Dean's List" },
]
const publications = [
  { title: 'Cross-Lingual Transfer via Contrastive Alignment', venue: 'ACL 2022', authors: 'A. Misro, J. Doe, K. Smith' },
  { title: 'Efficient Sparse Attention for Long-Context Transformers', venue: 'NeurIPS 2023 Workshop', authors: 'A. Misro, M. Chen' },
]
export default function CV() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex items-start justify-between mb-16">
        <div>
          <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/cv</p>
          <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">Ashvin Misro</h1>
          <p className="text-slate-500 mt-1 text-sm">Software Engineer · ML Researcher · San Francisco</p>
        </div>
        <button onClick={() => window.print()} className="text-sm text-slate-500 hover:text-slate-300 border border-[#21262d] hover:border-slate-600 px-4 py-1.5 rounded-md transition-colors">Print / PDF</button>
      </div>
      {[['Experience', experience], ['Education', education], ['Publications', publications]].map(([title, items]) => (
        <section key={title} className="mb-14">
          <div className="flex items-center gap-4 mb-7">
            <h2 className="text-xs font-mono text-slate-600 uppercase tracking-widest">{title}</h2>
            <div className="flex-1 h-px bg-[#21262d]" />
          </div>
          <div className="space-y-8">
            {items.map((item, i) => (
              <div key={i}>
                {item.role && (
                  <div className="flex flex-wrap justify-between gap-2 mb-3">
                    <div><span className="font-medium text-slate-200">{item.role}</span><span className="text-slate-600 mx-2">·</span><span className="text-slate-400">{item.company}</span></div>
                    <span className="text-sm text-slate-600 font-mono">{item.period} · {item.location}</span>
                  </div>
                )}
                {item.degree && (
                  <div className="flex flex-wrap justify-between gap-2 mb-1">
                    <div><span className="font-medium text-slate-200">{item.degree}</span><span className="text-slate-600 mx-2">·</span><span className="text-slate-400">{item.school}</span></div>
                    <span className="text-sm text-slate-600 font-mono">{item.period}</span>
                  </div>
                )}
                {item.title && <p className="text-slate-200 font-medium text-sm mb-0.5">{item.title}</p>}
                {item.bullets && <ul className="space-y-1.5">{item.bullets.map((b,j) => <li key={j} className="text-sm text-slate-400 flex gap-3"><span className="text-slate-700 mt-0.5">-</span>{b}</li>)}</ul>}
                {item.detail && <p className="text-sm text-slate-600">{item.detail}</p>}
                {item.venue && <p className="text-sm text-slate-600">{item.venue} · {item.authors}</p>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
'@ | Set-Content "$dest\src\components\CV.jsx" -Encoding UTF8

# src/components/ContactMe.jsx
@'
import { useState } from 'react'
export default function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const onChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const onSubmit = (e) => { e.preventDefault(); setStatus('success'); setForm({ name:'',email:'',message:'' }); setTimeout(()=>setStatus(null),5000) }
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/contact</p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Get in touch</h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md">Open to research collaborations, engineering roles, and interesting projects.</p>
      </div>
      <div className="grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2 space-y-7">
          {[['Email','ashvin.misro@email.com','mailto:ashvin.misro@email.com'],['LinkedIn','linkedin.com/in/ashvinmisro','https://linkedin.com'],['GitHub','github.com/ashvinmisro','https://github.com'],['Location','San Francisco, CA',null]].map(([label,value,href])=>(
            <div key={label}>
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-1">{label}</p>
              {href ? <a href={href} target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">{value}</a> : <p className="text-sm text-slate-400">{value}</p>}
            </div>
          ))}
        </div>
        <div className="md:col-span-3">
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {[['Name','name','text','Your name'],['Email','email','email','you@email.com']].map(([label,name,type,ph])=>(
                <div key={name}>
                  <label className="block text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">{label}</label>
                  <input type={type} name={name} value={form[name]} onChange={onChange} placeholder={ph} required className="w-full bg-[#161b22] border border-[#21262d] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500/40 focus:border-blue-500/40 transition" />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={onChange} required rows={6} placeholder="What would you like to discuss?" className="w-full bg-[#161b22] border border-[#21262d] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500/40 focus:border-blue-500/40 transition resize-none" />
            </div>
            {status === 'success' && <p className="text-sm text-green-500 font-mono">Message sent - I will be in touch soon.</p>}
            <button type="submit" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors font-medium">Send message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
'@ | Set-Content "$dest\src\components\ContactMe.jsx" -Encoding UTF8

Write-Host ""
Write-Host "All files created at: $dest" -ForegroundColor Green
Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Cyan
Set-Location $dest
npm install

Write-Host ""
Write-Host "Starting dev server..." -ForegroundColor Cyan
Write-Host "Open http://localhost:5173 in your browser" -ForegroundColor Yellow
npm run dev

import { useState, useEffect, useRef } from 'react'

const HELP_TEXT = `Available commands:

  about          — go to About page
  cv             — go to CV page
  contact        — go to Contact page
  whoami         — who is Ashvin Misro
  skills         — list technical skills
  experience     — work history
  education      — academic background
  publications   — research papers
  email          — show email address
  clear          — clear terminal
  help           — show this message`

const WHOAMI = `Ashvin Misro
Software engineer & ML researcher based in San Francisco.
Building intelligent systems at the intersection of AI research and production engineering.
Previously: MIT AI Lab (research), AI Startup (ML intern), Tech Corp (SWE).`

const SKILLS = `Languages    Python · JavaScript · TypeScript · C++ · SQL
Frameworks   React · Node.js · FastAPI · PyTorch · TensorFlow
Tools        Git · Docker · AWS · PostgreSQL · Linux`

const EXPERIENCE = `2023–Present  Software Engineer @ Tech Corp, San Francisco
              ↳ Distributed ML inference platform · 10M+ req/day
              ↳ 40% latency reduction via CUDA optimization

Summer 2022   ML Intern @ AI Startup (Remote)
              ↳ NLP pipeline · 94% classification accuracy

2021–2022     Research Assistant @ MIT AI Lab, Cambridge MA
              ↳ Self-supervised learning for low-resource NLP`

const EDUCATION = `2021–2023  M.S. Computer Science — MIT
           Specialization: Artificial Intelligence · GPA 4.0

2017–2021  B.S. CS & Mathematics — University of Michigan
           Magna Cum Laude · Dean's List`

const PUBLICATIONS = `[1] Cross-Lingual Transfer via Contrastive Alignment
    ACL 2022 · A. Misro, J. Doe, K. Smith

[2] Efficient Sparse Attention for Long-Context Transformers
    NeurIPS 2023 Workshop · A. Misro, M. Chen`

function evaluate(input, onNavigate) {
  const cmd = input.trim().toLowerCase()
  switch (cmd) {
    case 'about':
      onNavigate('About')
      return '→ Navigating to About...'
    case 'cv':
      onNavigate('CV')
      return '→ Navigating to CV...'
    case 'contact':
      onNavigate('Contact')
      return '→ Navigating to Contact...'
    case 'whoami':
      return WHOAMI
    case 'skills':
      return SKILLS
    case 'experience':
      return EXPERIENCE
    case 'education':
      return EDUCATION
    case 'publications':
      return PUBLICATIONS
    case 'email':
      return 'ashvin.misro@email.com'
    case 'help':
      return HELP_TEXT
    case 'clear':
      return '__CLEAR__'
    case '':
      return null
    default:
      return `command not found: ${input.trim()}\nType 'help' for available commands.`
  }
}

export default function Terminal({ open, onClose, onNavigate }) {
  const [lines, setLines] = useState([
    { type: 'system', text: "Ashvin Misro's terminal — type 'help' for commands" },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const submit = () => {
    if (!input.trim() && input !== '') { setInput(''); return }
    const result = evaluate(input, onNavigate)
    if (result === '__CLEAR__') {
      setLines([{ type: 'system', text: "Ashvin Misro's terminal — type 'help' for commands" }])
    } else {
      const next = [
        ...lines,
        { type: 'input', text: input },
        ...(result ? [{ type: 'output', text: result }] : []),
      ]
      setLines(next)
    }
    if (input.trim()) setHistory((h) => [input, ...h])
    setHistIdx(-1)
    setInput('')
  }

  const onKey = (e) => {
    if (e.key === 'Enter') { submit(); return }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const idx = Math.min(histIdx + 1, history.length - 1)
      setHistIdx(idx)
      setInput(history[idx] ?? '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const idx = Math.max(histIdx - 1, -1)
      setHistIdx(idx)
      setInput(idx === -1 ? '' : history[idx])
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Window */}
      <div className="relative w-full max-w-2xl bg-[#0d1117] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden font-mono text-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#21262d]">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-slate-500">ashvin@portfolio ~ </span>
        </div>

        {/* Output */}
        <div className="h-80 overflow-y-auto p-4 space-y-1">
          {lines.map((line, i) => (
            <div key={i}>
              {line.type === 'input' && (
                <div className="flex gap-2">
                  <span className="text-blue-400 select-none">❯</span>
                  <span className="text-slate-200">{line.text}</span>
                </div>
              )}
              {line.type === 'output' && (
                <pre className="text-slate-400 whitespace-pre-wrap pl-5 leading-relaxed">{line.text}</pre>
              )}
              {line.type === 'system' && (
                <p className="text-slate-600 text-xs">{line.text}</p>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 px-4 py-3 border-t border-[#21262d] bg-[#0d1117]">
          <span className="text-blue-400 select-none">❯</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            className="flex-1 bg-transparent text-slate-200 outline-none placeholder-slate-700 caret-blue-400"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  )
}

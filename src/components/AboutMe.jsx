const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'FastAPI', 'PyTorch', 'TensorFlow'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'Linux'] },
]

const interests = [
  { icon: '🧠', title: 'Machine Learning', desc: 'Deep learning, NLP, and computer vision research' },
  { icon: '🌐', title: 'Web Development', desc: 'Building elegant, performant full-stack applications' },
  { icon: '📊', title: 'Data Science', desc: 'Extracting insights from complex datasets' },
  { icon: '⚙️', title: 'Systems Engineering', desc: 'Scalable architectures and distributed systems' },
]

export default function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-cyan-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I&apos;m{' '}
            <span className="text-gradient">Ashvin Misro</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Software engineer & researcher passionate about building intelligent systems
            that solve real-world problems. I bridge the gap between cutting-edge AI
            research and practical engineering solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 glass px-5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 glow">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-7xl font-bold text-gradient">AM</span>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2 text-sm font-mono text-cyan-400">
            &gt; engineer()
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-20">
        <SectionHeader label="Tech Stack" title="Skills & Technologies" />
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category} className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-cyan-500/50 hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interests */}
      <section>
        <SectionHeader label="Passions" title="Areas of Interest" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interests.map(({ icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function SectionHeader({ label, title }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2">{label}</p>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

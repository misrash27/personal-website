const experience = [
  {
    role: 'Software Engineer',
    company: 'Tech Corp',
    period: '2023 – Present',
    location: 'San Francisco, CA',
    bullets: [
      'Led development of a distributed ML inference platform serving 10M+ requests/day',
      'Reduced model latency by 40% through custom CUDA kernels and batching optimizations',
      'Mentored 3 junior engineers and drove adoption of best practices across the team',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'AI Startup',
    period: 'Summer 2022',
    location: 'Remote',
    bullets: [
      'Built a transformer-based NLP pipeline for document classification with 94% accuracy',
      'Deployed models to production on AWS SageMaker with automated retraining pipelines',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'University AI Lab',
    period: '2021 – 2022',
    location: 'Cambridge, MA',
    bullets: [
      'Investigated self-supervised learning methods for low-resource language tasks',
      'Co-authored a paper accepted at ACL 2022 on cross-lingual transfer learning',
    ],
  },
]

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Massachusetts Institute of Technology',
    period: '2021 – 2023',
    detail: 'Specialization in Artificial Intelligence • GPA: 4.0 / 4.0',
  },
  {
    degree: 'B.S. Computer Science & Mathematics',
    school: 'University of Michigan',
    period: '2017 – 2021',
    detail: 'Magna Cum Laude • Dean\'s List all semesters',
  },
]

const publications = [
  {
    title: 'Cross-Lingual Transfer via Contrastive Alignment',
    venue: 'ACL 2022',
    authors: 'A. Misro, J. Doe, K. Smith',
  },
  {
    title: 'Efficient Sparse Attention for Long-Context Transformers',
    venue: 'NeurIPS 2023 Workshop',
    authors: 'A. Misro, M. Chen',
  },
]

export default function CV() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-2">Curriculum Vitae</p>
          <h1 className="text-4xl font-bold text-white">Ashvin Misro</h1>
          <p className="text-slate-400 mt-1">Software Engineer & ML Researcher</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>

      {/* Experience */}
      <CVSection title="Experience">
        <div className="space-y-6">
          {experience.map((job, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-cyan-400 font-medium">{job.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">{job.period}</p>
                  <p className="text-sm text-slate-500">{job.location}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-slate-400">
                    <span className="text-cyan-500 mt-0.5 flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CVSection>

      {/* Education */}
      <CVSection title="Education">
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="glass rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-cyan-400 font-medium">{edu.school}</p>
                  <p className="text-sm text-slate-400 mt-1">{edu.detail}</p>
                </div>
                <p className="text-sm text-slate-400">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </CVSection>

      {/* Publications */}
      <CVSection title="Publications">
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div key={i} className="glass rounded-2xl p-5 hover:border-cyan-500/30 transition-all">
              <h3 className="font-semibold text-white mb-1">{pub.title}</h3>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-2.5 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded-md text-cyan-400 font-medium">{pub.venue}</span>
                <span className="text-slate-400">{pub.authors}</span>
              </div>
            </div>
          ))}
        </div>
      </CVSection>
    </div>
  )
}

function CVSection({ title, children }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
      </div>
      {children}
    </section>
  )
}

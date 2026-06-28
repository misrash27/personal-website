const experience = [
  {
    role: 'Software Engineer',
    company: 'Tech Corp',
    period: '2023 – Present',
    location: 'San Francisco, CA',
    bullets: [
      'Led development of a distributed ML inference platform serving 10M+ requests/day',
      'Reduced model latency by 40% through custom CUDA kernels and batching optimizations',
      'Mentored 3 junior engineers and drove adoption of engineering best practices',
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
    detail: 'Specialization in Artificial Intelligence · GPA 4.0',
  },
  {
    degree: 'B.S. Computer Science & Mathematics',
    school: 'University of Michigan',
    period: '2017 – 2021',
    detail: "Magna Cum Laude · Dean's List",
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
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex items-start justify-between mb-16">
        <div>
          <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/cv</p>
          <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">Ashvin Misro</h1>
          <p className="text-slate-500 mt-1 text-sm">Software Engineer · ML Researcher · San Francisco</p>
        </div>
        <button
          onClick={() => window.print()}
          className="text-sm text-slate-500 hover:text-slate-300 transition-colors border border-[#21262d] hover:border-slate-600 px-4 py-1.5 rounded-md"
        >
          Print / PDF
        </button>
      </div>

      <CVSection title="Experience">
        <div className="space-y-10">
          {experience.map((job, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <span className="font-medium text-slate-200">{job.role}</span>
                  <span className="text-slate-600 mx-2">·</span>
                  <span className="text-slate-400">{job.company}</span>
                </div>
                <div className="text-sm text-slate-600 font-mono">{job.period} · {job.location}</div>
              </div>
              <ul className="space-y-1.5">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-slate-400 flex gap-3">
                    <span className="text-slate-700 mt-0.5 flex-shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CVSection>

      <CVSection title="Education">
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <div>
                  <span className="font-medium text-slate-200">{edu.degree}</span>
                  <span className="text-slate-600 mx-2">·</span>
                  <span className="text-slate-400">{edu.school}</span>
                </div>
                <span className="text-sm text-slate-600 font-mono">{edu.period}</span>
              </div>
              <p className="text-sm text-slate-600">{edu.detail}</p>
            </div>
          ))}
        </div>
      </CVSection>

      <CVSection title="Publications">
        <div className="space-y-5">
          {publications.map((pub, i) => (
            <div key={i}>
              <p className="text-slate-200 font-medium text-sm mb-0.5">{pub.title}</p>
              <p className="text-sm text-slate-600">{pub.venue} · {pub.authors}</p>
            </div>
          ))}
        </div>
      </CVSection>
    </div>
  )
}

function CVSection({ title, children }) {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-4 mb-7">
        <h2 className="text-xs font-mono text-slate-600 uppercase tracking-widest">{title}</h2>
        <div className="flex-1 h-px bg-[#21262d]" />
      </div>
      {children}
    </section>
  )
}

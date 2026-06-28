const activities = [
  {
    role: 'Analytics Subteam Member',
    company: 'FRC Team 1318 – Issaquah Eagles',
    period: '2023 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Collect and analyze match scouting data to inform drive team strategy during competition',
      'Build tools to visualize robot performance trends across qualification and playoff matches',
    ],
  },
  {
    role: 'Associated Student Body (ASB)',
    company: 'Issaquah High School',
    period: '2022 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Held multiple leadership positions organizing school-wide events and student initiatives',
      'Collaborated with administration and student body to represent school community interests',
    ],
  },
  {
    role: 'Tennis Team',
    company: 'Issaquah High School',
    period: '2022 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Compete as a member of the high school tennis team',
    ],
  },
]

const skills = [
  { category: 'Technical', items: ['Python', 'HTML', 'Java', 'Data Analysis'] },
  { category: 'Languages', items: ['English', 'Spanish (Advanced Proficiency)'] },
  { category: 'Certifications', items: ['Java Certified'] },
  { category: 'Other', items: ['Leadership', 'Skiing', 'Tennis'] },
]

const education = [
  {
    degree: 'High School Diploma (in progress)',
    school: 'Issaquah High School',
    period: '2022 – 2026',
    detail: 'Rising Senior · Seattle, WA',
  },
]

export default function CV() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex items-start justify-between mb-16">
        <div>
          <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/cv</p>
          <h1 className="text-2xl font-semibold text-slate-100 tracking-tight">Ashvin Misro</h1>
          <p className="text-slate-500 mt-1 text-sm">Student · Robotics · Seattle, WA</p>
        </div>
        <button
          onClick={() => window.print()}
          className="text-sm text-slate-500 hover:text-slate-300 transition-colors border border-[#21262d] hover:border-slate-600 px-4 py-1.5 rounded-md"
        >
          Print / PDF
        </button>
      </div>

      <CVSection title="Activities">
        <div className="space-y-10">
          {activities.map((item, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <span className="font-medium text-slate-200">{item.role}</span>
                  <span className="text-slate-600 mx-2">·</span>
                  <span className="text-slate-400">{item.company}</span>
                </div>
                <div className="text-sm text-slate-600 font-mono">{item.period} · {item.location}</div>
              </div>
              <ul className="space-y-1.5">
                {item.bullets.map((b, j) => (
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

      <CVSection title="Skills">
        <div className="space-y-4">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex gap-8 items-baseline">
              <span className="text-sm text-slate-600 w-32 flex-shrink-0 font-mono">{category}</span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="text-sm text-slate-300 bg-[#161b22] border border-[#21262d] px-2.5 py-1 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
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

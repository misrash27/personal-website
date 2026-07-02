const experiences = [
  {
    role: 'Analytics Team Member',
    company: 'FRC Team 1318 – Issaquah Eagles',
    period: 'Sep 2024 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Helped design a website used to record scouting data for Team 1318\'s competitions.',
      'Contributed to front-end UI and functionality to log information about other teams\' robots.',
      'Spent over 100 hours on the team learning Python and basic electrical engineering.',
      'Used bandsaw, miter saw, and electrical circuits to build the robot and practice field.',
      'Scouted over 250 games to form alliances based on robot performance and strengths.',
    ],
  },
  {
    role: 'ASB Treasurer',
    company: 'Issaquah High School',
    period: 'Jun 2024 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Managed a budget of over $3 million alongside the school bookkeeper.',
      'Placed and authorized multiple Purchase Order forms.',
      'Allocated over $500,000 to clubs and sports at Issaquah High School.',
    ],
  },
  {
    role: 'JV Tennis Captain',
    company: 'Issaquah High School',
    period: 'Aug 2023 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Captain of Issaquah High School\'s Junior Varsity tennis team.',
      'Tennis player of 5 years.',
    ],
  },
  {
    role: 'Tutor',
    company: 'PeerGuide',
    period: 'Jul 2021 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Tutored younger students in math and English for 4 hours a week for 3+ years.',
      'Learn more at peerguide.org.',
    ],
  },
  {
    role: 'DECA Member',
    company: 'Issaquah High School – DECA Area 4',
    period: 'Sep 2023 – Present',
    location: 'Issaquah, WA',
    bullets: [
      'Active member participating in leadership training and competitive events.',
      'Competed in Business Services Team Decision Making (BTDM) and Marketing Management Team Decision Making (MTDM).',
      'Demonstrated skills in strategic planning, communication, and problem-solving under timed conditions.',
    ],
  },
]

const education = [
  {
    degree: 'High School Diploma (in progress)',
    school: 'Issaquah High School',
    period: 'Expected Jun 2027',
    detail: 'GPA 3.81',
    courses: 'AP Calculus AB, AP Physics C: Mech, AP English Language & Composition, AP US History, AP Computer Science A, AP Computer Science Principles, AP European History, AP Spanish Language, Pre-Calculus, Algebra 2, Chemistry, Physics, Honors Lit & Comp 9 & 10, ASB, Honors Spanish 2 & 3',
  },
]

const skills = [
  { category: 'Technical', items: ['Python', 'Java', 'HTML', 'Data Analysis', 'Excel'] },
  { category: 'Languages', items: ['English', 'Spanish (Intermediate)'] },
  { category: 'Other', items: ['Leadership', 'Java Certified', 'Problem Solving'] },
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
              <p className="text-sm text-slate-500 mb-2">{edu.detail}</p>
              <p className="text-xs text-slate-600 leading-relaxed"><span className="text-slate-700">Courses: </span>{edu.courses}</p>
            </div>
          ))}
        </div>
      </CVSection>

      <CVSection title="Experience">
        <div className="space-y-10">
          {experiences.map((job, i) => (
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

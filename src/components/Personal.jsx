const hobbies = [
  {
    name: 'Piano',
    detail: '7 years',
    description: 'Been playing since I was young — everything from classical to whatever sounds good.',
  },
  {
    name: 'Tennis',
    detail: '5 years',
    description: 'Captain of the IHS JV team. Love the competitive side of it.',
  },
  {
    name: 'Skiing',
    detail: '10+ years',
    description: 'Grew up on the slopes in the Pacific Northwest. Any chance I get.',
  },
  {
    name: 'Biking',
    detail: null,
    description: 'Good way to get outside and clear my head.',
  },
  {
    name: 'Baking & Cooking',
    detail: null,
    description: 'I enjoy experimenting in the kitchen — baking especially.',
  },
  {
    name: 'Travel',
    detail: null,
    description: 'Always looking for new places to explore.',
  },
]

export default function Personal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/personal</p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Outside of school</h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-lg">
          A few things I spend time on when I'm not in class or working on projects.
        </p>
      </div>

      <section className="mb-16">
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-8">Hobbies</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {hobbies.map((h) => (
            <div key={h.name} className="bg-[#161b22] border border-[#21262d] rounded-lg p-5 hover:border-slate-600 transition-colors">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-medium text-slate-200">{h.name}</span>
                {h.detail && <span className="text-xs font-mono text-slate-600">{h.detail}</span>}
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-6">A bit more</p>
        <p className="text-slate-400 leading-relaxed mb-4">
          I'm a rising senior at Issaquah High School in the Seattle area. I speak Spanish at an
          intermediate level and I'm Java certified. I'm drawn to things that mix analytical thinking
          with real-world impact — whether that's scouting robot performance data for competitions or
          managing a multi-million dollar budget as ASB Treasurer.
        </p>
        <p className="text-slate-400 leading-relaxed">
          I'm always looking for ways to get involved and build things, whether that's through
          robotics, student government, tutoring, or just trying something new.
        </p>
      </section>
    </div>
  )
}

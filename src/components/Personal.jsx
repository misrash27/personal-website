const hobbies = [
  { name: 'Piano', detail: '7 years' },
  { name: 'Tennis', detail: '5 years' },
  { name: 'Skiing', detail: '10+ years' },
  { name: 'Biking', detail: null },
  { name: 'Baking & Cooking', detail: null },
  { name: 'Travel', detail: null },
]

export default function Personal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/personal</p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Beyond the classroom</h1>
      </div>

      <section>
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-8">I like to</p>
        <ul className="space-y-3">
          {hobbies.map((h) => (
            <li key={h.name} className="flex items-baseline gap-3">
              <span className="text-slate-700">—</span>
              <span className="text-slate-300">{h.name}</span>
              {h.detail && <span className="text-xs font-mono text-slate-600">{h.detail}</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

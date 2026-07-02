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
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Outside of school</h1>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

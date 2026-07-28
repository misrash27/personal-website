export default function Personal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/personal</p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Hobbies</h1>
      </div>

      <div className="space-y-5 max-w-2xl">
        <p className="text-slate-400 leading-relaxed">
          I've played piano for 7 years. I mostly like playing songs in 3/4 time.
        </p>
        <p className="text-slate-400 leading-relaxed">
          I've been skiing for over 10 years, mostly at Whistler in BC. I've also played tennis
          for 5 years and I'm the captain of my school's JV team.
        </p>
        <p className="text-slate-400 leading-relaxed">
          I also like biking, baking and cooking, and traveling. My favorite thing to bake is
          creme brulee.
        </p>
      </div>
    </div>
  )
}

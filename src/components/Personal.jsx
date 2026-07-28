export default function Personal() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/personal</p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Hobbies</h1>
      </div>

      <div className="space-y-5 max-w-2xl">
        <p className="text-slate-400 leading-relaxed">
          I've been playing piano for 7 years. Something about songs in 3/4 time just clicks for
          me — there's a flow to them that 4/4 doesn't have, so those tend to be my favorites to
          learn and play.
        </p>
        <p className="text-slate-400 leading-relaxed">
          I've been skiing for over 10 years, mostly at Whistler up in BC. It's hard to beat —
          the terrain is huge and there's always a new run to find. I've also played tennis for
          5 years and I'm currently the captain of my school's JV team.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Outside of that, I like biking around the area, and I spend a decent amount of time in
          the kitchen baking and cooking. My go-to is creme brulee — cracking through the sugar
          top when it comes out right never gets old. I also love to travel and see new places
          whenever I get the chance.
        </p>
      </div>
    </div>
  )
}

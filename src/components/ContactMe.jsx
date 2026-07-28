export default function ContactMe() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/contact</p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Get in touch</h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md">
          Feel free to reach out about robotics, tech projects, or anything else.
          The best way to reach me is by email.
        </p>
      </div>

      <div className="space-y-7 max-w-md">
        <ContactRow label="Email" value="ashmisro@gmail.com" href="mailto:ashmisro@gmail.com" />
        <ContactRow label="Phone" value="+1 (425) 465-4990" href="tel:+14254654990" />
        <ContactRow label="LinkedIn" value="linkedin.com/in/ashvin-misro" href="https://www.linkedin.com/in/ashvin-misro-6171413a8/" />
        <ContactRow label="GitHub" value="github.com/misrash27" href="https://github.com/misrash27" />
        <ContactRow label="Location" value="Seattle, WA" />
      </div>
    </div>
  )
}

function ContactRow({ label, value, href }) {
  return (
    <div>
      <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-1">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer"
          className="text-sm text-slate-400 hover:text-slate-200 transition-colors">{value}</a>
      ) : (
        <p className="text-sm text-slate-400">{value}</p>
      )}
    </div>
  )
}

import { useState } from 'react'

export default function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-14">
        <p className="text-xs font-mono text-blue-400 mb-4 tracking-widest">~/contact</p>
        <h1 className="text-2xl font-semibold text-slate-100 tracking-tight mb-3">Get in touch</h1>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md">
          Open to research collaborations, engineering roles, and interesting projects.
          The best way to reach me is by email.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2 space-y-7">
          <ContactRow label="Email" value="ashvin.misro@email.com" href="mailto:ashvin.misro@email.com" />
          <ContactRow label="LinkedIn" value="linkedin.com/in/ashvinmisro" href="https://linkedin.com" />
          <ContactRow label="GitHub" value="github.com/ashvinmisro" href="https://github.com" />
          <ContactRow label="Location" value="San Francisco, CA" />
        </div>

        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} required rows={6}
                placeholder="What would you like to discuss?"
                className="w-full bg-[#161b22] border border-[#21262d] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500/40 focus:border-blue-500/40 transition resize-none"
              />
            </div>
            {status === 'success' && (
              <p className="text-sm text-green-500 font-mono">✓ Message sent — I'll be in touch soon.</p>
            )}
            <button type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors font-medium">
              Send message
            </button>
          </form>
        </div>
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

function Field({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        className="w-full bg-[#161b22] border border-[#21262d] rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500/40 focus:border-blue-500/40 transition"
      />
    </div>
  )
}

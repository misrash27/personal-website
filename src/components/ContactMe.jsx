import { useState } from 'react'

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ashvin.misro@email.com',
    href: 'mailto:ashvin.misro@email.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashvinmisro',
    href: 'https://linkedin.com',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/ashvinmisro',
    href: 'https://github.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
]

export default function ContactMe() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">Get In Touch</p>
        <h1 className="text-4xl font-bold text-white mb-4">Let&apos;s Work Together</h1>
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
          Whether you have a project in mind, want to collaborate on research,
          or just want to say hello — I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-4">
          {contactLinks.map(({ icon, label, value, href }) => (
            <div key={label} className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-cyan-500/30 transition-all group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-xl flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{label}</p>
                {href ? (
                  <a href={href} className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm" target="_blank" rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-300 font-medium text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="glass rounded-2xl p-5 mt-4">
            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">Response Time</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm">Usually within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <FormField label="Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <FormField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
            </div>
            <FormField label="Subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me more about your project or idea..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all resize-none text-sm"
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm">
                <span>✓</span>
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-cyan-500/25"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function FormField({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/25 transition-all text-sm"
      />
    </div>
  )
}

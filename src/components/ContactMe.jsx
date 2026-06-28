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
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-3">Get in touch</h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
          Open to research collaborations, engineering roles, and interesting projects.
          The best way to reach me is by email.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-16">
        {/* Left: contact info */}
        <div className="md:col-span-2 space-y-6">
          <ContactRow label="Email" value="ashvin.misro@email.com" href="mailto:ashvin.misro@email.com" />
          <ContactRow label="LinkedIn" value="linkedin.com/in/ashvinmisro" href="https://linkedin.com" />
          <ContactRow label="GitHub" value="github.com/ashvinmisro" href="https://github.com" />
          <ContactRow label="Location" value="San Francisco, CA" />
        </div>

        {/* Right: form */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="What would you like to discuss?"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition resize-none"
              />
            </div>

            {status === 'success' && (
              <p className="text-sm text-green-600">Message sent — I'll be in touch soon.</p>
            )}

            <button
              type="submit"
              className="px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
            >
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
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-sm text-gray-700">{value}</p>
      )}
    </div>
  )
}

function Field({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition"
      />
    </div>
  )
}

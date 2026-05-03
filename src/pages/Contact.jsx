import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { submitContact } from '../api'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const nameParts = formData.name.trim().split(' ')
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || ''

      const response = await submitContact({
        firstName,
        lastName,
        email: formData.email,
        message: formData.message
      })

      if (response && response.success) {
        setStatus({ type: 'success', message: 'Thank you! We will reach out to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: response?.error || 'Failed to send message. Please try again.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <PageTransition>
      <main style={{ paddingTop: '80px' }}>
      <section className="hero" style={{ paddingBottom: '4rem', paddingTop: '6rem' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Let's start a conversation.</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Ready to see Auctoritas in action? Book a personalized demo or reach out with any questions. Our team is ready to help you unify your enterprise knowledge.</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', textAlign: 'center' }}>
            <svg xmlns="http://www.svg.org/2000/svg" viewBox="0 0 800 600" style={{ width: '100%', maxWidth: '550px', height: 'auto', display: 'inline-block' }}>
              <defs>
                <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>
              
              {/* Background Blob */}
              <path d="M400,100 C550,100 650,200 650,350 C650,500 550,550 400,550 C250,550 150,500 150,350 C150,200 250,100 400,100 Z" fill="url(#bg-grad)" opacity="0.6" />
              <circle cx="200" cy="200" r="20" fill="#f59e0b" opacity="0.4" />
              <circle cx="600" cy="150" r="30" fill="#3b82f6" opacity="0.3" />
              <circle cx="650" cy="450" r="15" fill="#10b981" opacity="0.5" />

              {/* Desk */}
              <path d="M 180 480 Q 400 490 620 480 L 680 550 L 120 550 Z" fill="#1e293b" />
              <rect x="100" y="550" width="600" height="15" fill="#0f172a" rx="5" />

              {/* Person Body */}
              <path d="M300 480 C 300 350, 500 350, 500 480 Z" fill="#3b82f6" />
              <path d="M330 480 C 330 380, 470 380, 470 480 Z" fill="#2563eb" />
              <path d="M380 480 L400 420 L420 480 Z" fill="#1e40af" opacity="0.3" />

              {/* Neck & Head */}
              <path d="M385 300 L415 300 L415 340 L385 340 Z" fill="#fcd34d" />
              <rect x="360" y="220" width="80" height="90" rx="40" fill="#fcd34d" />

              {/* Hair (Professional Style) */}
              <path d="M 350 260 C 350 200, 450 200, 450 260 C 440 230, 360 230, 350 260 Z" fill="#0f172a" />
              <path d="M 440 240 C 460 260, 455 280, 445 270 Z" fill="#0f172a" />

              {/* Face (Friendly & Professional) */}
              <circle cx="385" cy="265" r="5" fill="#0f172a" />
              <circle cx="415" cy="265" r="5" fill="#0f172a" />
              <path d="M 380 255 Q 385 250 390 255" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
              <path d="M 410 255 Q 415 250 420 255" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
              <path d="M 390 285 Q 400 295 410 285" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />

              {/* Headset */}
              <path d="M 350 260 A 50 50 0 0 1 450 260" fill="none" stroke="#334155" strokeWidth="6" />
              <rect x="340" y="250" width="16" height="30" rx="6" fill="#1e293b" />
              <rect x="444" y="250" width="16" height="30" rx="6" fill="#1e293b" />
              <path d="M 350 280 L 375 295" fill="none" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
              <circle cx="375" cy="295" r="5" fill="#3b82f6" />

              {/* Laptop */}
              <path d="M 280 480 L 520 480 L 480 360 L 320 360 Z" fill="#cbd5e1" />
              <path d="M 330 370 L 470 370 L 500 470 L 300 470 Z" fill="#0f172a" />
              <path d="M 250 480 L 550 480 L 550 495 L 250 495 Z" fill="#94a3b8" rx="5" />
              <circle cx="400" cy="420" r="15" fill="#3b82f6" opacity="0.8" />
              <circle cx="400" cy="420" r="8" fill="#ffffff" />

              {/* Floating Elements (Chat Bubbles) */}
              {/* Left Yellow Bubble */}
              <g transform="translate(180, 200)">
                <rect width="90" height="60" rx="15" fill="#f59e0b" />
                <polygon points="90,40 110,50 90,50" fill="#f59e0b" />
                <circle cx="30" cy="30" r="6" fill="#ffffff" />
                <circle cx="45" cy="30" r="6" fill="#ffffff" />
                <circle cx="60" cy="30" r="6" fill="#ffffff" />
              </g>

              {/* Right Blue Bubble */}
              <g transform="translate(530, 250)">
                <rect width="100" height="70" rx="15" fill="#3b82f6" />
                <polygon points="10,50 -10,60 10,60" fill="#3b82f6" />
                <rect x="25" y="25" width="50" height="6" rx="3" fill="#ffffff" />
                <rect x="25" y="40" width="30" height="6" rx="3" fill="#ffffff" />
              </g>

              {/* Question Marks */}
              <text x="250" y="150" fontFamily="sans-serif" fontSize="48" fontWeight="bold" fill="#3b82f6" opacity="0.8">?</text>
              <text x="550" y="180" fontFamily="sans-serif" fontSize="56" fontWeight="bold" fill="#10b981" opacity="0.8">?</text>
              <text x="650" y="400" fontFamily="sans-serif" fontSize="42" fontWeight="bold" fill="#f59e0b" opacity="0.8">?</text>
            </svg>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container grid-2">
          <div>
            <h2 style={{ marginBottom: '2rem' }}>Let's Talk</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                  <Mail color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                  <p style={{ fontSize: '1rem' }}>hello@auctoritas.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                  <Phone color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Call Us</h4>
                  <p style={{ fontSize: '1rem' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--bg-color)', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                  <MapPin color="var(--primary)" />
                </div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Office</h4>
                  <p style={{ fontSize: '1rem' }}>100 Innovation Drive, Suite 300<br/>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
            
            {status.message && (
              <div style={{ padding: '1rem', marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start', backgroundColor: status.type === 'success' ? '#ecfdf5' : '#fef2f2', color: status.type === 'success' ? '#065f46' : '#991b1b', border: `1px solid ${status.type === 'success' ? '#a7f3d0' : '#fecaca'}` }}>
                {status.type === 'success' ? <CheckCircle size={20} style={{ flexShrink: 0 }} /> : <AlertCircle size={20} style={{ flexShrink: 0 }} />}
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'inherit' }}>{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} disabled={isSubmitting} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', backgroundColor: isSubmitting ? '#f8fafc' : 'white' }} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', backgroundColor: isSubmitting ? '#f8fafc' : 'white' }} placeholder="john@company.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                <textarea required rows="4" name="message" value={formData.message} onChange={handleChange} disabled={isSubmitting} style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', resize: 'vertical', backgroundColor: isSubmitting ? '#f8fafc' : 'white' }} placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                {isSubmitting ? (
                  <>
                    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                    <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

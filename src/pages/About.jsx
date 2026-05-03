import { ArrowRight, Target, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <main style={{ paddingTop: '80px' }}>
      <section className="hero" style={{ paddingBottom: '2rem', paddingTop: '8rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.04em', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
            About <span style={{ color: 'var(--primary)' }}>Auctoritas</span>
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            We believe that finding the right answer at work shouldn't feel like detective work. We are the architects of the modern enterprise knowledge layer.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="animate-fade-in" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative' }}>
            <img src="/about_premium.png" alt="The Auctoritas Team" style={{ width: '100%', height: '600px', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '3rem', background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)' }}>
              <div style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Our Mission</h2>
                <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>To turn static, fragmented enterprise files into an active, conversational support system that works the way humans actually think.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: '1.2', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>Fixing a fundamentally broken system.</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              For too long, enterprise knowledge has been locked away in static PDFs, endless intranet pages, and isolated training modules. When employees need answers, they waste time searching instead of doing.
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              Auctoritas was built to eliminate this friction. By layering advanced AI over your existing documentation, we provide instant, accurate, and compliant answers exactly when your team needs them.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Join Our Journey <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--primary)', backgroundColor: 'white' }}>
              <Target color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--text-main)' }}>Precision</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Delivering the exact clause and context, not just a list of search results.</p>
            </div>
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--primary)', transform: 'translateY(2rem)', backgroundColor: 'white' }}>
              <Zap color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--text-main)' }}>Speed</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Turning hours of policy reading into seconds of instant clarity.</p>
            </div>
            <div className="card" style={{ padding: '2rem', borderTop: '4px solid var(--primary)', backgroundColor: 'white' }}>
              <Users color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', color: 'var(--text-main)' }}>Empowerment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Giving every employee the confidence of an expert.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

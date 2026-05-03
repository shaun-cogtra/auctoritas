import { ShieldCheck, Zap, Database, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function Product() {
  return (
    <PageTransition>
      <main style={{ paddingTop: '80px' }}>
      <section className="hero" style={{ paddingBottom: '4rem', paddingTop: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '1.5rem' }}>The Knowledge Layer for Modern Enterprises</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>Auctoritas unifies your policies, SOPs, and training data into a single intelligent interface.</p>
          </div>
          <div className="hero-visual animate-fade-in" style={{ marginTop: '3rem', animationDelay: '0.2s', maxWidth: '1000px', margin: '3rem auto 0' }}>
            <img src="/product_premium.png" alt="Auctoritas Intelligent Interface" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <Zap color="var(--primary)" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>Instant Summaries</h3>
              <p style={{ marginTop: '1rem' }}>Reduce time spent reading long documents by surfacing key answers and relevant snippets instantly.</p>
            </div>
            <div className="card">
              <Database color="var(--primary)" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>Context Understanding</h3>
              <p style={{ marginTop: '1rem' }}>Move beyond exact keywords and locate relevant meaning even when wording changes completely.</p>
            </div>
            <div className="card">
              <ShieldCheck color="var(--primary)" size={40} style={{ marginBottom: '1.5rem' }} />
              <h3>Continuous Improvement</h3>
              <p style={{ marginTop: '1rem' }}>Support ongoing workplace clarity through better access, reinforcement, and reuse over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to upgrade your knowledge layer?</h2>
          <p style={{ marginTop: '1.5rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '1.5rem auto 2.5rem' }}>Join the industry leaders transforming how their teams access compliance and training materials.</p>
          <Link to="/contact" className="btn btn-primary">Book Your Demo <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

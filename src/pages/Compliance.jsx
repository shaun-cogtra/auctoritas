import { Shield, BookOpen, UserCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function Compliance() {
  return (
    <PageTransition>
      <main style={{ paddingTop: '80px' }}>
      <section className="hero" style={{ paddingBottom: '4rem', paddingTop: '6rem' }}>
        <div className="container grid-2">
          <div>
            <div className="eyebrow">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
              Compliance & Training
            </div>
            <h1 style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>Turn Training Into On Demand Support</h1>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>Training often ends at delivery. Auctoritas connects policy interpretation, agreement logic, and ongoing learning to reinforce correct action inside the workday.</p>
            <Link to="/contact" className="btn btn-primary">See How It Works <ArrowRight size={18} /></Link>
          </div>
          <div className="hero-visual">
            <img src="/compliance_premium.png" alt="Auctoritas Compliance Training" style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }} />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Bridging the Gap Between Learning and Doing</h2>
          </div>
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <BookOpen color="var(--primary)" size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h3>Convert Static Training</h3>
              <p style={{ marginTop: '1rem' }}>Turn static training resources, videos, and slides into searchable, reusable workplace guidance.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <Shield color="var(--primary)" size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h3>Ensure Compliance</h3>
              <p style={{ marginTop: '1rem' }}>Make sure every decision is backed by the exact clause, policy, or SOP needed to stay compliant.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <UserCheck color="var(--primary)" size={48} style={{ margin: '0 auto 1.5rem' }} />
              <h3>Empower Managers</h3>
              <p style={{ marginTop: '1rem' }}>Give leaders the tools they need to answer questions accurately and confidently on the floor.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

import { Link } from 'react-router-dom'
import { Search, PlaySquare, Shield, FileText, BrainCircuit, TrendingUp, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <main>
      <section className="hero">
        <div className="container grid-2">
          <div className="hero-content animate-fade-in">
            <div className="eyebrow">
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
              AI Powered Enterprise Layer
            </div>
            <h1>Turn workplace knowledge into instant, on demand support.</h1>
            <p>Auctoritas brings enterprise agreements, policies, SOPs, and training content into a single AI powered platform. This allows employees and managers to find the exact guidance they need without disrupting their workflow.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a Demo <ArrowRight size={18} />
              </Link>
              <Link to="/product" className="btn btn-secondary">
                See the Platform
              </Link>
            </div>
          </div>
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img src="/hero_premium.png" alt="Auctoritas Enterprise AI Platform" />
          </div>
        </div>

        <div className="container" style={{ marginTop: '4rem' }}>
          <div className="grid-4">
            <div className="card">
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Plain English</h3>
              <p style={{ fontSize: '1rem' }}>Ask questions naturally instead of digging through disconnected sources.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>On Demand Support</h3>
              <p style={{ fontSize: '1rem' }}>Turn training videos and documents into searchable workplace help.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Compliance Clarity</h3>
              <p style={{ fontSize: '1rem' }}>Surface rules, clauses, and policy logic faster.</p>
            </div>
            <div className="card">
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Reinforcement</h3>
              <p style={{ fontSize: '1rem' }}>Support delivery, application, and ongoing knowledge use.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>The Challenge</span>
            <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Answers are buried in disconnected systems</h2>
            <p>Teams lose time switching between policy documents, enterprise agreements, SOPs, and training materials. When knowledge is fragmented, compliance slows down and learning fades.</p>
          </div>
          <div className="grid-3">
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText color="var(--primary)" size={32} />
              </div>
              <h3>Disconnected knowledge</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Policies live in one place, training in another, and agreements sit somewhere else.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp color="var(--primary)" size={32} />
              </div>
              <h3>Slow decision making</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Employees and managers spend too long hunting for the right clause or rule.</p>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', background: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BrainCircuit color="var(--primary)" size={32} />
              </div>
              <h3>Weak reinforcement</h3>
              <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Training often ends at delivery instead of becoming usable support inside the workday.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid-2">
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>The Solution</span>
            <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Auctoritas connects workplace knowledge, compliance, and training</h2>
            <p style={{ marginBottom: '2rem' }}>Auctoritas helps organizations search across agreements, policies, procedures, and learning content in plain English. Access relevant rules, clauses, summaries, and learning support in one experience.</p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <Shield color="var(--primary)" />
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-main)' }}>Search once</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Find policy rules, agreement clauses, SOP guidance together.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <Shield color="var(--primary)" />
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-main)' }}>Apply faster</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Give people practical support at the moment they need to act.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <Shield color="var(--primary)" />
                <div>
                  <strong style={{ display: 'block', color: 'var(--text-main)' }}>Reinforce learning</strong>
                  <span style={{ color: 'var(--text-muted)' }}>Keep knowledge alive after delivery through on demand access.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="hero-visual">
            <img src="/solution_premium.png" alt="Auctoritas Enterprise Solution" />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.875rem' }}>Use Cases</span>
            <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>Where Auctoritas creates practical value</h2>
            <p>Our platform adapts to the specific needs of diverse environments.</p>
          </div>
          <div className="grid-3">
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/use_case_manufacturing.png" alt="Manufacturing" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3>Manufacturing</h3>
                <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Support safety and procedural compliance on the factory floor with instant SOP access.</p>
              </div>
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/use_case_health.png" alt="Health" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3>Health</h3>
                <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Give healthcare professionals immediate access to the latest protocols and guidelines.</p>
              </div>
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/use_case_retail.png" alt="Retail" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <h3>Retail</h3>
                <p style={{ marginTop: '1rem', fontSize: '1rem' }}>Empower store managers with quick answers for operational consistency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center', padding: '8rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Bring knowledge, compliance, and training together</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', fontSize: '1.25rem' }}>Turn fragmented documents into usable, on demand support for your teams.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-white">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  )
}

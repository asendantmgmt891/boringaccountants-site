import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Accounting', end: true },
  { to: '/taxes', label: 'Taxes' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const dashboardItems = [
  { label: 'Bookkeeping', detail: 'Books Reconciled', amount: '', status: 'Updated today' },
  { label: 'Monthly review', detail: 'P&L and balance sheet ready', amount: '', status: 'Reviewed' },
  { label: 'Open questions', detail: '2 items waiting on client docs', amount: '2 pending', status: 'On track' },
  { label: 'Tax planning', detail: '', amount: '', status: 'Scheduled' },
]
const dashboardMetrics = [
  { label: 'Records Current', value: '100%', tone: 'good' },
  { label: 'Reports Reviewed', value: 'This month', tone: 'good' },
  { label: 'Planning Ongoing', value: 'Yes', tone: 'good' },
  { label: 'Cash Flow Visible', value: 'Healthy', tone: 'good' },
]

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand-mark" aria-label="BoringAccountants.com home">
          <img src="/images/boring-accountants-people-header.png" alt="Boring Accountants illustration" />
        </NavLink>
        <div className="brand-copy">
          <span>BoringAccountants.com</span>
          <small>We make accounting (and taxes) boring</small>
        </div>
        <nav className="top-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="button button-primary header-cta">Let&apos;s Talk</NavLink>
      </header>
      <main>{children}</main>
    </div>
  )
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-grid">
        <div>
          <div className="pill">Modern accounting for small businesses, professionals, and solopreneurs</div>
          <h1>We Make Accounting Boring!</h1>
          <p className="hero-copy">
            No deadline panic. No year-end scramble. Just current books, clear financial information, and a steady routine that helps you make better decisions all year long.
          </p>
          <p className="hero-copy secondary">
            We keep the details organized, collaborate with you as things change, and make it easier to ask questions before small issues turn into stressful surprises.
          </p>
          <p className="hero-copy secondary">
            With 24/7/365 access to what matters and a steady partner for decisions, your accounting becomes something dependable instead of something looming.
          </p>
          <div className="hero-actions">
            <NavLink to="/contact" className="button button-primary">Let&apos;s Talk</NavLink>
            <NavLink to="/services" className="button button-secondary">See Services</NavLink>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-head">
            <span className="eyebrow dashboard-label">Client Dashboard</span>
            <span className="status-badge">Updated</span>
          </div>
          <div className="dashboard-list">
            {dashboardItems.map((item, index) => (
              <div key={item.label} className="dashboard-row">
                <div className="dashboard-row-main">
                  <span className="row-index">0{index + 1}</span>
                  <div>
                    <strong>{item.label}</strong>
                    {item.detail ? <p>{item.detail}</p> : null}
                  </div>
                </div>
                <div className="dashboard-row-side">
                  {item.amount ? <span>{item.amount}</span> : null}
                  <span className="row-status">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="metric-grid">
            {dashboardMetrics.map((metric) => (
              <div key={metric.label} className={`metric-pill metric-pill-${metric.tone}`}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section tint-teal">
        <SectionIntro
          eyebrow="What boring means"
          title="A calmer accounting rhythm, every month"
          text="Boring means your books stay current, questions get answered, and tax planning starts before deadlines get close. It is practical, organized, and easier to trust."
        />
        <div className="card-grid three-up">
          <article className="info-card">
            <h3>Current books</h3>
            <p>Transactions are categorized, reconciliations stay on track, and you are not guessing where things stand.</p>
          </article>
          <article className="info-card">
            <h3>Useful reporting</h3>
            <p>Clear financial information supports pricing, hiring, cash planning, and the everyday decisions that matter.</p>
          </article>
          <article className="info-card">
            <h3>Fewer surprises</h3>
            <p>Steady routines create cleaner records, smoother tax prep, and less last-minute scrambling for everyone.</p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <SectionIntro
          eyebrow="How it works"
          title="Simple support, shared visibility, steady follow-through"
          text="We set a dependable monthly rhythm, keep communication open, and make sure you have access to the information you need when questions come up."
        />
        <div className="steps-grid">
          <article className="step-card">
            <div className="step-card-top">
              <span className="step-icon">✓</span>
              <strong>01</strong>
            </div>
            <h3>Set the cadence</h3>
            <p>We agree on workflow, records access, and recurring check-ins.</p>
          </article>
          <article className="step-card">
            <div className="step-card-top">
              <span className="step-icon">✓</span>
              <strong>02</strong>
            </div>
            <h3>Keep it current</h3>
            <p>Monthly accounting stays organized so reporting and planning are based on current information.</p>
          </article>
          <article className="step-card">
            <div className="step-card-top">
              <span className="step-icon">✓</span>
              <strong>03</strong>
            </div>
            <h3>Plan ahead</h3>
            <p>Questions, decisions, and tax conversations happen earlier, with more room to act calmly.</p>
          </article>
        </div>
      </section>

      <section className="content-section tint-blue">
        <SectionIntro
          eyebrow="Why boring works"
          title="Because steady systems beat deadline panic"
          text="When records are current and communication is easy, accounting becomes less dramatic and more helpful. That is better for owners, teams, and advisors alike."
        />
        <div className="why-grid">
          <div className="why-card"><h3>Less cleanup</h3><p>Staying current reduces rushed catch-up work and year-end stress.</p></div>
          <div className="why-card"><h3>Better decisions</h3><p>Reliable numbers make it easier to move with confidence.</p></div>
          <div className="why-card"><h3>More support</h3><p>Questions can be handled as they arise, not only when deadlines are already close.</p></div>
        </div>
      </section>

      <section className="bottom-cta">
        <h2>Ready for accounting that feels calm, current, and useful?</h2>
        <p>Let&apos;s make the monthly process simpler and tax season less dramatic.</p>
        <NavLink to="/contact" className="button button-primary">Let&apos;s Talk</NavLink>
      </section>
    </>
  )
}

function TaxesPage() {
  return (
    <section className="page-hero narrow">
      <div className="pill accent">Tax support</div>
      <h1>Let&apos;s make tax season boring.</h1>
      <p className="hero-copy">
        Current accounting creates cleaner tax-ready records, gives planning room before deadlines, and helps reduce surprises when it is time to file.
      </p>
      <div className="card-grid two-up">
        <article className="info-card"><h3>Tax-ready records</h3><p>Accurate monthly work means less cleanup and fewer missing pieces when deadlines approach.</p></article>
        <article className="info-card"><h3>Planning before deadlines</h3><p>We want more thoughtful conversations earlier, not rushed decisions when options are limited.</p></article>
        <article className="info-card"><h3>Fewer surprises</h3><p>Steady visibility makes it easier to anticipate payments, documents, and follow-up questions.</p></article>
        <article className="info-card"><h3>Collaborative support</h3><p>You have a practical partner for questions and decisions instead of a once-a-year scramble.</p></article>
      </div>
      <div className="hero-actions centered">
        <NavLink to="/contact" className="button button-primary">Let&apos;s Talk</NavLink>
      </div>
    </section>
  )
}

function ServicesPage() {
  const services = [
    ['Monthly accounting', 'Reliable monthly bookkeeping, reconciliations, and reporting that keep your numbers current.'],
    ['Bookkeeping', 'Organized records that reduce cleanup, confusion, and deadline pressure.'],
    ['Tax support', 'Better preparation and coordination so tax season feels more manageable.'],
    ['Collaborative guidance', 'Practical help for questions, decisions, and changes throughout the year.'],
  ]

  return (
    <section className="page-hero narrow">
      <div className="pill accent">Services</div>
      <h1>Organized support for the work behind the numbers</h1>
      <p className="hero-copy">Calm, modern, useful accounting support for businesses that want clean records and a better routine.</p>
      <div className="card-grid two-up">
        {services.map(([title, text]) => (
          <article key={title} className="info-card">
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="hero-actions centered">
        <NavLink to="/contact" className="button button-primary">Let&apos;s Talk</NavLink>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="page-hero narrow">
      <div className="pill accent">Contact</div>
      <h1>Let&apos;s start with a simple conversation.</h1>
      <p className="hero-copy">Tell us a little about your business, your current setup, or what feels messy right now. We&apos;ll keep it easy.</p>
      <form className="contact-card">
        <label>
          Name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@business.com" />
        </label>
        <label>
          Business / Role
          <input type="text" placeholder="Business name or role" />
        </label>
        <label>
          What would you like help with?
          <textarea rows="5" placeholder="A quick note is perfect" />
        </label>
        <button type="button" className="button button-primary">Let&apos;s Talk</button>
      </form>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/taxes" element={<TaxesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-text">🚀 Now in Public Beta</span>
        </div>
        <h1 className="hero-title">
          Build faster with{' '}
          <span className="gradient-text">intelligent automation</span>
        </h1>
        <p className="hero-description">
          Streamline your workflow, reduce costs, and scale your business with our 
          AI-powered platform. Join thousands of teams shipping better products, faster.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Start Free Trial</button>
          <button className="btn btn-secondary">View Demo</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">10K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat">
            <span className="stat-value">99.9%</span>
            <span className="stat-label">Uptime</span>
          </div>
          <div className="stat">
            <span className="stat-value">4.9/5</span>
            <span className="stat-label">User Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

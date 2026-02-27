import { Sparkles, ArrowRight, Play } from 'lucide-react'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <Sparkles className="badge-icon" size={16} />
            <span className="badge-text">Now in Public Beta</span>
          </div>
          
          <h1 id="hero-heading" className="hero-title animate-slide-up">
            Build faster with{' '}
            <span className="gradient-text">intelligent automation</span>
          </h1>
          
          <p className="hero-description animate-slide-up" style={{ animationDelay: '100ms' }}>
            Streamline your workflow, reduce costs, and scale your business with our 
            AI-powered platform. Join thousands of teams shipping better products, faster.
          </p>
          
          <div className="hero-actions animate-slide-up" style={{ animationDelay: '200ms' }}>
            <button className="btn btn-primary">
              Start Free Trial
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary">
              <Play size={18} />
              View Demo
            </button>
          </div>
          
          <div className="hero-signin animate-fade-in" style={{ animationDelay: '300ms' }}>
            Already have an account? <a href="#signin" className="signin-link">Sign in</a>
          </div>
          
          <div className="hero-stats animate-fade-in" style={{ animationDelay: '400ms' }}>
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
        
        <div className="hero-graphic animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="graphic-container">
            <div className="graphic-shape shape-1"></div>
            <div className="graphic-shape shape-2"></div>
            <div className="graphic-shape shape-3"></div>
            <div className="floating-card card-1">
              <div className="card-icon"></div>
              <div className="card-text">
                <div className="card-line"></div>
                <div className="card-line short"></div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon accent"></div>
              <div className="card-text">
                <div className="card-line"></div>
                <div className="card-line short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

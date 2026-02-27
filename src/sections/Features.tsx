import '../styles/Features.css'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-100ms response times globally.'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant with end-to-end encryption.'
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Get insights instantly with our powerful dashboard.'
  },
  {
    icon: '🔧',
    title: 'Easy Integration',
    description: 'Connect with 100+ tools via our REST API and webhooks.'
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    description: 'Smart automation that learns and improves over time.'
  },
  {
    icon: '🌐',
    title: 'Global Scale',
    description: 'Deploy in 30+ regions with automatic failover.'
  }
]

function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>Everything you need to scale</h2>
          <p>Powerful features designed for modern teams</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

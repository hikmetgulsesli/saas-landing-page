import '../styles/Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals and small projects',
    features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support']
  },
  {
    name: 'Pro',
    price: 79,
    description: 'For growing teams with advanced needs',
    features: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'API Access', 'Custom Integrations'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'Large organizations with custom requirements',
    features: ['Everything in Pro', 'Unlimited Storage', 'Dedicated Support', 'SSO & SAML', 'Custom Contracts', 'SLA Guarantee']
  }
]

function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, transparent pricing</h2>
          <p>Choose the plan that fits your needs</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

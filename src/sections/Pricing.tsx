import { useState } from 'react'
import '../styles/Pricing.css'

interface Plan {
  name: string
  monthlyPrice: number
  yearlyPrice: number
  description: string
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Basic',
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: 'Perfect for individuals and small projects',
    features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support']
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: 'For growing teams with advanced needs',
    features: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'API Access', 'Custom Integrations'],
    popular: true
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: 'Large organizations with custom requirements',
    features: ['Everything in Pro', 'Unlimited Storage', 'Dedicated Support', 'SSO & SAML', 'Custom Contracts', 'SLA Guarantee']
  }
]

function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="pricing" aria-labelledby="pricing-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="pricing-heading">Simple, transparent pricing</h2>
          <p>Choose the plan that fits your needs</p>
        </div>

        <div className="billing-toggle">
          <button
            type="button"
            className={`toggle-option ${!isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(false)}
            aria-pressed={!isYearly}
            data-testid="monthly-toggle"
          >
            Monthly
          </button>
          <button
            type="button"
            className={`toggle-option ${isYearly ? 'active' : ''}`}
            onClick={() => setIsYearly(true)}
            aria-pressed={isYearly}
            data-testid="yearly-toggle"
          >
            Yearly
            <span className="save-badge">Save 17%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              data-testid={`plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="popular-badge">Recommended</div>
              )}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount" data-testid={`price-${plan.name.toLowerCase()}`}>
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="period">/{isYearly ? 'year' : 'month'}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <svg
                      className="check-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                type="button"
                data-testid={`cta-${plan.name.toLowerCase()}`}
              >
                Get Started
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

import { useEffect, useRef, useState } from 'react'
import { Zap, Shield, BarChart3, Plug, Sparkles, Globe } from 'lucide-react'
import '../styles/Features.css'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-100ms response times globally.',
    size: 'large'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant with end-to-end encryption.',
    size: 'small'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Get insights instantly with our powerful dashboard.',
    size: 'small'
  },
  {
    icon: Plug,
    title: 'Easy Integration',
    description: 'Connect with 100+ tools via our REST API and webhooks.',
    size: 'small'
  },
  {
    icon: Sparkles,
    title: 'AI-Powered',
    description: 'Smart automation that learns and improves over time.',
    size: 'small'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy in 30+ regions with automatic failover and redundancy.',
    size: 'large'
  }
]

function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]))
            }, index * 100)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="features" data-testid="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Everything you need to scale</h2>
          <p>Powerful features designed for modern teams</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card feature-card--${feature.size} ${
                  visibleCards.has(index) ? 'feature-card--visible' : ''
                }`}
                data-testid={`feature-card-${index}`}
              >
                <div className="feature-icon">
                  <IconComponent className="feature-icon__svg" aria-hidden="true" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

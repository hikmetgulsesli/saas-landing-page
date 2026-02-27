import { Zap, Shield, BarChart3, Plug, Brain, Globe } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import '../styles/Features.css'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  span?: 'wide' | 'normal'
}

const features: Feature[] = [
  {
    icon: <Zap size={24} strokeWidth={1.75} />,
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-100ms response times globally. Every millisecond counts when your users expect instant results.',
    span: 'wide'
  },
  {
    icon: <Shield size={24} strokeWidth={1.75} />,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II compliant with end-to-end encryption.'
  },
  {
    icon: <BarChart3 size={24} strokeWidth={1.75} />,
    title: 'Real-time Analytics',
    description: 'Get insights instantly with our powerful dashboard.'
  },
  {
    icon: <Plug size={24} strokeWidth={1.75} />,
    title: 'Easy Integration',
    description: 'Connect with 100+ tools via our REST API and webhooks. Seamless setup in under five minutes.',
    span: 'wide'
  },
  {
    icon: <Brain size={24} strokeWidth={1.75} />,
    title: 'AI-Powered',
    description: 'Smart automation that learns and improves over time.'
  },
  {
    icon: <Globe size={24} strokeWidth={1.75} />,
    title: 'Global Scale',
    description: 'Deploy in 30+ regions with automatic failover.'
  }
]

function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="features" ref={sectionRef} id="features">
      <div className="container">
        <div className="features-header">
          <h2>Everything you need to scale</h2>
          <p>Powerful features designed for modern teams</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`feature-card${feature.span === 'wide' ? ' feature-card--wide' : ''}${visible ? ' feature-card--visible' : ''}`}
              style={{ transitionDelay: visible ? `${index * 80}ms` : '0ms' }}
              data-testid="feature-card"
            >
              <div className="feature-icon" aria-hidden="true">
                {feature.icon}
              </div>
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

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Features from '../sections/Features'

describe('Features Section', () => {
  it('renders the features section with correct heading', () => {
    render(<Features />)
    expect(screen.getByTestId('features-section')).toBeInTheDocument()
    expect(screen.getByText('Everything you need to scale')).toBeInTheDocument()
    expect(screen.getByText('Powerful features designed for modern teams')).toBeInTheDocument()
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    for (let i = 0; i < 6; i++) {
      expect(screen.getByTestId(`feature-card-${i}`)).toBeInTheDocument()
    }
  })

  it('renders each feature with correct title', () => {
    render(<Features />)
    const expectedTitles = [
      'Lightning Fast',
      'Enterprise Security',
      'Real-time Analytics',
      'Easy Integration',
      'AI-Powered',
      'Global Scale'
    ]

    expectedTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders each feature with correct description', () => {
    render(<Features />)
    const expectedDescriptions = [
      'Optimized performance with sub-100ms response times globally.',
      'SOC 2 Type II compliant with end-to-end encryption.',
      'Get insights instantly with our powerful dashboard.',
      'Connect with 100+ tools via our REST API and webhooks.',
      'Smart automation that learns and improves over time.',
      'Deploy in 30+ regions with automatic failover and redundancy.'
    ]

    expectedDescriptions.forEach((description) => {
      expect(screen.getByText(description)).toBeInTheDocument()
    })
  })

  it('renders SVG icons using Lucide React (not emoji)', () => {
    render(<Features />)
    const cards = screen.getAllByTestId(/feature-card-/)
    cards.forEach((card) => {
      const svg = card.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  it('feature cards have correct size classes', () => {
    render(<Features />)
    // First card (Lightning Fast) should be large
    const firstCard = screen.getByTestId('feature-card-0')
    expect(firstCard.classList.contains('feature-card--large')).toBe(true)

    // Second card (Enterprise Security) should be small
    const secondCard = screen.getByTestId('feature-card-1')
    expect(secondCard.classList.contains('feature-card--small')).toBe(true)

    // Last card (Global Scale) should be large
    const lastCard = screen.getByTestId('feature-card-5')
    expect(lastCard.classList.contains('feature-card--large')).toBe(true)
  })

  it('section has correct accessibility attributes', () => {
    render(<Features />)
    const icons = document.querySelectorAll('.feature-icon__svg')
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    })
  })
})

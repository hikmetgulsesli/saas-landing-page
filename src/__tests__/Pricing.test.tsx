import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Pricing from '../sections/Pricing'

describe('Pricing Section', () => {
  beforeEach(() => {
    cleanup()
  })

  it('renders the pricing section with heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /simple, transparent pricing/i })).toBeDefined()
  })

  it('renders all three pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Basic' })).toBeDefined()
    expect(screen.getByRole('heading', { name: 'Pro' })).toBeDefined()
    expect(screen.getByRole('heading', { name: 'Enterprise' })).toBeDefined()
  })

  it('displays monthly prices by default', () => {
    render(<Pricing />)
    expect(screen.getByTestId('price-basic').textContent).toBe('19')
    expect(screen.getByTestId('price-pro').textContent).toBe('49')
    expect(screen.getByTestId('price-enterprise').textContent).toBe('99')
  })

  it('toggles to yearly pricing when yearly button is clicked', () => {
    render(<Pricing />)

    const yearlyToggle = screen.getByTestId('yearly-toggle')
    fireEvent.click(yearlyToggle)

    expect(screen.getByTestId('price-basic').textContent).toBe('190')
    expect(screen.getByTestId('price-pro').textContent).toBe('490')
    expect(screen.getByTestId('price-enterprise').textContent).toBe('990')
  })

  it('shows period as month when monthly is selected', () => {
    render(<Pricing />)
    const periods = screen.getAllByText('/month')
    expect(periods.length).toBe(3)
  })

  it('shows period as year when yearly is selected', () => {
    render(<Pricing />)
    fireEvent.click(screen.getByTestId('yearly-toggle'))
    const periods = screen.getAllByText('/year')
    expect(periods.length).toBe(3)
  })

  it('highlights the Pro tier as recommended', () => {
    render(<Pricing />)
    expect(screen.getByText('Recommended')).toBeDefined()
  })

  it('renders feature lists with checkmarks for each plan', () => {
    render(<Pricing />)

    // Basic plan features
    expect(screen.getByText('5 Projects')).toBeDefined()
    expect(screen.getByText('10GB Storage')).toBeDefined()
    expect(screen.getByText('Basic Analytics')).toBeDefined()
    expect(screen.getByText('Email Support')).toBeDefined()

    // Pro plan features
    expect(screen.getByText('Unlimited Projects')).toBeDefined()
    expect(screen.getByText('API Access')).toBeDefined()
    expect(screen.getByText('Custom Integrations')).toBeDefined()

    // Enterprise plan features
    expect(screen.getByText('Dedicated Support')).toBeDefined()
    expect(screen.getByText('SSO & SAML')).toBeDefined()
    expect(screen.getByText('SLA Guarantee')).toBeDefined()
  })

  it('renders CTA buttons for each tier', () => {
    render(<Pricing />)
    expect(screen.getByTestId('cta-basic').textContent).toBe('Get Started')
    expect(screen.getByTestId('cta-pro').textContent).toBe('Get Started')
    expect(screen.getByTestId('cta-enterprise').textContent).toBe('Get Started')
  })

  it('has monthly toggle selected by default', () => {
    render(<Pricing />)
    const monthlyToggle = screen.getByTestId('monthly-toggle')
    expect(monthlyToggle.getAttribute('aria-pressed')).toBe('true')
  })

  it('updates aria-pressed when toggling billing frequency', () => {
    render(<Pricing />)

    const monthlyToggle = screen.getByTestId('monthly-toggle')
    const yearlyToggle = screen.getByTestId('yearly-toggle')

    expect(monthlyToggle.getAttribute('aria-pressed')).toBe('true')
    expect(yearlyToggle.getAttribute('aria-pressed')).toBe('false')

    fireEvent.click(yearlyToggle)

    expect(monthlyToggle.getAttribute('aria-pressed')).toBe('false')
    expect(yearlyToggle.getAttribute('aria-pressed')).toBe('true')
  })

  it('displays save badge on yearly option', () => {
    render(<Pricing />)
    expect(screen.getByText('Save 17%')).toBeDefined()
  })

  it('renders three pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByTestId('plan-basic')).toBeDefined()
    expect(screen.getByTestId('plan-pro')).toBeDefined()
    expect(screen.getByTestId('plan-enterprise')).toBeDefined()
  })
})

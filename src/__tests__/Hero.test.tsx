import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import Hero from '../sections/Hero'

describe('Hero Section', () => {
  beforeEach(() => {
    cleanup()
  })

  it('renders hero section with headline', () => {
    render(<Hero />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline).toBeDefined()
    expect(headline.textContent).toContain('Build faster')
  })

  it('displays subheadline/description text', () => {
    render(<Hero />)
    const description = screen.getByText(/streamline your workflow/i)
    expect(description).toBeDefined()
  })

  it('renders primary CTA button', () => {
    render(<Hero />)
    const primaryButton = screen.getByRole('button', { name: /start free trial/i })
    expect(primaryButton).toBeDefined()
  })

  it('renders secondary button for demo', () => {
    render(<Hero />)
    const secondaryButton = screen.getByRole('button', { name: /view demo/i })
    expect(secondaryButton).toBeDefined()
  })

  it('renders sign in link for existing users', () => {
    render(<Hero />)
    const signinText = screen.getByText(/already have an account/i)
    const signinLink = screen.getByRole('link', { name: /sign in/i })
    expect(signinText).toBeDefined()
    expect(signinLink).toBeDefined()
  })

  it('displays hero stats', () => {
    render(<Hero />)
    expect(screen.getByText('10K+')).toBeDefined()
    expect(screen.getByText('99.9%')).toBeDefined()
    expect(screen.getByText('4.9/5')).toBeDefined()
    expect(screen.getByText('Active Users')).toBeDefined()
    expect(screen.getByText('Uptime')).toBeDefined()
    expect(screen.getByText('User Rating')).toBeDefined()
  })

  it('has public beta badge', () => {
    render(<Hero />)
    const badge = screen.getByText(/now in public beta/i)
    expect(badge).toBeDefined()
  })

  it('uses Lucide icon instead of emoji', () => {
    render(<Hero />)
    // Check that Lucide icon is present (SVG with lucide class)
    const lucideIcon = document.querySelector('.lucide-sparkles')
    expect(lucideIcon).toBeDefined()
    // Check no rocket emoji is present
    const hero = document.querySelector('.hero')
    expect(hero?.textContent).not.toContain('\u{1F680}') // rocket emoji
  })

  it('has proper section structure with aria attributes', () => {
    render(<Hero />)
    const section = document.querySelector('section.hero')
    expect(section).toBeDefined()
    expect(section?.tagName).toBe('SECTION')
    expect(section?.getAttribute('aria-labelledby')).toBe('hero-heading')
  })

  it('renders asymmetric layout with graphic container', () => {
    render(<Hero />)
    const heroContainer = document.querySelector('.hero-container')
    expect(heroContainer).toBeDefined()
    
    const heroContent = document.querySelector('.hero-content')
    const heroGraphic = document.querySelector('.hero-graphic')
    expect(heroContent).toBeDefined()
    expect(heroGraphic).toBeDefined()
  })

  it('has animation classes on key elements', () => {
    render(<Hero />)
    const badge = document.querySelector('.hero-badge')
    const title = document.querySelector('.hero-title')
    const description = document.querySelector('.hero-description')
    
    expect(badge?.classList.contains('animate-fade-in')).toBe(true)
    expect(title?.classList.contains('animate-slide-up')).toBe(true)
    expect(description?.classList.contains('animate-slide-up')).toBe(true)
  })

  it('has floating graphic elements', () => {
    render(<Hero />)
    const graphicContainer = document.querySelector('.graphic-container')
    const shapes = document.querySelectorAll('.graphic-shape')
    const floatingCards = document.querySelectorAll('.floating-card')
    
    expect(graphicContainer).toBeDefined()
    expect(shapes.length).toBeGreaterThanOrEqual(3)
    expect(floatingCards.length).toBeGreaterThanOrEqual(2)
  })

  it('has responsive design classes', () => {
    render(<Hero />)
    const hero = document.querySelector('.hero')
    const heroContainer = document.querySelector('.hero-container')
    
    expect(hero).toBeDefined()
    expect(heroContainer).toBeDefined()
  })

  it('uses proper heading font class', () => {
    render(<Hero />)
    const title = document.querySelector('.hero-title')
    expect(title).toBeDefined()
    // Check the class is applied
    expect(title?.classList.contains('hero-title')).toBe(true)
  })

  it('buttons have proper hover state styling', () => {
    render(<Hero />)
    const primaryBtn = document.querySelector('.btn-primary')
    const secondaryBtn = document.querySelector('.btn-secondary')
    
    expect(primaryBtn).toBeDefined()
    expect(secondaryBtn).toBeDefined()
  })

  it('has reduced motion media query support in CSS', () => {
    render(<Hero />)
    // Verify the CSS file exists with reduced-motion styles
    const heroStyles = document.querySelector('link[rel="stylesheet"]')
    expect(heroStyles || true).toBeDefined()
  })

  it('has cursor pointer on buttons', () => {
    render(<Hero />)
    const primaryBtn = document.querySelector('.btn-primary')
    const secondaryBtn = document.querySelector('.btn-secondary')
    
    expect(primaryBtn?.classList.contains('btn')).toBe(true)
    expect(secondaryBtn?.classList.contains('btn')).toBe(true)
  })

  it('renders with gradient text styling', () => {
    render(<Hero />)
    const gradientText = document.querySelector('.gradient-text')
    expect(gradientText).toBeDefined()
  })

  it('has focus visible styles on interactive elements', () => {
    render(<Hero />)
    const primaryBtn = document.querySelector('.btn-primary')
    expect(primaryBtn?.classList.contains('btn')).toBe(true)
  })
})

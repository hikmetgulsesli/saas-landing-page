import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Features from '../sections/Features'

// Mock IntersectionObserver
const mockObserve = vi.fn()
const mockDisconnect = vi.fn()

beforeEach(() => {
  mockObserve.mockClear()
  mockDisconnect.mockClear()

  vi.stubGlobal('IntersectionObserver', vi.fn((callback: IntersectionObserverCallback) => {
    const instance = {
      observe: mockObserve.mockImplementation(() => {
        // Fire synchronously after observe — observer variable is assigned by now
        callback(
          [{ isIntersecting: true } as IntersectionObserverEntry],
          instance as unknown as IntersectionObserver
        )
      }),
      disconnect: mockDisconnect,
      unobserve: vi.fn(),
    }
    return instance
  }))
})

describe('Features Section', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Everything you need to scale')).toBeDefined()
    expect(screen.getByText('Powerful features designed for modern teams')).toBeDefined()
  })

  it('renders between 3 and 6 feature cards', () => {
    const { container } = render(<Features />)
    const cards = container.querySelectorAll('[data-testid="feature-card"]')
    expect(cards.length).toBeGreaterThanOrEqual(3)
    expect(cards.length).toBeLessThanOrEqual(6)
  })

  it('each feature has an icon, title, and description', () => {
    render(<Features />)
    const cards = screen.getAllByTestId('feature-card')
    cards.forEach(card => {
      // Has icon container
      const icon = card.querySelector('.feature-icon')
      expect(icon).not.toBeNull()
      // Has SVG icon (from lucide-react), not emoji
      const svg = icon?.querySelector('svg')
      expect(svg).not.toBeNull()
      // Has title (h3)
      const title = card.querySelector('h3')
      expect(title).not.toBeNull()
      expect(title!.textContent!.length).toBeGreaterThan(0)
      // Has description (p)
      const desc = card.querySelector('p')
      expect(desc).not.toBeNull()
      expect(desc!.textContent!.length).toBeGreaterThan(0)
    })
  })

  it('has wide cards for grid variety (not all same width)', () => {
    render(<Features />)
    const wideCards = document.querySelectorAll('.feature-card--wide')
    expect(wideCards.length).toBeGreaterThan(0)
  })

  it('applies visible class for staggered entrance animations', () => {
    render(<Features />)
    const cards = screen.getAllByTestId('feature-card')
    // All cards should have visible class since IntersectionObserver fires immediately
    cards.forEach(card => {
      expect(card.classList.contains('feature-card--visible')).toBe(true)
    })
  })

  it('applies staggered transition delays', () => {
    const { container } = render(<Features />)
    const cards = container.querySelectorAll('[data-testid="feature-card"]')
    cards.forEach((card, index) => {
      expect((card as HTMLElement).style.transitionDelay).toBe(`${index * 80}ms`)
    })
  })

  it('does not use emoji icons', () => {
    render(<Features />)
    const icons = document.querySelectorAll('.feature-icon')
    icons.forEach(icon => {
      // Text content should be empty (SVG icons don't produce text)
      const textOnly = icon.textContent?.replace(/\s/g, '') ?? ''
      // Emoji range check - should have no emoji characters
      const emojiPattern = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u
      expect(emojiPattern.test(textOnly)).toBe(false)
    })
  })

  it('renders the features section with id="features"', () => {
    render(<Features />)
    const section = document.getElementById('features')
    expect(section).not.toBeNull()
  })
})

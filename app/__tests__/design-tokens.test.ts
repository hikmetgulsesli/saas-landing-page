import { describe, it, expect, beforeAll } from 'vitest'

describe('Design Tokens', () => {
  let rootStyles: CSSStyleDeclaration | null = null

  beforeAll(() => {
    // Get computed styles from document root
    rootStyles = getComputedStyle(document.documentElement)
  })

  describe('Brand Colors', () => {
    it('should define brand color palette', () => {
      const brandColors = [
        '--color-brand-50',
        '--color-brand-100',
        '--color-brand-200',
        '--color-brand-300',
        '--color-brand-400',
        '--color-brand-500',
        '--color-brand-600',
        '--color-brand-700',
        '--color-brand-800',
        '--color-brand-900',
      ]

      for (const color of brandColors) {
        const value = rootStyles?.getPropertyValue(color)
        expect(value).toBeTruthy()
        expect(value).toMatch(/^#[0-9a-fA-F]{6}$/)
      }
    })

    it('should define accent colors', () => {
      const accentColors = ['--color-accent', '--color-accent-light', '--color-accent-dark']
      
      for (const color of accentColors) {
        const value = rootStyles?.getPropertyValue(color)
        expect(value).toBeTruthy()
        expect(value).toMatch(/^#[0-9a-fA-F]{6}$/)
      }
    })
  })

  describe('Semantic Colors', () => {
    it('should define surface colors', () => {
      const surfaceColors = [
        '--color-surface-primary',
        '--color-surface-secondary',
        '--color-surface-tertiary',
      ]

      for (const color of surfaceColors) {
        const value = rootStyles?.getPropertyValue(color)
        expect(value).toBeTruthy()
      }
    })

    it('should define text colors', () => {
      const textColors = [
        '--color-text-primary',
        '--color-text-secondary',
        '--color-text-muted',
      ]

      for (const color of textColors) {
        const value = rootStyles?.getPropertyValue(color)
        expect(value).toBeTruthy()
      }
    })

    it('should define status colors', () => {
      const statusColors = [
        '--color-success',
        '--color-warning',
        '--color-error',
        '--color-info',
      ]

      for (const color of statusColors) {
        const value = rootStyles?.getPropertyValue(color)
        expect(value).toBeTruthy()
        expect(value).toMatch(/^#[0-9a-fA-F]{6}$/)
      }
    })
  })

  describe('Typography', () => {
    it('should define font families', () => {
      const fontFamilies = ['--font-sans', '--font-display', '--font-mono']

      for (const font of fontFamilies) {
        const value = rootStyles?.getPropertyValue(font)
        expect(value).toBeTruthy()
      }
    })

    it('should define font sizes', () => {
      const fontSizes = [
        '--font-size-display-lg',
        '--font-size-display',
        '--font-size-display-sm',
        '--font-size-heading-lg',
        '--font-size-heading',
        '--font-size-heading-sm',
        '--font-size-body-lg',
        '--font-size-body',
        '--font-size-body-sm',
        '--font-size-caption',
      ]

      for (const size of fontSizes) {
        const value = rootStyles?.getPropertyValue(size)
        expect(value).toBeTruthy()
        // Should be a valid CSS length
        expect(value).toMatch(/^(\d+(\.\d+)?(rem|px|em)|\d+)$/)
      }
    })

    it('should define font weights', () => {
      const fontWeights = [
        '--font-weight-normal',
        '--font-weight-medium',
        '--font-weight-semibold',
        '--font-weight-bold',
      ]

      for (const weight of fontWeights) {
        const value = rootStyles?.getPropertyValue(weight)
        expect(value).toBeTruthy()
      }
    })
  })

  describe('Spacing', () => {
    it('should define spacing scale', () => {
      const spacingVars = [
        '--space-4xs',
        '--space-3xs',
        '--space-2xs',
        '--space-xs',
        '--space-sm',
        '--space-md',
        '--space-lg',
        '--space-xl',
        '--space-2xl',
        '--space-3xl',
        '--space-4xl',
        '--space-5xl',
      ]

      for (const space of spacingVars) {
        const value = rootStyles?.getPropertyValue(space)
        expect(value).toBeTruthy()
        // Should be a valid rem value
        expect(value).toMatch(/^\d+(\.\d+)?rem$/)
      }
    })
  })

  describe('Border Radius', () => {
    it('should define border radius scale', () => {
      const radiusVars = [
        '--radius-sm',
        '--radius-md',
        '--radius-lg',
        '--radius-xl',
        '--radius-2xl',
        '--radius-full',
      ]

      for (const radius of radiusVars) {
        const value = rootStyles?.getPropertyValue(radius)
        expect(value).toBeTruthy()
      }
    })
  })

  describe('Shadows', () => {
    it('should define shadow scale', () => {
      const shadowVars = [
        '--shadow-sm',
        '--shadow-md',
        '--shadow-lg',
        '--shadow-xl',
        '--shadow-2xl',
        '--shadow-inner',
      ]

      for (const shadow of shadowVars) {
        const value = rootStyles?.getPropertyValue(shadow)
        expect(value).toBeTruthy()
      }
    })
  })

  describe('Animation', () => {
    it('should define animation durations', () => {
      const durationVars = ['--duration-fast', '--duration-normal', '--duration-slow']

      for (const duration of durationVars) {
        const value = rootStyles?.getPropertyValue(duration)
        expect(value).toBeTruthy()
        expect(value).toMatch(/^\d+ms$/)
      }
    })

    it('should define easing functions', () => {
      const easeVars = ['--ease-out-expo', '--ease-in-out-expo']

      for (const ease of easeVars) {
        const value = rootStyles?.getPropertyValue(ease)
        expect(value).toBeTruthy()
        expect(value).toMatch(/^cubic-bezier/)
      }
    })
  })

  describe('Layout', () => {
    it('should define container max widths', () => {
      const containerVars = ['--container-max', '--container-narrow']

      for (const container of containerVars) {
        const value = rootStyles?.getPropertyValue(container)
        expect(value).toBeTruthy()
      }
    })
  })
})

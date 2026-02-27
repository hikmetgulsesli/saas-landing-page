import { describe, it, expect, beforeAll } from 'vitest'

describe('Design Tokens', () => {
  let rootStyles: CSSStyleDeclaration | null = null

  beforeAll(() => {
    // Get computed styles from document root
    rootStyles = getComputedStyle(document.documentElement)
  })

  // Helper function to check CSS custom properties
  const checkCssVariables = (
    variables: string[],
    pattern?: RegExp
  ) => {
    for (const variable of variables) {
      const value = rootStyles?.getPropertyValue(variable).trim()
      expect(value, `${variable} should have a value`).toBeTruthy()
      if (pattern) {
        expect(value, `${variable} should match ${pattern}`).toMatch(pattern)
      }
    }
  }

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

      checkCssVariables(brandColors, /^#[0-9a-fA-F]{6}$/)
    })

    it('should define accent colors', () => {
      const accentColors = ['--color-accent', '--color-accent-light', '--color-accent-dark']
      
      checkCssVariables(accentColors, /^#[0-9a-fA-F]{6}$/)
    })
  })

  describe('Semantic Colors', () => {
    it('should define surface colors', () => {
      const surfaceColors = [
        '--color-surface-primary',
        '--color-surface-secondary',
        '--color-surface-tertiary',
      ]

      checkCssVariables(surfaceColors)
    })

    it('should define text colors', () => {
      const textColors = [
        '--color-text-primary',
        '--color-text-secondary',
        '--color-text-muted',
      ]

      checkCssVariables(textColors)
    })

    it('should define status colors', () => {
      const statusColors = [
        '--color-success',
        '--color-warning',
        '--color-error',
        '--color-info',
      ]

      checkCssVariables(statusColors, /^#[0-9a-fA-F]{6}$/)
    })
  })

  describe('Typography', () => {
    it('should define font families', () => {
      const fontFamilies = ['--font-sans', '--font-display', '--font-mono']

      checkCssVariables(fontFamilies)
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

      checkCssVariables(fontSizes, /^(\d+(\.\d+)?(rem|px|em)|\d+)$/)
    })

    it('should define font weights', () => {
      const fontWeights = [
        '--font-weight-normal',
        '--font-weight-medium',
        '--font-weight-semibold',
        '--font-weight-bold',
      ]

      checkCssVariables(fontWeights)
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

      checkCssVariables(spacingVars, /^\d+(\.\d+)?rem$/)
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

      checkCssVariables(radiusVars)
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

      checkCssVariables(shadowVars)
    })
  })

  describe('Animation', () => {
    it('should define animation durations', () => {
      const durationVars = ['--duration-fast', '--duration-normal', '--duration-slow']

      checkCssVariables(durationVars, /^\d+ms$/)
    })

    it('should define easing functions', () => {
      const easeVars = ['--ease-out-expo', '--ease-in-out-expo']

      checkCssVariables(easeVars, /^cubic-bezier/)
    })
  })

  describe('Layout', () => {
    it('should define container max widths', () => {
      const containerVars = ['--container-max', '--container-narrow']

      checkCssVariables(containerVars)
    })
  })
})

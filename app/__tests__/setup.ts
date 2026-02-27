import '@testing-library/jest-dom'

// Set up CSS custom properties for tests
const designTokens = `
  :root {
    --color-brand-50: #fef6f3;
    --color-brand-100: #fce8e2;
    --color-brand-200: #f8d0c5;
    --color-brand-300: #f2b09e;
    --color-brand-400: #e9876d;
    --color-brand-500: #e06347;
    --color-brand-600: #cf4a30;
    --color-brand-700: #ac3a26;
    --color-brand-800: #8d3223;
    --color-brand-900: #752d21;

    --color-accent: #0d7377;
    --color-accent-light: #14a085;
    --color-accent-dark: #095457;

    --color-surface-primary: #ffffff;
    --color-surface-secondary: #f8f9fa;
    --color-surface-tertiary: #e9ecef;

    --color-text-primary: #1a1d21;
    --color-text-secondary: #4a5059;
    --color-text-muted: #6c757d;

    --color-border: #dee2e6;
    --color-border-light: #e9ecef;

    --color-success: #2d6a4f;
    --color-warning: #b35900;
    --color-error: #c92a2a;
    --color-info: #1864ab;

    --font-sans: 'Geist', system-ui, sans-serif;
    --font-display: 'Geist', system-ui, sans-serif;
    --font-mono: 'Geist Mono', monospace;

    --font-size-display-lg: 4rem;
    --font-size-display: 3rem;
    --font-size-display-sm: 2.25rem;
    --font-size-heading-lg: 1.875rem;
    --font-size-heading: 1.5rem;
    --font-size-heading-sm: 1.25rem;
    --font-size-body-lg: 1.125rem;
    --font-size-body: 1rem;
    --font-size-body-sm: 0.875rem;
    --font-size-caption: 0.75rem;

    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    --space-4xs: 0.125rem;
    --space-3xs: 0.25rem;
    --space-2xs: 0.5rem;
    --space-xs: 0.75rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-2xl: 4rem;
    --space-3xl: 6rem;
    --space-4xl: 8rem;
    --space-5xl: 12rem;

    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    --radius-full: 9999px;

    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);

    --duration-fast: 150ms;
    --duration-normal: 250ms;
    --duration-slow: 350ms;
    --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
    --ease-in-out-expo: cubic-bezier(0.87, 0, 0.13, 1);

    --container-max: 1280px;
    --container-narrow: 768px;
  }
`

// Inject CSS into document
const style = document.createElement('style')
style.textContent = designTokens
document.head.appendChild(style)

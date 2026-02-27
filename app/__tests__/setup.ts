import '@testing-library/jest-dom'
import fs from 'node:fs'
import path from 'node:path'

// Set up CSS custom properties for tests by loading the actual CSS file.
const cssFile = path.join(process.cwd(), 'app/globals.css')
const css = fs.readFileSync(cssFile, 'utf8')

// Inject CSS into document
const style = document.createElement('style')
style.textContent = css
document.head.appendChild(style)

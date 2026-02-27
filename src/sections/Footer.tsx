import '../styles/Footer.css'

const links = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Documentation', 'API Reference', 'Guides', 'Support'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="brand-name">
              <span className="gradient-text">SaaS</span>Platform
            </h3>
            <p>Building the future of automation, one workflow at a time.</p>
          </div>
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="footer-links">
              <h4>{category}</h4>
              <ul>
                {items.map((item, index) => (
                  <li key={index}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SaaS Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

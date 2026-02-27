import '../styles/CTA.css'

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <h2>Ready to get started?</h2>
          <p>Join thousands of teams already shipping faster with our platform.</p>
          <div className="cta-actions">
            <button className="btn btn-primary">Start Free Trial</button>
            <button className="btn btn-secondary">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

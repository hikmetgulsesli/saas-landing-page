import '../styles/Testimonials.css'

const testimonials = [
  {
    quote: "This platform transformed how we handle operations. We've cut our processing time by 70%.",
    author: 'Sarah Chen',
    role: 'CTO, TechFlow',
    avatar: 'SC'
  },
  {
    quote: "The AI automation is incredible. It's like having an extra team member that never sleeps.",
    author: 'Marcus Johnson',
    role: 'Founder, DataSync',
    avatar: 'MJ'
  },
  {
    quote: "Best investment we've made. The ROI was visible within the first month.",
    author: 'Elena Rodriguez',
    role: 'VP Engineering, CloudNine',
    avatar: 'ER'
  }
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Loved by teams worldwide</h2>
          <p>See what our customers have to say</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="quote-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="avatar">{t.avatar}</div>
                <div className="author-info">
                  <span className="author-name">{t.author}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

// MARK: TestimonialsSection
// Visar kundomdömen från API

export default function TestimonialsSection({ testimonials = [] }) {
  // Om det inte finns några testimonials, visa ett meddelande
  if (testimonials.length === 0) {
    return (
      <section className="testimonials">
        <div className="testimonials-inner">
          <p className="testimonials-tag">Testimonials</p>
          <h2 className="testimonials-heading">See What Our Client Have to Say</h2>
          <p>No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <p className="testimonials-tag">Testimonials</p>

        <h2 className="testimonials-heading">
          See What Our Client Have to Say
        </h2>

        <p className="testimonials-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="testimonial-item"
            >
              <div className="testimonial-stars">
                {'★'.repeat(testimonial.rating || 5)}
              </div>

              <p className="testimonial-text">"{testimonial.comment}"</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <div className="testimonial-meta">
                  <p className="testimonial-name">
                    {testimonial.name}
                  </p>
                  <p className="testimonial-role">
                    {testimonial.companyName}
                  </p>
                </div>
                <div className="testimonial-quote-icon">❞</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
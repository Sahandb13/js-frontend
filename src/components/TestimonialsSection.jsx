// MARK: TestimonialsSection-komponent {/* Komponenten visar testimonials i en sektion */}

export default function TestimonialsSection({ testimonials = [] }) {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <p className="testimonials-tag">Testimonials</p>
        <h2 className="testimonials-heading">
          See What Our Client Have to Say
        </h2>
        <p className="testimonials-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>

        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonial-item">
              <div className="testimonial-stars">
                {"★★★★"}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar" />
                <div className="testimonial-meta">
                  <p className="testimonial-name">{testimonial.author}</p>
                  <p className="testimonial-role">Customer</p>
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

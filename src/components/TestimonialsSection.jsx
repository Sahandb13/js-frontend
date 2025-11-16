// MARK: TestimonialsSection
// Layout och struktur är delvis framtagen med hjälp av AI (justerad manuellt).

export default function TestimonialsSection({ testimonials = [] }) {

  const fallbackTestimonials = [ // Skulle api anrop misslyckas så visas dessa testimonials
    {
      id: 1,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
      author: "Aiden Harvey",
      role: "Customer",
    },
    {
      id: 2,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
      author: "Carrisa Jocelyn",
      role: "Customer",
    },
    {
      id: 3,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero lectus, porta nec turpis sit amet, lobortis fringilla ante.",
      author: "Celvin Gabriel",
      role: "Customer",
    },
  ];

  const itemsToRender =
    testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;

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
          {itemsToRender.map((item, index) => (
            <article
              key={item.id ?? index}
              className="testimonial-item"
            >
              <div className="testimonial-stars">★★★★</div>

              <p className="testimonial-text">"{item.text}"</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar" />
                <div className="testimonial-meta">
                  <p className="testimonial-name">
                    {item.author ?? item.name}
                  </p>
                  <p className="testimonial-role">
                    {item.role ?? "Customer"}
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

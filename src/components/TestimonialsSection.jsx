// MARK: TestimonialsSection-komponent (arrays)
// Visar en lista med kundomdömen
export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials"> 

        <h2 className="testimonials-title">Vad våra kunder säger</h2>
        
        <div className="testimonials-list">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <p className="testimonial-author">- {testimonial.author}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
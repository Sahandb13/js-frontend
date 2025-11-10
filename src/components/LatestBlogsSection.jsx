// MARK: LatestBlogsSection (egen komponent för bloggsektionen) {/* Tagen från DOM -Selektorer & Events */} 

export default function LatestBlogsSection({ blogs }) {
  return (
    <section className="latest-blogs">
      <h2>Senaste blogginlägg</h2>

      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-card">
            <h3 className="blog-title">{blog.title}</h3> {/* Tagen från DOM -Selektorer & Events */} 
            <p className="blog-date">{blog.date}</p> {/* Tagen från DOM -Selektorer & Events */}
            <p className="blog-excerpt">{blog.excerpt}</p> {/* Tagen från DOM -Selektorer & Events */}
          </article>
        ))}
      </div>
    </section>
  );
}

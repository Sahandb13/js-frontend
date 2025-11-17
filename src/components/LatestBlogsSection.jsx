/* MARK: LatestBlogsSection */
// Visar de senaste blogginläggen i ett rutnät med kort

import { useState } from "react";

function formatDate(dateString) {
  if (!dateString) return "Unknown date";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getExcerpt(text, maxLength = 180) {  // Framtagen med hjälp av AI
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "…";
}

//  Enskilt bloggkort-komponent
function BlogCard({ blog }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="blog-card">
      {/* Bild */}
      <div className="blog-image-wrapper">
        <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
      </div>

      {/* Body */}
      <div className="blog-card-body">
        {/* Datum */}
        <div className="blog-date-row">
          <span className="blog-date-icon">📅</span>
          <span>{formatDate(blog.created)}</span>
        </div>

        {/* Titel */}
        <h3 className="blog-title">{blog.title}</h3>

        {/* Text, // Framtagen med hjälp av AI */}
        <p className="blog-excerpt">
          {expanded ? blog.description : getExcerpt(blog.description)} 
        </p>

        {/*  READ MORE / LESS // Framtagen med hjälp av AI*/}
        <p
          className="read-more-link"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read less" : "Read more"} →
        </p>
      </div>
    </article>
  );
}

// Huvudsektionen, visar senaste bloggarna i ett rutnät
export default function LatestBlogsSection({ blogs = [] }) {
  return (
    <section className="latest-blogs">
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

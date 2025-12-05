import { FaNewspaper, FaBookOpen, FaEnvelopeOpenText } from "react-icons/fa";
import "../styles/homeblog.css";

export default function HomeBlogSection() {
  return (
    <section className="home-blog">
      <h2 className="section-title">Latest From Our Health Library</h2>
      <p className="section-subtitle">Articles, blogs, and expert health tips</p>

      <div className="blog-grid">

        {/* ARTICLE CARD */}
        <div className="blog-card" onClick={() => window.location.href = "/articles"}>
          <FaNewspaper className="blog-icon" />
          <h3>Articles</h3>
          <p>Read medically reviewed health articles written by certified doctors.</p>
          <span className="learn-more">Explore Articles →</span>
        </div>

        {/* BLOG CARD */}
        <div className="blog-card" onClick={() => window.location.href = "/blogs"}>
          <FaBookOpen className="blog-icon" />
          <h3>Blogs</h3>
          <p>Discover real-life stories, wellness advice, and expert health insights.</p>
          <span className="learn-more">Visit Blog →</span>
        </div>

        {/* NEWSLETTER CARD */}
        <div className="blog-card" onClick={() => window.location.href = "/newsletter"}>
          <FaEnvelopeOpenText className="blog-icon" />
          <h3>Newsletter</h3>
          <p>Subscribe to receive weekly health tips and wellness guidance.</p>
          <span className="learn-more">Subscribe →</span>
        </div>

      </div>
    </section>
  );
}

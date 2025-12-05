import "../styles/newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter-page">
      <h1 className="page-title">Subscribe to Our Newsletter</h1>
      <p className="page-subtitle">Get weekly health tips, doctor insights, and wellness updates.</p>

      <div className="newsletter-box">
        <input
          type="email"
          placeholder="Enter your email address"
          className="newsletter-input"
        />
        <button className="newsletter-btn">Subscribe</button>
      </div>
    </div>
  );
}

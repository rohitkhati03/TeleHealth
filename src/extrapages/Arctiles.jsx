import "../styles/arctile.css";

export default function Articles() {
  const categories = ["Health Tips", "Mental Wellness", "Diet & Nutrition", "Lifestyle", "Medical Guides"];

  const articles = [
    { id: 1, title: "10 Ways to Boost Immunity Naturally", category: "Health Tips", date: "Jan 15, 2025" },
    { id: 2, title: "Understanding Anxiety & How to Manage It", category: "Mental Wellness", date: "Feb 1, 2025" },
    { id: 3, title: "Top 5 Healthy Breakfast Recipes", category: "Diet & Nutrition", date: "Feb 3, 2025" },
    { id: 4, title: "How to Improve Sleep Quality", category: "Lifestyle", date: "Jan 29, 2025" },
  ];

  return (
    <div className="articles-page">
      <h1 className="page-title">Health Articles</h1>

      {/* Categories */}
      <div className="articles-categories">
        {categories.map((cat) => (
          <button key={cat} className="category-btn">{cat}</button>
        ))}
      </div>

      {/* Article List */}
      <div className="articles-grid">
        {articles.map((art) => (
          <div key={art.id} className="article-card">
            <h3>{art.title}</h3>
            <p className="article-meta">{art.category} • {art.date}</p>
            <button className="read-more-btn">Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

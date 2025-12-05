import "../styles/blog.css";
import { useState } from "react";

export default function Blogs() {
  const categories = ["All", "Fitness", "Nutrition", "Mindfulness", "Disease Awareness"];

  const blogPosts = [
    { id: 1, title: "How to Start Your Fitness Journey", category: "Fitness" },
    { id: 2, title: "Healthy Eating Habits", category: "Nutrition" },
    { id: 3, title: "Meditation for Beginners", category: "Mindfulness" },
    { id: 4, title: "Understanding Diabetes", category: "Disease Awareness" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogPosts.filter((post) =>
    (selectedCategory === "All" || post.category === selectedCategory) &&
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blogs-page">
      <h1 className="page-title">Latest Blog Posts</h1>

      {/* Search Bar */}
      <div className="blog-search">
        <input 
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="blog-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`blog-cat-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p className="blog-category">{blog.category}</p>
            <button className="read-blog-btn">Read Blog →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

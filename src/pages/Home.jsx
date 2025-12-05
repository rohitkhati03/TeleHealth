import HomeSlider from "../components/HomeSlider";
import DoctorCard from "../components/DoctorCards";
import Footer from "../components/Footer";
import TestimonialList from "../components/TestimonialList";
import HomeBlogSection from "../components/HomeBlogSection";   // ⭐ ADD THIS
import WellBeingCards from "../components/WellBeingCards";

export default function Home() {

  const testimonials = [
    { name: "Palak", feedback: "This is an amazing service!" },
    { name: "Priya", feedback: "I loved the experience!" },
    { name: "Amit", feedback: "Highly recommend to everyone." },
    { name: "Sneha", feedback: "A highly grateful experience!" },
    { name: "Rohit", feedback: "Professional and friendly staff." },
    { name: "Anjali", feedback: "The service exceeded my expectations." },
    { name: "Vikram", feedback: "Quick and reliable response." },
    { name: "Simran", feedback: "I feel very cared for here." },
    { name: "Karan", feedback: "Top-notch quality and support." },
    { name: "Neha", feedback: "Would definitely recommend to friends." },
  ];

  return (
    <>
      <HomeSlider />
      <DoctorCard />

      {/* ⭐ NEW SECTION: ARTICLES + BLOG + NEWSLETTER */}
      <HomeBlogSection />

<div
  style={{
    position: "relative",
    textAlign: "center",
    padding: "60px 20px",
    minHeight: "55vh",
    overflow: "hidden",
    background: `linear-gradient(
      135deg,
      #2E5BFF 0%,
      #4C73FF 40%,
      #6A8BFF 100%
    )`,
  }}
>
  {/* Soft highlight blobs (non-animated, just decorative) */}
  <div
    style={{
      position: "absolute",
      top: "12%",
      left: "8%",
      width: "180px",
      height: "180px",
      background: "rgba(255, 255, 255, 0.18)",
      borderRadius: "50%",
      filter: "blur(55px)",
    }}
  />

  <div
    style={{
      position: "absolute",
      bottom: "18%",
      right: "12%",
      width: "220px",
      height: "220px",
      background: "rgba(255, 255, 255, 0.15)",
      borderRadius: "50%",
      filter: "blur(60px)",
    }}
  />

  <h1 style={{ color: "#ffffff", fontSize: "32px", marginBottom: "25px" }}>
    Feedback
  </h1>

  <TestimonialList testimonials={testimonials} />
</div>
<WellBeingCards/>
      <Footer />
    </>
  );
}

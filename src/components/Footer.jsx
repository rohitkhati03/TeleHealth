import "../components/Footer.css";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 – BRAND INFO */}
        <div className="footer-section">
          <h3 className="footer-title">TeleHealth</h3>
          <p className="footer-description">
            Connecting you with top healthcare professionals from anywhere, anytime.
            Your trusted platform for virtual medical care.
          </p>

          <div className="social-icons">
            <a href="#"><Facebook size={22} /></a>
            <a href="#"><Twitter size={22} /></a>
            <a href="#"><Linkedin size={22} /></a>
            <a href="#"><Instagram size={22} /></a>
          </div>
        </div>

        {/* COLUMN 2 – SERVICES */}
        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><a href="#">Virtual Consultations</a></li>
            <li><a href="#">Mental Health Support</a></li>
            <li><a href="#">Prescription Services</a></li>
            <li><a href="#">Diagnostic Reports</a></li>
            <li><a href="#">Online Health Records</a></li>
          </ul>
        </div>

        {/* COLUMN 3 – QUICK LINKS */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Find a Doctor</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        {/* COLUMN 4 – CONTACT INFO */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>

          <ul className="contact-list">
            <li>
              <Phone size={20} />
              <span>1-800-TELEHEALTH <br /><small>Available 24/7</small></span>
            </li>

            <li>
              <Mail size={20} />
              <span>support@telehealth.com</span>
            </li>

            <li>
              <MapPin size={20} />
              <span>123 Healthcare Lane, Medical District, New York</span>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 TeleHealth. All rights reserved.</p>

        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">HIPAA Compliance</a>
        </div>
      </div>
    </footer>
  );
}

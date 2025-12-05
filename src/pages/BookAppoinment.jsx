import Footer from "../components/Footer";
import { useState } from "react";
import { FaUserMd, FaFilter } from "react-icons/fa";
import "../styles/bookappoinment.css";

/* ============================================================
   STEP 2 → Time Slot Component 
   (Must be outside main component to avoid re-render freeze)
============================================================ */
const TimeSlotStep = ({ slots, selectedSlot, setSelectedSlot, setStep }) => (
  <div className="step-box">
    <h2>Select Time Slot</h2>

    <div className="slot-grid">
      {slots.map((slot) => (
        <button
          key={slot}
          className={`slot-btn ${selectedSlot === slot ? "active-slot" : ""}`}
          onClick={() => setSelectedSlot(slot)}
        >
          {slot}
        </button>
      ))}
    </div>

    <div className="navigation">
      <button onClick={() => setStep(1)} className="back-btn">Back</button>
      <button
        disabled={!selectedSlot}
        onClick={() => setStep(3)}
        className="next-btn"
      >
        Next
      </button>
    </div>
  </div>
);

/* ============================================================
   STEP 3 → Personal Details Component 
============================================================ */
const PersonalDetailsStep = ({ formData, setFormData, setStep }) => (
  <div className="step-box">
    <h2>Patient Details</h2>

    <div className="form-group">
      <label>Name *</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <label>Age *</label>
      <input
        type="number"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />

      <label>Gender *</label>
      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
      >
        <option value="">Select gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <label>Phone Number *</label>
      <input
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      <label>Symptoms (optional)</label>
      <textarea
        value={formData.symptoms}
        onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
      />
    </div>

    <div className="navigation">
      <button onClick={() => setStep(2)} className="back-btn">Back</button>
      <button
        disabled={
          !formData.name ||
          !formData.age ||
          !formData.gender ||
          !formData.phone
        }
        onClick={() => setStep(4)}
        className="next-btn"
      >
        Next
      </button>
    </div>
  </div>
);

/* ============================================================
   STEP 4 → Confirmation Component 
============================================================ */
const ConfirmationStep = ({ selectedDoctor, selectedSlot, setStep }) => (
  <div className="step-box">
    <h2>Confirm Appointment</h2>

    <div className="summary-box">
      <h3>{selectedDoctor.name}</h3>
      <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
      <p><strong>Time Slot:</strong> {selectedSlot}</p>

      <h4>Fees</h4>
      <p>Doctor Fee: ₹{selectedDoctor.fee}</p>
      <p>Platform Fee: ₹50</p>
      <h3>Total: ₹{selectedDoctor.fee + 50}</h3>
    </div>

    <button className="confirm-btn">Confirm & Pay</button>

    <div className="navigation">
      <button onClick={() => setStep(3)} className="back-btn">Back</button>
    </div>
  </div>
);

/* ============================================================
   MAIN COMPONENT (NO STEP DEFINITIONS INSIDE)
============================================================ */
export default function BookAppointment() {
  const categories = [
    "General Physician", "Pediatrician", "Dermatologist", "Gynecologist",
    "Cardiologist", "Orthopedic", "ENT Specialist", "Neurologist",
    "Psychiatrist", "Gastroenterologist", "Dentist", "Dietitian",
  ];

  const doctors = [
// "General Physician"
    { id: 1, name: "Dr. Arjun Verma", specialty: "General Physician", experience: 4, fee: 400, image: "https://via.placeholder.com/80", online: true },
    { id: 2, name: "Dr. Meera Chawla", specialty: "General Physician", experience: 6, fee: 450, image: "https://via.placeholder.com/80", online: false },
    { id: 3, name: "Dr. Rohan Patil", specialty: "General Physician", experience: 3, fee: 350, image: "https://via.placeholder.com/80", online: true },
    { id: 4, name: "Dr. Kavita Suri", specialty: "General Physician", experience: 8, fee: 500, image: "https://via.placeholder.com/80", online: true },
    { id: 5, name: "Dr. Vikram Shetty", specialty: "General Physician", experience: 10, fee: 600, image: "https://via.placeholder.com/80", online: false },
    { id: 6, name: "Dr. Neha Arora", specialty: "General Physician", experience: 5, fee: 420, image: "https://via.placeholder.com/80", online: true },
// Pediatrician
    { id: 7, name: "Dr. Kavita Mehta", specialty: "Pediatrician", experience: 5, fee: 500, image: "https://via.placeholder.com/80", online: true },
  { id: 8, name: "Dr. Rakesh Nanda", specialty: "Pediatrician", experience: 7, fee: 550, image: "https://via.placeholder.com/80", online: false },
  { id: 9, name: "Dr. Sneha Bajaj", specialty: "Pediatrician", experience: 4, fee: 450, image: "https://via.placeholder.com/80", online: true },
  { id: 10, name: "Dr. Pooja Dutt", specialty: "Pediatrician", experience: 6, fee: 600, image: "https://via.placeholder.com/80", online: true },
  { id: 11, name: "Dr. Santosh Gawde", specialty: "Pediatrician", experience: 9, fee: 650, image: "https://via.placeholder.com/80", online: false },
  { id: 12, name: "Dr. Alka Singh", specialty: "Pediatrician", experience: 3, fee: 400, image: "https://via.placeholder.com/80", online: true },
//"Dermatologist"
  { id: 13, name: "Dr. Neha Kapoor", specialty: "Dermatologist", experience: 6, fee: 600, image: "https://via.placeholder.com/80", online: true },
  { id: 14, name: "Dr. Karan Oberoi", specialty: "Dermatologist", experience: 8, fee: 650, image: "https://via.placeholder.com/80", online: false },
  { id: 15, name: "Dr. Rhea Bhatia", specialty: "Dermatologist", experience: 5, fee: 500, image: "https://via.placeholder.com/80", online: true },
  { id: 16, name: "Dr. Nishant Wadhwa", specialty: "Dermatologist", experience: 10, fee: 800, image: "https://via.placeholder.com/80", online: false },
  { id: 17, name: "Dr. Meenal Soni", specialty: "Dermatologist", experience: 3, fee: 450, image: "https://via.placeholder.com/80", online: true },
  { id: 18, name: "Dr. Aisha Khan", specialty: "Dermatologist", experience: 7, fee: 550, image: "https://via.placeholder.com/80", online: true },
//"Gynecologist"
     { id: 19, name: "Dr. Ritu Agarwal", specialty: "Gynecologist", experience: 7, fee: 550, image: "https://via.placeholder.com/80", online: true },
  { id: 20, name: "Dr. Swati Bansal", specialty: "Gynecologist", experience: 9, fee: 700, image: "https://via.placeholder.com/80", online: false },
  { id: 21, name: "Dr. Meenakshi Rai", specialty: "Gynecologist", experience: 5, fee: 500, image: "https://via.placeholder.com/80", online: true },
  { id: 22, name: "Dr. Namita Yadav", specialty: "Gynecologist", experience: 12, fee: 850, image: "https://via.placeholder.com/80", online: true },
  { id: 23, name: "Dr. Shreya Rathi", specialty: "Gynecologist", experience: 6, fee: 600, image: "https://via.placeholder.com/80", online: false },
  { id: 24, name: "Dr. Ananya D’Souza", specialty: "Gynecologist", experience: 4, fee: 480, image: "https://via.placeholder.com/80", online: true },

// "Cardiologist"
    { id: 25, name: "Dr. Priya Sharma", specialty: "Cardiologist", experience: 8, fee: 700, image: "https://via.placeholder.com/80", online: false },
  { id: 26, name: "Dr. Manish Kelkar", specialty: "Cardiologist", experience: 10, fee: 800, image: "https://via.placeholder.com/80", online: true },
  { id: 27, name: "Dr. Rahul Mehra", specialty: "Cardiologist", experience: 12, fee: 950, image: "https://via.placeholder.com/80", online: false },
  { id: 28, name: "Dr. Tanvi Dhawan", specialty: "Cardiologist", experience: 7, fee: 650, image: "https://via.placeholder.com/80", online: true },
  { id: 29, name: "Dr. Kunal Bhagat", specialty: "Cardiologist", experience: 15, fee: 1000, image: "https://via.placeholder.com/80", online: true },
  { id: 30, name: "Dr. Ayesha Mirza", specialty: "Cardiologist", experience: 9, fee: 720, image: "https://via.placeholder.com/80", online: false },
// "Orthopedic"
     { id: 31, name: "Dr. Raghav Singh", specialty: "Orthopedic", experience: 10, fee: 750, image: "https://via.placeholder.com/80", online: false },
  { id: 32, name: "Dr. Mitesh Gada", specialty: "Orthopedic", experience: 6, fee: 550, image: "https://via.placeholder.com/80", online: true },
  { id: 33, name: "Dr. Neelam Pandey", specialty: "Orthopedic", experience: 8, fee: 620, image: "https://via.placeholder.com/80", online: true },
  { id: 34, name: "Dr. Lokesh Arora", specialty: "Orthopedic", experience: 12, fee: 900, image: "https://via.placeholder.com/80", online: false },
  { id: 35, name: "Dr. Pritam Biswas", specialty: "Orthopedic", experience: 4, fee: 500, image: "https://via.placeholder.com/80", online: true },
  { id: 36, name: "Dr. Rina D’Souza", specialty: "Orthopedic", experience: 7, fee: 600, image: "https://via.placeholder.com/80", online: false },
// "ENT Specialist"
     { id: 37, name: "Dr. Sneha Nair", specialty: "ENT Specialist", experience: 6, fee: 480, image: "https://via.placeholder.com/80", online: true },
  { id: 38, name: "Dr. Sameer Tandon", specialty: "ENT Specialist", experience: 9, fee: 600, image: "https://via.placeholder.com/80", online: false },
  { id: 39, name: "Dr. Alisha Wadhwa", specialty: "ENT Specialist", experience: 5, fee: 450, image: "https://via.placeholder.com/80", online: true },
  { id: 40, name: "Dr. Vivek Rawat", specialty: "ENT Specialist", experience: 11, fee: 700, image: "https://via.placeholder.com/80", online: false },
  { id: 41, name: "Dr. Farah Ali", specialty: "ENT Specialist", experience: 3, fee: 380, image: "https://via.placeholder.com/80", online: true },
  { id: 42, name: "Dr. Milan Gupta", specialty: "ENT Specialist", experience: 7, fee: 520, image: "https://via.placeholder.com/80", online: false },
// "Neurologist"
 { id: 43, name: "Dr. Manish Gupta", specialty: "Neurologist", experience: 12, fee: 900, image: "https://via.placeholder.com/80", online: false },
  { id: 44, name: "Dr. Zoya Siddiqui", specialty: "Neurologist", experience: 9, fee: 850, image: "https://via.placeholder.com/80", online: true },
  { id: 45, name: "Dr. Karthik Nair", specialty: "Neurologist", experience: 15, fee: 1100, image: "https://via.placeholder.com/80", online: true },
  { id: 46, name: "Dr. Pawan Sethi", specialty: "Neurologist", experience: 7, fee: 700, image: "https://via.placeholder.com/80", online: false },
  { id: 47, name: "Dr. Leena Reddy", specialty: "Neurologist", experience: 5, fee: 600, image: "https://via.placeholder.com/80", online: true },
  { id: 48, name: "Dr. Rajesh Sharma", specialty: "Neurologist", experience: 10, fee: 1000, image: "https://via.placeholder.com/80", online: false },

// "Psychiatrist"
{ id: 49, name: "Dr. Harshvardhan Rao", specialty: "Psychiatrist", experience: 9, fee: 650, image: "https://via.placeholder.com/80", online: false },
  { id: 50, name: "Dr. Sana Qureshi", specialty: "Psychiatrist", experience: 5, fee: 500, image: "https://via.placeholder.com/80", online: true },
  { id: 51, name: "Dr. Akash Biyani", specialty: "Psychiatrist", experience: 11, fee: 780, image: "https://via.placeholder.com/80", online: false },
  { id: 52, name: "Dr. Priti Kulkarni", specialty: "Psychiatrist", experience: 7, fee: 600, image: "https://via.placeholder.com/80", online: true },
  { id: 53, name: "Dr. Rohan Gokhale", specialty: "Psychiatrist", experience: 13, fee: 900, image: "https://via.placeholder.com/80", online: false },
  { id: 54, name: "Dr. Ananya Bose", specialty: "Psychiatrist", experience: 4, fee: 450, image: "https://via.placeholder.com/80", online: true },
// "Gastroenterologist"
 { id: 55, name: "Dr. Ravi Kulshreshtha", specialty: "Gastroenterologist", experience: 10, fee: 900, image: "https://via.placeholder.com/80", online: true },
  { id: 56, name: "Dr. Tanvi Jaiswal", specialty: "Gastroenterologist", experience: 6, fee: 700, image: "https://via.placeholder.com/80", online: false },
  { id: 57, name: "Dr. Umesh Pawar", specialty: "Gastroenterologist", experience: 12, fee: 950, image: "https://via.placeholder.com/80", online: true },
  { id: 58, name: "Dr. Isha Narayan", specialty: "Gastroenterologist", experience: 4, fee: 600, image: "https://via.placeholder.com/80", online: false },
  { id: 59, name: "Dr. Arvind Joshi", specialty: "Gastroenterologist", experience: 8, fee: 850, image: "https://via.placeholder.com/80", online: true },
  { id: 60, name: "Dr. Meenal Khatri", specialty: "Gastroenterologist", experience: 5, fee: 650, image: "https://via.placeholder.com/80", online: false },
// "Dentist"
{ id: 61, name: "Dr. Anjali Deshmukh", specialty: "Dentist", experience: 5, fee: 350, image: "https://via.placeholder.com/80", online: true },
  { id: 62, name: "Dr. Vinay Kumar", specialty: "Dentist", experience: 8, fee: 500, image: "https://via.placeholder.com/80", online: false },
  { id: 63, name: "Dr. Harshada Patkar", specialty: "Dentist", experience: 4, fee: 320, image: "https://via.placeholder.com/80", online: true },
  { id: 64, name: "Dr. Ajinkya Modak", specialty: "Dentist", experience: 10, fee: 650, image: "https://via.placeholder.com/80", online: false },
  { id: 65, name: "Dr. Nikita Vernekar", specialty: "Dentist", experience: 6, fee: 450, image: "https://via.placeholder.com/80", online: true },
  { id: 66, name: "Dr. Prakash Rawal", specialty: "Dentist", experience: 12, fee: 700, image: "https://via.placeholder.com/80", online: false },
//"Dietitian"
 { id: 67, name: "Dr. Ishita Roy", specialty: "Dietitian", experience: 3, fee: 300, image: "https://via.placeholder.com/80", online: true },
  { id: 68, name: "Dr. Komal Gawande", specialty: "Dietitian", experience: 4, fee: 320, image: "https://via.placeholder.com/80", online: false },
  { id: 69, name: "Dr. Mahima Singh", specialty: "Dietitian", experience: 6, fee: 400, image: "https://via.placeholder.com/80", online: true },
  { id: 70, name: "Dr. Varsha Shelar", specialty: "Dietitian", experience: 5, fee: 360, image: "https://via.placeholder.com/80", online: true },
  { id: 71, name: "Dr. Radhika Menon", specialty: "Dietitian", experience: 8, fee: 500, image: "https://via.placeholder.com/80", online: false },
  { id: 72, name: "Dr. Tanisha Bhatt", specialty: "Dietitian", experience: 4, fee: 350, image: "https://via.placeholder.com/80", online: true },

  ];

  // Main States
  const [selectedCategory, setSelectedCategory] = useState("General Physician");
  const [searchQuery, setSearchQuery] = useState("");
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    symptoms: "",
  });

  const slots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "11:00 AM",
    "2:00 PM", "2:30 PM", "3:00 PM",
    "6:00 PM", "6:30 PM", "7:00 PM"
  ];

  const filteredDoctors = doctors.filter((doc) =>
    doc.specialty === selectedCategory &&
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {step === 1 && (
        <>
          <h2 style={{ textAlign: "center" }}>Book Appointment</h2>

          {/* TOP FILTER */}
          <div className="top-filter-row">
            <div className="search-group">
              <FaUserMd className="top-icon" />
              <input
                type="text"
                className="search-bar"
                placeholder="Search doctor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="dropdown-group">
              <FaFilter className="top-icon" />
              <select
                className="category-dropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* DOCTOR CARDS */}
          <div className="doctor-grid">
            {filteredDoctors.map((doc) => (
              <div
                key={doc.id}
                className="doctor-card-min"
                onClick={() => {
                  setSelectedDoctor(doc);
                  setStep(2);
                }}
              >
                <div className="avatar-wrapper">
                  <img src={doc.image} className="doc-avatar" />
                  <span className={`status-dot ${doc.online ? "online" : "offline"}`} />
                </div>

                <h3 className="doc-name">{doc.name}</h3>
                <p className="doc-specialty">{doc.specialty}</p>
                <p className="doc-experience">{doc.experience} yrs exp</p>
                <p className="doc-fee">₹{doc.fee}</p>

                <button className="doc-book-btn">Book Appointment</button>
              </div>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <TimeSlotStep
          slots={slots}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          setStep={setStep}
        />
      )}

      {step === 3 && (
        <PersonalDetailsStep
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}

      {step === 4 && (
        <ConfirmationStep
          selectedDoctor={selectedDoctor}
          selectedSlot={selectedSlot}
          setStep={setStep}
        />
      )}

      <Footer />
    </>
  );
}

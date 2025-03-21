import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        {submitted ? (
          <div className="alert alert-success text-center">
            Thanks for reaching out! We'll get back to you soon.
          </div>
        ) : (
          <form className="mx-auto" style={{ maxWidth: "500px" }} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" name="name" id="name" value={form.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea name="message" id="message" value={form.message} onChange={handleChange} className="form-control" rows="4" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Contact;

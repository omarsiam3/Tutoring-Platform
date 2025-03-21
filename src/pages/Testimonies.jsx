import Header from "../Components/Header";
import Footer from "../Components/Footer";

const testimonials = [
  {
    name: "Sofia R.",
    feedback:
      "This platform helped me go from failing math to getting an A. My tutor was so patient and clear!",
  },
  {
    name: "Jamal T.",
    feedback:
      "As a working student, I loved being able to schedule sessions around my time. Super flexible!",
  },
  {
    name: "Emily C.",
    feedback:
      "The tutors actually cared about how I learned best. It wasn't just about the test, it was about real understanding.",
  },
  {
    name: "Luis M.",
    feedback:
      "Honestly the best tutoring experience I’ve ever had. The platform was smooth, and the tutor was amazing.",
  },
];

const Testimonies = () => {
  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className="text-center mb-5">What Students Are Saying</h2>
        <div className="row">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text">“{t.feedback}”</p>
                  <h5 className="card-title text-end mt-3">— {t.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Testimonies;

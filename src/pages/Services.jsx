import Header from "../Components/Header";
import Footer from "../Components/Footer";

const services = [
  {
    title: "1-on-1 Tutoring",
    description: "Personalized sessions tailored to your pace and learning style.",
  },
  {
    title: "Test Prep",
    description: "Targeted help for SAT, ACT, GRE, and other major exams.",
  },
  {
    title: "Homework Help",
    description: "On-demand support for challenging assignments and projects.",
  },
  {
    title: "Language Support",
    description: "Tutors available for English, Spanish, French, and more.",
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <section className="container py-5">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
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

export default Services;

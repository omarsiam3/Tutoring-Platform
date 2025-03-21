import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Student = () => {
  return (
    <>
      <Header />
      <section className="start container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 img-row">
            <div style={{ width: 400, height: 370 }}></div>
          </div>

          <div className="col-lg-6">
            <h1 className="display-6 fw-bold lh-1 mb-3">
              Tailored tutoring, Anytime
            </h1>
            <p className="lead">
              Pave your path to academic success with our exceptional online
              tutorial services! We offer a unique and personalized learning
              experience designed to meet the specific needs of each student.
              Our dedicated team of expert tutors is committed to providing you
              with the tools and knowledge you need to excel in your studies.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-lg px-4 me-md-2"
                style={{ backgroundColor: "#ffb413", color: "#fff" }}
                onClick={() => alert("Application feature coming soon!")}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Student;

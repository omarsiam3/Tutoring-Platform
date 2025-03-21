import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../assets/illustration-2.svg"; // Optional: use your own tutor image

const TutorJoin = () => {
  const handleJoinClick = () => {
    alert("Thanks for your interest! Tutor registration will open soon.");
  };

  return (
    <>
      <Header />
      <section className="container col-xxl-8 px-4 py-2 start tutor-join">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 img2-row text-center">
            {/* Replace with your image or keep the placeholder */}
            <img
              src={Banner}
              alt="Tutoring illustration"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold lh-1 mb-3">
              Every tutor lives for that{" "}
              <u>
                <i>lightbulb</i>
              </u>{" "}
              moment
            </h2>
            <p className="lead">
              We believe 1-on-1 tutoring can change a student’s life — and
              we’re always looking for tutors who share that belief. Join our
              tutor community to support the thousands of students learning
              online.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-lg px-4 me-md-2"
                style={{ backgroundColor: "#ffb413", color: "#fff" }}
                onClick={handleJoinClick}
              >
                Become a Tutor
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TutorJoin;

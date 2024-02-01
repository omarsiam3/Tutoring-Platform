import Header from "../Components/Header";
import Footer from "../Components/Footer";

const TutorJoin = () => {
  return (
    <>
      <Header />
      <div className="container col-xxl-8 px-4 py-2 start tutor-join">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 img2-row">
            <div style={{ width: 300, height: 500 }}></div>
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
              We believe 1:1 tutoring can change a student's life — and we're
              always looking for tutors who share that belief. Join our tutor
              community to support the hundreds of thousands of students
              already.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-lg px-4 me-md-2"
                style={{ backgroundColor: "#ffb413", color: "#fff" }}
              >
                Become a tutor
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}
      <div className="px-4 py-5 my-5 student-form">
        <h3 className=" fw-bold">One student. One tutor. Every week</h3>
        <div className="row">
          <p className="font-weight-bold">
            Complete this form to connect with an enrollment advisor and learn
            about our academic tutoring programs.
          </p>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div data-mdb-input-init className="form-outline ">
                <label className="form-label" htmlFor="form8Example1">
                  Firstname
                </label>
                <input
                  type="text"
                  id="form8Example1"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example2">
                  Lastname
                </label>
                <input
                  type="text"
                  id="form8Example2"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example3">
                  Phone number
                </label>
                <input
                  type="number"
                  id="form8Example3"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example4">
                  Email
                </label>
                <input
                  type="email"
                  id="form8Example4"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example5">
                  I need help:
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example3">
                  First name
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example4">
                  Last name
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example5">
                  Email address
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-check terms-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck1"
            />
            <label
              className="form-check-label termLabels"
              htmlFor="defaultCheck1"
            >
              By submitting my phone number and email address, I agree to be
              conducted regarding Royalty Tutorial Services, and agree to terms
              and conditions.
            </label>
          </div>
          <button type="button" className="btn btn-dark student-submit">
            Submit
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------ */}
      <div class="tutor-why ">
        <div class="container col-lg-12 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-lg-12">
              <h3 class="display-6 fw-bold lh-1 mb-3 col-lg-11">
                Why join our community of online tutors?
              </h3>
              <p class="lead col-lg-8">
                We enables tutors to build connections with learners. We take
                the behind-the-scenes scheduling and administration off your
                plate and empower you with award-winning technology, so you can
                focus on helping students grow and succeed.
              </p>
            </div>
          </div>
          {/* <div class="row col-lg-12">
            <div class="card col-lg-4" style={{ width: 18 + "rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card col-lg-4" style={{ width: 18 + "rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card col-lg-4" style={{ width: 18 + "rem" }}>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div> */}
          <div className="row why-card ">
            <div class="card card-image col-lg-4">
              <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h3 class="card-title pt-2">
                    <strong>Earn steady income</strong>
                  </h3>
                  <p>
                    Connect 1:1 with thousands of students and get paid weekly,
                    without invoicing or extra paperwork.
                  </p>
                </div>
              </div>
            </div>
            <div class="card card-image col-lg-4">
              <div class="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                <div>
                  <h3 class="card-title pt-2">
                    <strong>Build Your Network</strong>
                  </h3>
                  <p>
                    Join our private online community and engage with some
                    pretty incredible people.
                  </p>
                </div>
              </div>
            </div>
            <div class="card card-image col-lg-4">
              <div class="text-white text-center d-flex align-items-center py-5 px-4">
                <div>
                  <h3 class="card-title pt-2">
                    <strong>Improve student outcomes.</strong>
                  </h3>
                  <p>
                    When you help underserved kids, you can change the course of
                    their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TutorJoin;

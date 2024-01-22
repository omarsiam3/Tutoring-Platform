import Banner from "../assets/illustration-1.svg";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div class="b-example-divider"></div>

        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src={Banner}
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">
                Online Tutoring Services
              </h1>
              <p class="lead">
                We connect learners to exceptional tutors online, for free. We
                offer a vast range of programs that can be tailored to each
                student the tutors work with.Our goal is to help students not
                just understand a subject, but understand how to learn and
                develop their potential in the future.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Enroll a student
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Become a tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-5 my-5 text-center">
        <h2 class=" fw-bold">One student. One tutor. Every week</h2>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
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
          </div>
          <div class="col-sm-4">
            <div class="card">
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
          </div>
          <div class="col-sm-4">
            <div class="card">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

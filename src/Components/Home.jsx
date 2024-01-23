import Banner from "../assets/illustration-1.svg";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="b-example-divider"></div>

        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={Banner}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Online Tutoring Services
              </h1>
              <p className="lead">
                We connect learners to exceptional tutors online, for free. We
                offer a vast range of programs that can be tailored to each
                student the tutors work with.Our goal is to help students not
                just understand a subject, but understand how to learn and
                develop their potential in the future.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Enroll a student
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Become a tutor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="container col-xxl-8 px-4 py-5 second-container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="bootstrap-themes.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      <div className="px-4 py-5 my-5 text-center third-hero bg-light">
        <h3 className=" fw-bold">One student. One tutor. Every week</h3>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <InfoIcon />
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <CommentRoundedIcon size={90} />
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <InfoIcon />
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <div className="">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>

              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Why choose us?</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

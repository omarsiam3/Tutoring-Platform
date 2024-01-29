import Banner from "../assets/stude.webp";
import Banner2 from "../assets/banner4.jpg";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Header from "./Header";
import Footer from "./Footer";
import Image from "../assets/studentS.jpg";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
const Home = () => {
  return (
    <>
      <Header />
      <div className="start-home home-container">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse  align-items-center g-5 py-5">
            <div className="col-10 image-sec col-sm-8 col-lg-6"></div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold lh-1 mb-3">
                Master Your Future with Expert Guidance!
              </h2>
              <p className="lead">
                We connect learners to exceptional tutors online. We offer a
                vast range of programs that can be tailored to each student the
                tutors work with.Our goal is to help students not just
                understand a subject, but understand how to learn and develop
                their potential in the future.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn  btn-lg px-4 me-md-2"
                  style={{ backgroundColor: "#ffb413", color: "#fff" }}
                >
                  Enroll
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btutor btn-lg px-4"
                >
                  <a href={"/tutor"}>Become a tutor</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* ----------------------------------------------------------------------------------------- */}
      <div className="container slider col-xxl-8 px-4 py-5  ">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-lg-9">
            <h1 className="display-6 fw-bold lh-1 mb-3">
              More support means more successful student learning
            </h1>
            <p className="lead">
              We partner with schools and districts to provide impactful online
              tutoring to students across all grade levels and subjects. Royalty
              Tutor is easy to use for students, teachers, and admins — as it
              should be, because we believe tutoring is as essential on the
              back-to-school list as notebooks and #2 pencils.
            </p>
          </div>
          <div className="col-10 col-sm-6 col-lg-3 counse">
            <button className="btn btn-primary">Talk to an advisor</button>
          </div>
          <hr />

          <div className="row flex-lg-row">
            <div className="col-10 col-sm-6 col-lg-6">
              <h4> Personalized learning </h4>
              <div className="row flex-row-reverse">
                <div className="col-10 col-sm-6 col-lg-11">
                  <p>
                    Learning isn't one-size-fits-all. With Pear Deck Tutor,
                    students connect with a tutor who’s an exact match for what
                    they’re looking for — whether they’re stumped by an algebra
                    equation or looking for an extra challenge.
                  </p>
                </div>
                <div className="col-10 col-sm-6 col-lg-1">
                  <InfoIcon />
                </div>
              </div>
              <h4> Personalized learning </h4>

              <div className="row flex-row-reverse">
                <div className="col-10 col-sm-6 col-lg-11">
                  <p>
                    Learning isn't one-size-fits-all. With Pear Deck Tutor,
                    students connect with a tutor who’s an exact match for what
                    they’re looking for — whether they’re stumped by an algebra
                    equation or looking for an extra challenge.
                  </p>
                </div>
                <div className="col-10 col-sm-6 col-lg-1">
                  <InfoIcon />
                </div>
              </div>
            </div>
            <div className="col-10 col-sm-6 col-lg-6">
              <h4> Personalized learning </h4>
              <div className="row flex-row-reverse">
                <div className="col-10 col-sm-6 col-lg-11">
                  <p>
                    Learning isn't one-size-fits-all. With Pear Deck Tutor,
                    students connect with a tutor who’s an exact match for what
                    they’re looking for — whether they’re stumped by an algebra
                    equation or looking for an extra challenge.
                  </p>
                </div>
                <div className="col-10 col-sm-6 col-lg-1">
                  <InfoIcon />
                </div>
              </div>
              <h4> Personalized learning </h4>
              <div className="row flex-row-reverse">
                <div className="col-10 col-sm-6 col-lg-11">
                  <p>
                    Learning isn't one-size-fits-all. With Pear Deck Tutor,
                    students connect with a tutor who’s an exact match for what
                    they’re looking for — whether they’re stumped by an algebra
                    equation or looking for an extra challenge.
                  </p>
                </div>
                <div className="col-10 col-sm-6 col-lg-1">
                  <InfoIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="container col-xxl-8 px-4 py-5 second-container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-6 fw-bold lh-1 mb-3">Royalty Tutor</h1>
            <p className="lead">
              Often, students struggle with their work and rely on tutoring, but
              tuition classes have become very expensive. Especially during
              COVID, many schools went online and even completely virtual
              leaving students to learn content on their own. We've created a
              program that connects students to high school and college tutors
              around the world. These tutors teach their students subjects like
              Science, Math, and English.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={Image}
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
      <div className="px-4 py-5 my-5 text-center third-hero">
        <h3 className=" fw-bold">One student. One tutor. Every week</h3>
        <div className="row">
          <div className="col-sm-4">
            <div className="card third-hero-card">
              <div className="card-body">
                <h5 className="card-title">Flexible Timings</h5>
                <AccessTimeFilledIcon color={"#fff"} sx={{ fontSize: 40 }} />
                <p className="card-text">
                  After student are matched with a tutor they can decide their
                  own time and date.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card third-hero-card">
              <div className="card-body">
                <h5 className="card-title">Fully personalized</h5>
                <ConnectWithoutContactIcon
                  color={"#fff"}
                  sx={{ fontSize: 40 }}
                />
                <p className="card-text">
                  Classes are 1-to-1 so students get comprehensive lesson on
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card third-hero-card">
              <div className="card-body">
                <h5 className="card-title">Affordable</h5>
                <PriceCheckIcon color={"#fff"} sx={{ fontSize: 40 }} />
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
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
              <h4 className="fw-bold">Handpicked Tutors</h4>
              <p className="lead">
                We're very (very) picky about who we let tutor on our platform -
                just 1 in 8 who apply make the cut. They're experts in the
                subjects the teach.
              </p>

              <h4 className="fw-bold">
                Help from our team, every step of the way
              </h4>
              <p className="lead">
                Our expert tutor-matching team can pair you or your child with
                the perfect tutor for their needs - from subject and level,
                right down to exam board and personality match.
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

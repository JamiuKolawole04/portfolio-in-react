import { useState } from "react";
import { Container, Col, Row } from "reactstrap";

// import { Education } from "./Education";
import { Skills } from "./Skills";
import { Award } from "./Award";
// import img1 from "../asset/images/img-1.png";
// import logoImg from "../asset/images/J-logo.webp";
// import img2 from "../asset/images/img-2.png";
// import img3 from "../asset/images/img-3.png";

export const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About me</h2>
          </Col>

          <Col lg="4" md="3">
            <div className="about__btns d-flex align-items-center flex-column">
              <button
                className={`about__btn ${
                  aboutFilter === "ABOUT" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button>

              <button
                className={`about__btn ${
                  aboutFilter === "SKILLS" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>

              <button
                className={`about__btn ${
                  aboutFilter === "AWARD" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Certificate
              </button>
              {/* <button
                                className={`about__btn ${aboutFilter === "EDUCATION" ? "about__btn-active" : ""}`}
                                onClick={() => setAboutFilter("EDUCATION")}
                            >
                                Education
                            </button> */}
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5">
                {/* <div className="about__img w-25">
                                    <img src={logoImg} alt="" className="w-100" />
                                </div> */}

                <div className="about__content w-75">
                  <h2>I am Jamiu</h2>
                  <p>
                    I am a seasoned and passionate web developer with years of
                    experience blending the art of design with programming
                    skills to deliver an immersive and engaging user experience
                    through efficient responsive website development, proactive
                    feature optimization and relentless debugging.
                  </p>

                  <div className="social__links">
                    <h6>Connect with me:</h6>
                    <span>
                      <a
                        href="https://m.me/kolawole.jamiu.33"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.linkedin.com/in/jamiu-kolawole-25a85a201"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://github.com/JamiuKolawole04"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-github-line"></i>
                      </a>
                    </span>
                    {/* <span><a href="#" target="_blank" rel="noreferrer"><i className="ri-instagram-line"></i></a></span> */}
                  </div>
                </div>
              </div>
            )}

            {/* {
                            aboutFilter === "EDUCATION" && <Education />
                        } */}

            {aboutFilter === "SKILLS" && <Skills />}

            {aboutFilter === "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

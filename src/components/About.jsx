import { useState } from "react";
import { Container, Col, Row } from "reactstrap";

import { Education } from "./Education";
import { Skills } from "./Skills";
import { Award } from "./Award";
import img1 from "../asset/images/img-1.png";
// import img2 from "../asset/images/img-2.png";
// import img3 from "../asset/images/img-3.png";

export const About = () => {
    const [aboutFilter, setAboutFilter] = useState("ABOUT");
    return (
        <section id="about">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5"><h2>About me</h2></Col>

                    <Col lg="4" md="3">
                        <div className="about__btns d-flex align-items-center flex-column">
                            <button
                                className={`about__btn ${aboutFilter === "ABOUT" ? "about__btn-active" : ""}`}
                                onClick={() => setAboutFilter("ABOUT")}
                            >
                                About me
                            </button>
                            <button
                                className={`about__btn ${aboutFilter === "EDUCATION" ? "about__btn-active" : ""}`}
                                onClick={() => setAboutFilter("EDUCATION")}
                            >
                                Education
                            </button>
                            <button
                                className={`about__btn ${aboutFilter === "SKILLS" ? "about__btn-active" : ""}`}
                                onClick={() => setAboutFilter("SKILLS")}
                            >
                                Skills
                            </button>
                            <button
                                className={`about__btn ${aboutFilter === "AWARD" ? "about__btn-active" : ""}`}
                                onClick={() => setAboutFilter("AWARD")}
                            >Award</button>
                        </div>
                    </Col>

                    <Col lg="8" md="9">
                        {
                            aboutFilter === "ABOUT" && <div className="about__content__wrapper d-flex gap-5">
                                <div className="about__img w-25">
                                    <img src={img1} alt="" className="w-100" />
                                </div>

                                <div className="about__content w-75">
                                    <h2>I am Jamiu Kolawole</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsam. Corporis dolore doloribus dolor eveniet, commodi nesciunt officia! Velit, esse.</p>

                                    <div className="social__links">
                                        <h6>Connect with me:</h6>
                                        <span><a href="#"><i className="ri-facebook-line"></i></a></span>
                                        <span><a href="#"><i className="ri-linkedin-line"></i></a></span>
                                        <span><a href="#"><i className="ri-github-line"></i></a></span>
                                        <span><a href="#"><i className="ri-instagram-line"></i></a></span>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            aboutFilter === "EDUCATION" && <Education />
                        }

                        {
                            aboutFilter === "SKILLS" && <Skills />
                        }

                        {
                            aboutFilter === "AWARD" && <Award />
                        }

                    </Col>


                </Row>
            </Container>
        </section>

    );
}
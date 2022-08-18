import { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { init } from "ityped";

// import img1 from "../asset/images/img-1.png";
// import img2 from "../asset/images/img-2.png";
// import img3 from "../asset/images/img-3.png";
// import bgImg from "../asset/images/J-logo.webp";

export const HeroSection = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings: [
                'Jay',
                'a Web Developer'
            ]
        })
    }, [])

    const description = "A web developer with years of hands-on experience using a broad range of frontend and backend technologies to develop and maintain advanced, responsive, efficient, and reliable web applications."


    return (
        <section className="hero__section" id="home">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <p className="mb-3">Welcome!</p>
                            <h2 className="hero__title mb-4">I am <span ref={textRef}></span></h2>
                            <p>{description}</p>

                            <div className=" mt-5 hero__btns d-flex align-items-center gap-4">
                                <button className="btn hire__btn"><a href="#">Hire me</a></button>
                                <button className="btn contact__btn"><a href="#contact">Contact</a></button>
                            </div>
                        </div>
                    </Col>

                    {/* <Col lg="6" md="6">
                        <div className="hero__img">
                            <img src={bgImg} alt="" />
                        </div>
                    </Col> */}

                </Row>
            </Container>
        </section>
    );
}
import { useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { init } from "ityped";

import img1 from "../asset/images/img-1.png";
// import img2 from "../asset/images/img-2.png";
// import img3 from "../asset/images/img-3.png";

export const HeroSection = () => {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings: [
                'Jamiu Kolawole',
                'a Web Developer'
            ]
        })
    }, [])


    return (
        <section className="hero__section" id="home">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <p className="mb-3">Welcome!</p>
                            <h2 className="hero__title mb-4">I am <span ref={textRef}></span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non natus culpa, dolor ducimus dolorum perferendis veniam et nostrum pariatur?</p>

                            <div className=" mt-5 hero__btns d-flex align-items-center gap-4">
                                <button className="btn hire__btn"><a href="#">Hire me</a></button>
                                <button className="btn">Contact</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="hero__img">
                            <img src={img1} alt="" className="w-100" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
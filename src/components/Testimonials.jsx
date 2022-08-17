import { Col, Container, Row } from "reactstrap";
import Slider from "react-slick";

export const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true
    }


    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5 text-center">
                        <h2>What my clients says</h2>
                    </Col>

                    <Col lg="6" className="m-auto">
                        <Slider {...settings}>
                            <div>
                                <div className="single__testimonial">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa ex corrupti autem doloribus eos nulla temporibus earum animi iusto!  </p>

                                    <h6>Martin Cooper</h6>
                                    <p className="title">Web Developer</p>
                                </div>
                            </div>

                            <div>
                                <div className="single__testimonial">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa ex corrupti autem doloribus eos nulla temporibus earum animi iusto!  </p>

                                    <h6>Brother Jane</h6>
                                    <p className="title">Web Developer</p>
                                </div>
                            </div>

                            <div>
                                <div className="single__testimonial">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas culpa ex corrupti autem doloribus eos nulla temporibus earum animi iusto!  </p>

                                    <h6>Martin Cooper</h6>
                                    <p className="title">Web Developer</p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
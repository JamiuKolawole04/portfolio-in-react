import { Col, Container, Row } from "reactstrap";

import { Form } from "./Form";


export const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2>Get In Touch</h2>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="contact__info-container d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Address</h6>
                                <p>Nigeria, African Country</p>
                            </div>

                            <div className="single__info-box w-50">
                                <h6>Phone</h6>
                                <p>+234 902 135 3504</p>
                            </div>
                        </div>

                        <div className="contact__info-container d-flex align-items-center gap-5">
                            <div className="single__info-box w-50">
                                <h6>Email</h6>
                                <p className="mail__address">JamiuKolawole532@gmail.com</p>
                            </div>

                            <div className="single__info-box w-50">
                                <h6>Location</h6>
                                <p>Nigeria</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <Form />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
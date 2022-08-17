import { Col, Container, Row } from "reactstrap";


export const Experience = () => {
    const developmentExperienceData = [
        {
            year: "2020 - 2021",
            title: "Frontend developer",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ratione repellat itaque labore ex dolore?",
        },
        {
            year: "2019 - 2020",
            title: "Backend developer",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ratione repellat itaque labore ex dolore?",
        },
        // {
        //     year: "2020 - 2021",
        //     title: "Frontend developer",
        //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ratione repellat itaque labore ex dolore?",
        // },
    ];
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2>Experience</h2>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="single__experience-container">

                            {
                                developmentExperienceData.map((item, index) => (
                                    <div className="single__experience" key={index}>
                                        <span className="experience__icon"><i className="ri-briefcase-line"></i></span>
                                        <h6>{item.year}</h6>
                                        {/* <p>Remote / Full Time</p> */}
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}.</p>
                                    </div>
                                ))
                            }

                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="single__experience-container">

                            {
                                developmentExperienceData.map((item, index) => (
                                    <div className="single__experience" key={index}>
                                        <span className="experience__icon"><i className="ri-briefcase-line"></i></span>
                                        <h6>{item.year}</h6>
                                        {/* <p>Remote / Full Time</p> */}
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}.</p>
                                    </div>
                                ))
                            }

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
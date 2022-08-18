import { Col, Container, Row } from "reactstrap";


export const Experience = () => {
    const developmentExperienceData = [
        {
            year: "2020 - 2021",
            title: "Side Hustle Internship",
            desc: "Interning at Side Hustle has imparted me with cross-cultural skills and qualities, providing me with greater knowledge and understanding of building scalable and responsive web applications  and collaborations with various teams on boards. I handled valuable works of front end development during the intern and had to track down and fix bugs and other problems. I had to show responsibility, self-motivation, and strong self-awareness while working at the project and in communication with other teams",
        },
        // {
        //     year: "2019 - 2020",
        //     title: "Backend developer",
        //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ratione repellat itaque labore ex dolore?",
        // },
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

                    {/* paste another <Col></Col> here to add more datas */}




                </Row>
            </Container>
        </section>
    );
}
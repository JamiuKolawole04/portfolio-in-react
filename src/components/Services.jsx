import { Col, Container, Row } from "reactstrap";


export const Services = () => {
    const serviceData = [
        // {
        //     icon: "ri-code-line",
        //     title: "Web Design",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ut?",
        // },
        {
            icon: "ri-code-s-slash-line",
            title: "Front End Web Development",
            desc: "I build and optimize user interface and user experience with frontend technologies like Javascript to implement web solutions across different browsers and platforms.",
        },
        {
            icon: "ri-code-s-slash-line",
            title: "Back End Web Development",
            desc: "Develop the server-side functional logic, definition and maintenance of the central database with security, optimization, scalability and performance in mind.",
        },
        // {
        //     icon: "ri-qr-code-line",
        //     title: "Web Design",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ut?",
        // },
        // {
        //     icon: "ri-code-line",
        //     title: "App Development",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ut?",
        // },
        // {
        //     icon: "ri-search-line",
        //     title: "SEO",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ut?",
        // },
        // {
        //     icon: "ri-landscape-line",
        //     title: "Graphics Design",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ut?",
        // },
        // {
        //     icon: "ri-gallery-line",
        //     title: "UI/UX",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ut?",
        // },
    ];
    return (
        <section id="services">
            <Container>
                <Row>
                    <Col lg="12" className="services__top mb-5">
                        <h6>Features</h6>
                        <h2>What services I provide</h2>
                    </Col>

                    {
                        serviceData.map((item, index) => (
                            <Col lg="4" md="6" sm="6" key={index} className="mb-3">

                                <div className="single__service">
                                    <span className="service__icon"><i className={item.icon}></i></span>

                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }



                </Row>
            </Container>
        </section>

    );
}
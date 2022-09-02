import { Col, Container, Row } from "reactstrap";

import img01 from "../asset/images/car-rental.png";
import img02 from "../asset/images/powerful-python.png";
import img03 from "../asset/images/vawulens_img.png";

export const Portfolio = () => {
    const portfolioData = [
        {
            imgUrl: img02,
            title: "Powerful Python in Html, Css, and Js",
            url: "https://powerfulpython.com/",
        },
        {
            imgUrl: img01,
            title: "Car Rental Service in React",
            url: "https://carentalservice.netlify.app/",
        },

        {
            imgUrl: img03,
            title: "React Landing Page",
            url: "https://vawulens-fitness.netlify.app/",
        },
    ];
    return (
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg="12" className="portfolio__top mb-5">
                        <h6>Explore my work and give a feedback</h6>
                        <h2>Porfolio</h2>
                    </Col>

                    {portfolioData.map((item, index) => (
                        <Col lg="4" md="6" sm="6" key={index}>
                            <div className="portfolio__card">
                                <div className="portfolio__img">
                                    <img src={item.imgUrl} alt="" className="w-100" />
                                </div>

                                <div className="portfolio__content">
                                    <h5>{item.title}</h5>
                                    <a href={item.url} target="_blank" rel="noreferrer">View live demo</a>
                                </div>
                            </div>
                        </Col>
                    ))}


                </Row>
            </Container>
        </section>
    );
}
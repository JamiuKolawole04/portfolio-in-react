import { Col, Container, Row } from "reactstrap";

import img01 from "../asset/images/product-1.png";
import img02 from "../asset/images/product-2.png";
import img03 from "../asset/images/product-3.png";

export const Portfolio = () => {
    const portfolioData = [
        {
            imgUrl: img01,
            title: "React Landing Page",
            url: "#",
        },
        {
            imgUrl: img02,
            title: "React Landing Page",
            url: "#",
        },
        {
            imgUrl: img03,
            title: "React Landing Page",
            url: "#",
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
                                    <a href={item.url}>View live demo</a>
                                </div>
                            </div>
                        </Col>
                    ))}


                </Row>
            </Container>
        </section>
    );
}
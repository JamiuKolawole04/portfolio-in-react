import { Col, Container, Row } from "reactstrap";

import img01 from "../asset/images/car-rental.png";
import img02 from "../asset/images/powerful-python.png";
import img03 from "../asset/images/vawulens_img.png";
import img04 from "../asset/images/finer_Point.png";
import img05 from "../asset/images/the-hub.png";
import img06 from "../asset/images/project_1.png";
import img07 from "../asset/images/project_2.png";
import img08 from "../asset/images/minimalist.png";
import img09 from "../asset/images/fastrack.webp";

export const Portfolio = () => {
  const portfolioData = [
    {
      imgUrl: img06,
      title: "Profit curve website in Html, Css, and Js with api consumption",
      url: "https://www.profitcurve.ca",
    },

    {
      imgUrl: img07,
      title: "Zisk properties api with Nodejs, Express and Typescript",
      url: "https://www.ziskproperties.com/",
    },

    {
      imgUrl: img08,
      title: "Worked as backend Engineer on the product full time",
      url: "https://minimalistlimited.com",
    },

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
      imgUrl: img09,
      title:
        "Fastrack logistics app for tracking orders.Worked as a backend engineer on this project",
      url: "https://play.google.com/store/apps/details?id=com.fastrack.delivery&pcampaignid=web_share",
    },

    {
      imgUrl: img03,
      title: "React Landing Page",
      url: "https://vawulens-fitness.netlify.app/",
    },
    {
      imgUrl: img04,
      title: "Learn the finer points",
      url: "https://www.learnthefinerpoints.com/",
    },
    {
      imgUrl: img05,
      title: "The hub",
      url: "https://thehub.io/",
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
                  <a href={item.url} target="_blank" rel="noreferrer">
                    View live demo
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

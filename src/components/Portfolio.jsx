import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { ExternalLink } from "lucide-react";

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
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioData = [
    {
      imgUrl: img06,
      title: "Profit curve - Accounting Services with Profitable Analysis",
      description:
        "A modern business website focused on profit optimization with integrated API consumption for dynamic data display and business analytics.",
      technologies: ["HTML", "CSS", "JavaScript"],
      url: "https://www.profitcurve.ca",
      type: "frontend",
    },
    {
      imgUrl: img07,
      title: "Zisk properties api with Nodejs, Express and Typescript",
      description:
        "A comprehensive property management API built with modern backend technologies, featuring robust data handling and type safety.",
      technologies: ["Node.js", "Express", "TypeScript", "API Development"],
      url: "https://www.ziskproperties.com/",
      type: "backend",
    },
    {
      imgUrl: img08,
      title: "Worked as backend Engineer on the product full time",
      description:
        "Full-time backend development role focusing on scalable architecture, database optimization, and API development for enterprise solutions.",
      technologies: [
        "Backend Engineering",
        "Database Design",
        "API Development",
        "System Architecture",
      ],
      url: "https://minimalistlimited.com",
      type: "backend",
    },
    {
      imgUrl: img02,
      title: "Powerful Python in Html, Css, and Js",
      description:
        "An educational platform designed to teach Python programming with interactive examples and comprehensive learning resources.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Educational Platform",
      ],
      url: "https://powerfulpython.com/",
      type: "frontend",
    },
    {
      imgUrl: img01,
      title: "Car Rental Service in React",
      description:
        "A full-featured car rental application with booking system, vehicle management, and user-friendly interface built with React.",
      technologies: ["React", "JavaScript", "Frontend Development"],
      url: "https://carentalservice.netlify.app/",
      type: "frontend",
    },
    {
      imgUrl: img09,
      title:
        "Fastrack logistics app for tracking orders.Worked as a backend engineer on this project",
      description:
        "A mobile logistics application for real-time order tracking and delivery management, focusing on backend infrastructure and API development.",
      technologies: [
        "Backend Engineering",
        "Mobile API",
        "Order Management",
        "Real-time Tracking",
      ],
      url: "https://play.google.com/store/apps/details?id=com.fastrack.delivery&pcampaignid=web_share",
      type: "backend",
    },
    {
      imgUrl: img03,
      title: "React Landing Page",
      description:
        "A responsive and modern landing page built with React, featuring clean design principles and optimized user experience.",
      technologies: ["React", "Responsive Design", "Frontend Development"],
      url: "https://vawulens-fitness.netlify.app/",
      type: "frontend",
    },
    {
      imgUrl: img04,
      title: "Learn the finer points",
      description:
        "An educational platform focused on detailed learning experiences with comprehensive course materials and interactive content.",
      technologies: [
        "Web Development",
        "Educational Platform",
        "Interactive Learning",
      ],
      url: "https://www.learnthefinerpoints.com/",
      type: "frontend",
    },
    {
      imgUrl: img05,
      title: "The hub",
      description:
        "A centralized platform serving as a digital hub for various services and resources, built with modern web technologies.",
      technologies: [
        "Web Platform",
        "Full Stack Development",
        "User Management",
      ],
      url: "https://thehub.io/",
      type: "frontend",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((project) => project.type === activeFilter);

  const filterButtons = [
    { key: "all", label: "All Projects" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
  ];

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6>Explore my work</h6>
            <h2>Portfolio</h2>

            {/* Filter Buttons */}
            <div className="portfolio__filters">
              {filterButtons.map((button) => (
                <button
                  key={button.key}
                  className={`filter__btn ${
                    activeFilter === button.key ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(button.key)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </Col>

          {filteredProjects.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={`${item.type}-${index}`}>
              <div className="portfolio__card">
                <div className="portfolio__img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                  {/* Project type badge */}
                  <span className={`project__type ${item.type}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>

                <div className="portfolio__content">
                  <h5>{item.title}</h5>
                  <p className="portfolio__description">{item.description}</p>

                  <div className="portfolio__technologies">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech__badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="demo__link"
                  >
                    View live demo
                    <ExternalLink className="external__icon" size={16} />
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

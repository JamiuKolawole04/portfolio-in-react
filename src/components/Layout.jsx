import { Fragment } from "react";

import { About } from "./About";
import { Contact } from "./Contact";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
// import { Testimonials } from "./Testimonials";


export const Layout = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <About />
            <Services />
            <Experience />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </Fragment>
    );
}
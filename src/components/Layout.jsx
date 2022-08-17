import { Fragment } from "react";
import { About } from "./About";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { Services } from "./Services";


export const Layout = () => {
    return (
        <Fragment>
            <Header />
            <HeroSection />
            <About />
            <Services />
            <Experience />
        </Fragment>
    );
}
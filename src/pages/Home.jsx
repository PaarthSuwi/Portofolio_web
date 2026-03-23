import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Services from '../components/sections/Services';
import TechStack from '../components/sections/TechStack';
import Portfolio from '../components/sections/Portfolio';
import Pricing from '../components/sections/Pricing';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Services />
            <TechStack />
            <Portfolio />
            <Pricing />
            <Contact />
        </>
    );
};

export default Home;

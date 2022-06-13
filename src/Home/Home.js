import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AboutMe from '../components/AboutMe/AboutMe';
import Banner from '../components/Banner/Banner';
import ContactMe from '../components/ContactMe/ContactMe';
import Projects from '../components/Projects/Projects';
import Skiils from '../components/Skills/Skiils';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <Banner></Banner>



            <AnimationOnScroll animateIn="ease-in-out" delay="100">
                <AboutMe></AboutMe>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="ease-in-out" delay="100">
                <Skiils></Skiils>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="ease-in-out" delay="100">
                <Projects></Projects>
            </AnimationOnScroll>
            <ContactMe></ContactMe>

        </div>
    );
};

export default Home;
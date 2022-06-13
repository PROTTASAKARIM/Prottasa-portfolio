import React from 'react';
import { useParams } from 'react-router-dom';
import Project from '../Project/Project';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ProjectDetails = () => {
    const { id } = useParams();
    const data =
        [
            {
                id: "1",
                img: "https://i.ibb.co/hLhsq5t/ass12.png",
                img2: "https://i.ibb.co/VLBdJZn/ass12-1.png",
                img3: "https://i.ibb.co/ZzFcVw0/ass12-3.png",
                name: "SpareParts.com",
                live: "https://manufacturer-website-f7716.web.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment12--manufacturer-website-client-side",
                gits: "https://github.com/PROTTASAKARIM/assignment12--manufacturer-website-server-side",
                details: "Smart Phone WareHouse is a warehouse management website so the user can implement CURD operations and manage the phone warehouse.",
                point1: "User can see all the phones in the warehouse.",
                point2: "User can update product quantity.",
                point3: "User can add a product."

            },
            {
                id: "2",
                img: "https://i.ibb.co/ck0TYG5/ass11.png",
                img2: "https://i.ibb.co/zF18j87/ass11-2.png",
                img3: "https://i.ibb.co/Yh9vZP8/ass11-3.png",
                name: "SmartPhone WareHouse",
                live: "https://smartphn-warehouse.web.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment11-warehouse-management-client",
                gits: "https://github.com/PROTTASAKARIM/assignment11-warehouse-management-server",
                details: "SpareParts.com is a website for car spare parts where there is two types of users such as Admin and Normal user. According to their user status the user will see the difference in the dashboard. Normal users can check order and review the products and admin can manage the users and and the orders. (Admin: new@user.com, password: 123456789)",
                point1: "Admin can view the users and make them admin if they want.",
                point2: "Normal user can see the products and order them",
                point3: "Normal users can not see the admin panel properties. "
            },
            {
                id: "3",
                img: "https://i.ibb.co/sJmsj4D/ass10.png",
                img2: "https://i.ibb.co/KF1fHP1/ass10-1.png",
                img3: "https://i.ibb.co/3ypHZRc/ass10-2.png",
                name: "Dreamy Photographer",
                live: "https://dreamy-photographer.web.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment10-independent-service-provaider",
                gits: "",
                details: "Dreamy Website is a website about an independent photographer where user can only book a service if the user is registered",
                point1: "User can LOG IN in the system",

            },
            {
                id: "4",
                img: "https://i.ibb.co/XSsKHqV/ass9.png",
                img2: "https://i.ibb.co/hKqbCM6/ass9-2.png",
                img3: "https://i.ibb.co/PFzJ5XM/ass9-3.png",
                name: "Book Reviews",
                live: "https://bookreviewassignmentnine.netlify.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment9-product-analysis",
                gits: "",
                details: "Book Review Website is a website where the reviews about the books is shown",
                point1: "Users comment and ratings us shown in the website.",
            },
            {
                id: "5",
                img: "https://i.ibb.co/5FwmCgX/ass8.png",
                img2: "https://i.ibb.co/6FcYzk4/ass8-2.png",
                img3: "https://i.ibb.co/gW2Md4H/ass8-3.png",
                name: "Book Store",
                live: "https://bookstorewebsiteassignment.netlify.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment8-lucky-one",
                gits: "",
                details: "Book Store Website is a web site where user can view all the books and choose them.",
                point1: "If the user is unsure about the book he/she wants to choose the website will chose one for them. ",
            }
        ]
    const filter = data.filter(project => project.id === id)
    console.log(filter);
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className='container'>
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
            <div className='flex lg:flex-row sm:flex-col  w-full'>
                <img className='w-1/3 lg:m-20 hover:-translate-y-1 hover:scale-150 hover:duration-300' src={filter[0].img} alt="" />
                <img className='w-1/3 lg:m-20 hover:-translate-y-1 hover:scale-150 hover:duration-300' src={filter[0].img2} alt="" />
            </div>
            <div className='flex lg:flex-row sm:flex-col w-full'>
                <img className='w-1/3 lg:m-20 hover:-translate-y-1 hover:scale-150 hover:duration-300' src={filter[0].img3} alt="" />

            </div>
            <div className='p-10 m-10'>
                <h1 className='text-xl m-5 text-left'>{filter[0].details}</h1>
                <div className='p-10'>
                    {
                        filter[0].point1 ? <p className='text-left'>1 . {filter[0].point1}</p> : <p></p>
                    }
                    {filter[0].point2 ? <p className='text-left'>2 . {filter[0].point2}</p> : <p></p>}
                    {filter[0].point3 ? <p className='text-left'>3 . {filter[0].point3}</p> : <p></p>}
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;
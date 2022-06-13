import React from 'react';
import Project from '../Project/Project';


const Projects = () => {
    const data =
        [
            {
                id: "1",
                img: "https://i.ibb.co/hLhsq5t/ass12.png",
                name: "SpareParts.com",
                live: "https://manufacturer-website-f7716.web.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment12--manufacturer-website-client-side",
                gits: "https://github.com/PROTTASAKARIM/assignment12--manufacturer-website-server-side"
            },
            {
                id: "2",
                img: "https://i.ibb.co/ck0TYG5/ass11.png",
                name: "SmartPhone WareHouse",
                live: "https://smartphn-warehouse.web.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment11-warehouse-management-client",
                gits: "https://github.com/PROTTASAKARIM/assignment11-warehouse-management-server"
            },
            {
                id: "3",
                img: "https://i.ibb.co/sJmsj4D/ass10.png",
                name: "Dreamy Photographer",
                live: "https://dreamy-photographer.web.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment10-independent-service-provaider",
                gits: ""
            },
            {
                id: "4",
                img: "https://i.ibb.co/XSsKHqV/ass9.png",
                name: "Book Reviews",
                live: "https://bookreviewassignmentnine.netlify.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment9-product-analysis",
                gits: ""
            },
            {
                id: "5",
                img: "https://i.ibb.co/5FwmCgX/ass8.png",
                name: "Book Store",
                live: "https://bookstorewebsiteassignment.netlify.app/",
                gitc: "https://github.com/PROTTASAKARIM/assignment8-lucky-one",
                gits: ""
            }
        ]

    return (
        <div id='projects' className='mx-5'>
            <h1 className='text-5xl font-semibold my-4 italic'>My Projects</h1>
            <p className='border-b-2 m-10'></p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                    data.map(projects => <Project
                        key={projects.id}
                        projects={projects}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;
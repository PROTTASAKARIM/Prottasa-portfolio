import React from 'react';
import './Header.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div>

            <div class="navbar bg-primary bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home"><a class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Home</a></Link></li>
                            <li><HashLink to='/home#aboutme' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">About Me</HashLink></li>
                            <li><Link to='/blogs' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Blogs</Link></li>
                            <li><HashLink to='/home#projects' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Projects</HashLink></li>
                            <li><HashLink to='/home#contactme' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Contact Me</HashLink></li>
                            <li>    <a href='https://drive.google.com/file/d/102xTyi84EcawH3dur3p25VvuLPp3jr36/view' target="_blank" class="btn btn-ghost transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">My Resume</a></li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to='/home' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Home</Link></li>
                        <li><HashLink to='/home#aboutme' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">About Me</HashLink></li>
                        <li><Link to='/blogs' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Blogs</Link></li>
                        <li><HashLink to='/home#projects' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Projects</HashLink></li>
                        <li><HashLink to='/home#contactme' class="btn btn-ghost mx-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Contact Me</HashLink></li>
                        <li><a href='https://drive.google.com/file/d/102xTyi84EcawH3dur3p25VvuLPp3jr36/view' target="_blank" class="btn btn-ghost transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">My Resume</a></li>
                    </ul>
                </div>
                <div class="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Header;
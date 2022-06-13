import React from 'react';
import html from '../../images/html.png';
import css from '../../images/css.png';
import github from '../../images/github.png';
import bootstrap from '../../images/bootstrap.png';
import tailwind from '../../images/tailwind.png';
import React1 from '../../images/react.png';
import node1 from '../../images/node.jpg';
import express from '../../images/express.png';
import mongodb from '../../images/mongodb.png';
import firebase from '../../images/firebase.png';
import heroku from '../../images/heroku.png';
import mysql from '../../images/mysql_PNG29.png';


const Skiils = () => {
    return (
        <div className='m-5'>
            <h1 className='text-5xl font-semibold my-4 italic'>Skills</h1>
            <p className='border-b-2 m-5'></p>
            <div className='flex lg:flex-row sm:flex-col justify-center items-center my-10'>
                <div>
                    <img src={html} className='h-40 w-40 mx-5' alt="" />
                    <p>HTML</p>
                </div>
                <div>
                    <img src={css} className='h-40 w-40 mx-5' alt="" />
                    <p>CSS</p>
                </div>
                <div>
                    <img src={github} className='h-40 w-40 mx-5' alt="" />
                    <p>GitHub</p>
                </div>
                <div>
                    <img src={bootstrap} className='h-40 w-40 mx-5' alt="" />
                    <p>BootStrap</p>
                </div>
            </div>
            <div className='flex lg:flex-row sm:flex-col justify-center items-center my-10'>
                <div>
                    <img src={tailwind} className='h-40 w-40 mx-5' alt="" />
                    <p>Tailwind</p>
                </div>
                <div>
                    <img src={React1} className='h-40 w-40 mx-5' alt="" />
                    <p>React</p>
                </div>
                <div>
                    <img src={node1} className='h-40 w-40 mx-5' alt="" />
                    <p>Node.Js</p>
                </div>
                <div>
                    <img src={express} className='h-40 w-40 mx-5' alt="" />
                    <p>Express.Js</p>
                </div>
            </div>
            <div className='flex lg:flex-row sm:flex-col justify-center items-center my-10'>
                <div>
                    <img src={mongodb} className='h-40 w-40 mx-5' alt="" />
                    <p>MongoDB</p>
                </div>
                <div>
                    <img src={firebase} className='h-40 w-40 mx-5' alt="" />
                    <p>Firebase</p>
                </div>
                <div>
                    <img src={heroku} className='h-40 w-40 mx-5' alt="" />
                    <p>Heroku</p>
                </div>
                <div>
                    <img src={mysql} className='h-40 w-40 mx-5' alt="" />
                    <p>MySQL</p>
                </div>
            </div>

        </div>
    );
};

export default Skiils;
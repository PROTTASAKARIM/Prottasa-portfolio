import React from 'react';
import prottasa from './../../images/prottasa_karim.jpg';
import TypeWriterEffect from 'react-typewriter-effect';



const Banner = () => {


    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={prottasa} class="max-w-sm rounded-lg shadow-2xl mx-10" />
                    <div>
                        <h1 class="text-6xl text-left font-bold">Hi !!!!!</h1>
                        <h1 class="text-6xl text-left font-bold my-5">I am Prottasa Karim</h1>
                        <TypeWriterEffect
                            textStyle={{
                                fontWeight: 500,
                                fontSize: '1.5em',
                            }}
                            startDelay={2000}
                            cursorColor="#3F3D56"
                            multiText={[
                                'MERN stack Developer',
                                'Front-end Web Developer',
                                'Back-end Web Developer',
                                'Programmer',
                                'Develop websites with',
                                'React.Js',
                                'Node.Js',
                                'MongoDB',
                                'Express.Js',
                                'And more.......',
                                'MERN stack Developer',
                                'Front-end Web Developer',
                                'Back-end Web Developer',
                                'Programmer',
                                'Develop websites with',
                                'React.Js',
                                'Node.Js',
                                'MongoDB',
                                'Express.Js',
                                'And more.......',
                                'MERN stack Developer',
                                'Front-end Web Developer',
                                'Back-end Web Developer',
                                'Programmer',
                                'Develop websites with',
                                'React.Js',
                                'Node.Js',
                                'MongoDB',
                                'Express.Js',
                                'And more.......',
                                'MERN stack Developer',
                                'Front-end Web Developer',
                                'Back-end Web Developer',
                                'Programmer',
                                'Develop websites with',
                                'React.Js',
                                'Node.Js',
                                'MongoDB',
                                'Express.Js',
                                'And more.......',
                                'MERN stack Developer',
                                'Front-end Web Developer',
                                'Back-end Web Developer',
                                'Programmer',
                                'Develop websites with',
                                'React.Js',
                                'Node.Js',
                                'MongoDB',
                                'Express.Js',
                                'And more.......'
                            ]}
                            loop={5}
                            multiTextDelay={1000}
                            typeSpeed={30}

                        />
                        <div className='lg:flex-row sm:flex-col justify-between items-center my-5'>
                            <a href='https://drive.google.com/file/d/102xTyi84EcawH3dur3p25VvuLPp3jr36/view' target="_blank"><button class="btn btn-primary m-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Download Resume</button></a>
                            <button class="btn btn-primary m-2 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:duration-300">Connect with me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
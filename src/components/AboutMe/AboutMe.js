import React from 'react';
import wave from '../../images/wave.svg'


const AboutMe = () => {
    // style={{
    //     backgroundImage: `url(${wave})`, backgroundRepeat: 'no-repeat',
    //     width: `100%`, height: `100vh`, position: `static`, bottom: `0`
    // }}

    return (
        <div id='aboutme'>
            <h1 className='text-5xl font-semibold my-4 italic'>ABOUT ME</h1>
            <p className='border-b-2 m-5'></p>
            <p className='text-left text-xl lg:mx-10 sm:mx-5'>I have completed my  graduation from graduation from Ahsanullah University of Science and Technology in 2019. As I have experience working in a corporate office I am familiar with working in team and communicating with team members. I am comfortable working in a corporate work environment. Also my background as a MERN stack developer and my educational background allows me to attain a strong foundation in technical skill.</p>


            <p className='text-left text-xl lg:mx-10 lg:my-5 sm:m-5'> I have developed many websites. For front-end development I used HTML, CSS, Bootstrap, Tailwind, ReactJs and for database I used MongoDB. For server side i used ExpressJS and NodeJS. For authentication system I used firebase. </p>
            <p className='text-left text-xl lg:mx-10 lg:mb-10 sm:mx-5'> I am devoted to make user friendly easy to use websites. I try to keep up with the trends of the industry. I think I will be a great addition for any organization. </p>
        </div>
    );
};

export default AboutMe;
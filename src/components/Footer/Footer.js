import React from 'react';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import linkedIn from '../../images/linkedin-logo.png'

const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-10 bg-primary text-primary-content rounded">
                <div>
                    <div class="grid grid-flow-col gap-4">
                        <a href='https://www.facebook.com/prottasa.karim/' target="_blank"><img className='h-20 w-20 hover:-translate-y-1 hover:scale-110 hover:duration-300' src={facebook} alt="" /></a>
                        <a href='https://github.com/PROTTASAKARIM' target="_blank"><img className='h-20 w-20 hover:-translate-y-1 hover:scale-110 hover:duration-300' src={github} alt="" /></a>
                        <a href='https://www.linkedin.com/in/prottasa-karim-864172190/' target="_blank"><img className='h-20 w-20 hover:-translate-y-1 hover:scale-110 hover:duration-300' src={linkedIn} alt="" /></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
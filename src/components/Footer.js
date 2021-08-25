import React from 'react';
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the kodkjiiflkk d jd if depjijef  fjijd
                </p>
                <p className='footer-subscription-text'>
                    Join the kodkjiiflkk d jd if depjijef  fjijd
                </p>
                <div className='input-areas'>
                    <form>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">22222</Link>
                        <Link to="/sign-up">33333</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">22222</Link>
                        <Link to="/sign-up">33333</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/sign-up">22222</Link>
                        <Link to="/sign-up">33333</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        JINJOO <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>Profile @ 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'>
                            <i className='fab fa-facebook-f'/>
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer

import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import './Topbar.css'

const Topbar = () => {


    return (
        <div className='topbar'>
            <div className='container'>
                <div className='row contacts-socials'>
                    <div className='col contacts'>
                        <a className="contact-link" href="https://www.facebook.com/jobxprss/"><FaEnvelope /><span> info@jobxprss.com</span></a>
                        <a className="contact-link" href="https://www.facebook.com/jobxprss/"><span className='phone-contact-link'><FaPhoneAlt /> 01609500001</span></a>
                        
                    </div>
                    <div className='col-auto social-links'>
                        <a className="social-link fb-social-link" href="https://www.facebook.com/jobxprss/"><FaFacebookSquare /></a>
                        <a className="social-link" href="https://www.linkedin.com/company/jobxprss/"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar

import React from 'react';
import "./footer1.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="footer">
        <div className="sb__footer section_padding">
            <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                    <h4>For Business</h4>
                    <a href="/employer">
                        <p>Employer</p>
                    </a>
                    <a href="/healthplan">
                        <p>Health Plan</p>
                    </a>
                    <a href="/individual">
                        <p>Individual</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Employer</p>
                    </a>
                    <a href="/resource">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Partners</h4>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Employer</p>
                    </a>
                    <a href="/resource">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4>Company</h4>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Employer</p>
                    </a>
                    <a href="/resource">
                        <p>Employer</p>
                    </a>
                    <a href="/resource">
                        <p>Employer</p>
                    </a>
                </div>
                <div className="sb__footer-links_div">
                    <h4 style={{marginLeft: '16px'}}>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><FontAwesomeIcon icon={faFacebook} className='my-auto mx-auto'  style={{fontSize: '30px'}}/></p>
                            <p><FontAwesomeIcon icon={faInstagram} className='my-auto mx-auto' style={{fontSize: '30px'}}/></p>
                            <p><FontAwesomeIcon icon={faXTwitter} className='my-auto mx-auto' style={{fontSize: '30px'}}/></p>
                        </div>
                </div>
            </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Grocerio. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="#"><div><p>Terms & Conditions</p></div></a>
                        <a href="#"><div><p>Privacy</p></div></a>
                        <a href="#"><div><p>Security</p></div></a>
                        <a href="#"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Footer
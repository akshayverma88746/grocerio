import React from 'react';
import {useNavigate, useLocation, BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import "./home.css";
import "../Footer/footer1.css"
import State from '../Cards/State'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Home = ({size,setShow}) => {
  const location = useLocation()
  return (
    <div className="back">
        <body>
            <Navbar size={size} setShow={setShow}/>
            <div className="img-container">
                <img src="images/main.png" alt="main" className="img" />
            </div>
            <div className="moto">
                <h1 style={{color: '#697ed9', paddingLeft: '50px'}}>Quick</h1>
                <h1 style={{paddingLeft: '50px'}}>delivery at</h1>
                <h1 style={{paddingLeft: '50px'}}>your doorstep</h1>
            </div>
            <p id="ptag" style={{paddingLeft: '110px'}}>Your one-stop destination for daily fresh groceries delivered right to </p>
            <p id="ptag" style={{paddingLeft: '110px'}}>your doorsteps! We take immense pride in curating the finest</p>
            <p id="ptag" style={{paddingLeft: '110px'}}>selection of farm-fresh produce at unbeatable prices. </p>
            <div>
                <div className="glass1">
                    <a href="#">
                        <img src="../images/weigh-scale.png" alt="weight" id="comp" />
                        <p id="ptag1" style={{color: '#323335', fontWeight: '600'}}>Compare</p>
                    </a>
                </div>
    
                <div className="glass">
                    <Link to="/products">
                        <img src="../images/carrot.svg" alt="order" id="comp" />
                        <p id="ptag1" style={{color: '#323335', fontWeight: '600'}}>Order Now</p>
                    </Link>
                </div>
    
                <div className="contact">
                    <a href="#contact">
                        <img src="../images/message.svg" alt="contact" id="msg" />
                    </a>
                </div>
            </div>
    
            {/* <!--Vegetable setion --> */}
            <div className= "main-glass">
                <div className="container">
                    <h1 className="fruits">Fruits</h1>
                    <div className="element">
                        <div className="cards">
                            <img src="../images/mango.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Mango</h1>
                                <p>Rs 80/kg</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="/images/guava.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Guava</h1>
                                <p>Rs 60/kg</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="./images/apple.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Apple</h1>
                                <p>Rs 90/kg</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="./images/banana.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Bannana</h1>
                                <p>Rs 40/dozen</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="./images/grapes.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Grapes</h1>
                                <p>Rs 120/kg</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="./images/orange.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Oranges</h1>
                                <p>Rs 80/kg</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="./images/pomegranate.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Pomegranate</h1>
                                <p>Rs 150/kg</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="./images/pineapple.webp" alt="fruit"/>
                            <div className="info">
                                <h1 className="text">Pineapple</h1>
                                <p>Rs 50/kg</p>
                            </div>
                        </div>
                    </div>
            
                    <h1 className="vegetables">Vegetable</h1>
                    <div className="element">
                        <div className="cards">
                            <img src="./images/brinjal.jpg" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Brinjal</h1>
                                <p>Rs 40/kg</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src="./images/cabbage.webp" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Cabbage</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div className="cards">
                            <img src="./images/capsicum.webp" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Capsicum</h1>
                                <p>Rs 80/kg</p>
                            </div>
            
                        </div>
                        <div className="cards">
                            <img src="./images/cauliflower.webp" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Cauliflower</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div className="cards">
                            <img src="./images/ladyfinger.webp" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Lady Finger</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div className="cards">
                            <img src="./images/peas.webp" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Peas</h1>
                                <p>Rs 50/kg</p>
                            </div>
            
                        </div>
                        <div className="cards">
                            <img src="./images/pumpkin.webp" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Pumpkin</h1>
                                <p>Rs 80/kg</p>
                            </div>
            
                        </div>
                        <div className="cards">
                            <img src="./images/carrot.webp" alt="vege"/>
                            <div className="info">
                                <h1 className="text">Carrot</h1>
                                <p>Rs 40/kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <State/>
            {/* <!-- --About---- --> */}
            <div className="about-glass">
                <section id="about">
                    <div className="about-description">
                        <h2 className="tag_titlee">About Us</h2>
                        <div className="about-image">
                            <img src="./images/image333.png" alt="About Us Image"/>
                        </div>
                        <div className="tag_indicato">
                            <p style={{minHeight: 'auto', lineHeight: '1.7', letterSpacing: '0.3px'}}>"It is a proven fact that eating fruits and vegetables on a daily basis is highly beneficial to one and all. Both fruits and vegetables are high in nutritional value and fiber. Consuming these on a daily basis also helps the body stay light, fit and healthy and plays a major role in boosting the immune system. So, we help you cleanse the body and get rid of harmful toxins by providing farm fresh fruits and vegetables.  Royal Fruits And Vegetables have been in the industry since years now and are located in Malad West, Mumbai, Maharashtra. The quality of fruits and vegetables you consume is as important to us as it is to you, which is why we have earned the trust of many and are leading the market. We make sure you eat healthy and stay happy."</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* <!-- --Contact---- --> */}
            <div className="cont-glass">
                <section id="contact">
                        <div className="contact_section">
                            <div className="tag_section tag_center">
                                <h2 className="tag_title">Contact Us</h2>
                                <div className="tag_indicator"></div>
                                <div className="line"></div> 
                                <div className="circle"></div> 
                            </div>
                        </div>
                        <h4 className="desc">Feel free to write, if you have any query.</h4>
                        <div className="contact_box_section">
                        <div className="map_section">
                            <div style={{width: '100%'}}>
                                <iframe title='map' style={{borderRadius:"30px"}} width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13783.3791616049!2d77.98489026778655!3d30.270003229183253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b9518933719%3A0xc25309614b33ceb1!2sBharu%20Wala%20Grant%2C%20Uttarakhand%20248002!5e0!3m2!1sen!2sin!4v1691942158357!5m2!1sen!2sin"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                            </div>
                        </div>
                        <div className="form_section">
                            <form>
                                
                                <div className="input_group">
                                    <div className="input_box">
                                        <label htmlFor="firstname" className="label">Firstname</label>
                                        <input type="text" className="input" placeholder="Enter your firstname"/>
                                    </div>
                                    <div className="input_box">
                                        <label htmlFor="lastname" className="label">Lastname</label>
                                        <input type="text" className="input" placeholder="Enter your lastname"/>
                    
                                    </div>
                                </div>
                                
                                <div className="input_group">
                                    <div className="input_box">
                                        <label htmlFor="email" className="label">Email</label>
                                        <input type="email" className="input" placeholder="grocerio@gmail.com"/>
                                    </div>
                                    <div className="input_box">
                                        <label htmlFor="subject" className="label">Subject </label>
                                        <input type="text" className="input" placeholder="e.g. Related to "/>
                    
                                    </div>
                                </div>
                                
                                <div className="message_box">
                                    <label htmlFor="project_desc" className="label">Message</label>
                                    <textarea name="project_desc" id="project_desc" cols="30" rows="6" placeholder="Feel free to write "></textarea>
                                </div>
                                <button className="button-18">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </body>
    </div>
  )
}

export default Home
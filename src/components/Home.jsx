import React from 'react'
import "./home.css"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import State from './State'

const Home = () => {
  return (
    <div className="back">
        <body>
            <div class="hero">
                <nav>
                    <h2 class="logo"><span style={{color: '#e7b031'}}>G</span>rocerio</h2>
                    <ul>
                        <div className='comp' style={{paddingRight: '35rem'}}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Products</a></li>
                        </div>
                    </ul>
                        <div className='search-box'>
                            <input  className="search-txt" type="text" name=" " placeholder='Type to search'/>
                            <a className='search-btn' href='#'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a> 
                        </div>
                        <button type="button" className='button-18'>Sign In</button>
                </nav>
            </div>
            <div class="img-container">
                <img src="images/main.png" alt="main" class="img" />
            </div>
            <div class="moto">
                <h1 style={{color: '#697ed9', paddingLeft: '50px'}}>Quick</h1>
                <h1 style={{paddingLeft: '50px'}}>delivery at</h1>
                <h1 style={{paddingLeft: '50px'}}>your doorstep</h1>
            </div>
            <p id="ptag" style={{paddingLeft: '110px'}}>Your one-stop destination for daily fresh groceries delivered right to </p>
            <p id="ptag" style={{paddingLeft: '110px'}}>your doorsteps! We take immense pride in curating the finest</p>
            <p id="ptag" style={{paddingLeft: '110px'}}>selection of farm-fresh produce at unbeatable prices. </p>
            <div>
                <div class="glass1">
                    <a href="#">
                        <img src="../images/weigh-scale.png" id="comp" />
                        <p id="ptag1">Compare</p>
                    </a>
                </div>
    
                <div class="glass">
                    <a href="#">
                        <img src="../images/carrot.svg" id="comp" />
                        <p id="ptag1">Order Now</p>
                    </a>
                </div>
    
                <div class="contact">
                    <a href="#contact">
                        <img src="../images/message.svg" id="msg" />
                    </a>
                </div>
            </div>
    
            {/* <!--Vegetable setion --> */}
            <div class= "main-glass">
                <div class="container">
                    <h1 class="fruits">Fruits</h1>
                    <div class="element">
                        <div class="cards">
                            <img src="../images/mango.webp"/>
                            <div class="info">
                                <h1 class="text">Mango</h1>
                                <p>Rs 80/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="/images/guava.webp"/>
                            <div class="info">
                                <h1 class="text">Guava</h1>
                                <p>Rs 60/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/apple.webp"/>
                            <div class="info">
                                <h1 class="text">Apple</h1>
                                <p>Rs 90/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/banana.webp"/>
                            <div class="info">
                                <h1 class="text">Bannana</h1>
                                <p>Rs 40/dozen</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/grapes.webp"/>
                            <div class="info">
                                <h1 class="text">Grapes</h1>
                                <p>Rs 120/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/orange.webp"/>
                            <div class="info">
                                <h1 class="text">Oranges</h1>
                                <p>Rs 80/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/pomegranate.webp"/>
                            <div class="info">
                                <h1 class="text">Pomegranate</h1>
                                <p>Rs 150/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/pineapple.webp"/>
                            <div class="info">
                                <h1 class="text">Pineapple</h1>
                                <p>Rs 50/kg</p>
                            </div>
                        </div>
                    </div>
            
                    <h1 class="vegetables">Vegetable</h1>
                    <div class="element">
                        <div class="cards">
                            <img src="./images/brinjal.jpg"/>
                            <div class="info">
                                <h1 class="text">Brinjal</h1>
                                <p>Rs 40/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/cabbage.webp"/>
                            <div class="info">
                                <h1 class="text">Cabbage</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/capsicum.webp"/>
                            <div class="info">
                                <h1 class="text">Capsicum</h1>
                                <p>Rs 80/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/cauliflower.webp"/>
                            <div class="info">
                                <h1 class="text">Cauliflower</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/ladyfinger.webp"/>
                            <div class="info">
                                <h1 class="text">Lady Fnger</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/peas.webp"/>
                            <div class="info">
                                <h1 class="text">Peas</h1>
                                <p>Rs 50/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/pumpkin.webp"/>
                            <div class="info">
                                <h1 class="text">Pumpkin</h1>
                                <p>Rs 80/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/carrot.webp"/>
                            <div class="info">
                                <h1 class="text">Carrot</h1>
                                <p>Rs 40/kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <State/>
            {/* <!-- --About---- --> */}
            <div class="about-glass">
                <section id="about">
                    <div class="about-description">
                        <h2 class="tag_titlee">About Us</h2>
                        <div class="about-image">
                            <img src="./images/image333.png" alt="About Us Image"/>
                        </div>
                        <div class="tag_indicato">
                            <p style={{minHeight: 'auto', lineHeight: '1.7', letterSpacing: '0.3px'}}>"It is a proven fact that eating fruits and vegetables on a daily basis is highly beneficial to one and all. Both fruits and vegetables are high in nutritional value and fiber. Consuming these on a daily basis also helps the body stay light, fit and healthy and plays a major role in boosting the immune system. So, we help you cleanse the body and get rid of harmful toxins by providing farm fresh fruits and vegetables.  Royal Fruits And Vegetables have been in the industry since years now and are located in Malad West, Mumbai, Maharashtra. The quality of fruits and vegetables you consume is as important to us as it is to you, which is why we have earned the trust of many and are leading the market. We make sure you eat healthy and stay happy."</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* <!-- --Contact---- --> */}
            <div class="cont-glass">
                <section id="contact">
                        <div class="contact_section">
                            <div class="tag_section tag_center">
                                <h2 class="tag_title">Contact Us</h2>
                                <div class="tag_indicator"></div>
                                <div class="line"></div> 
                                <div class="circle"></div> 
                            </div>
                        </div>
                        <h4 class="desc">Feel free to write, if you have any query.</h4>
                        <div class="contact_box_section">
                        <div class="map_section">
                            <div style={{width: '100%'}}>
                                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Clement%20town,Dehradun+(Food)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                            </div>
                        </div>
                        <div class="form_section">
                            <form>
                                
                                <div class="input_group">
                                    <div class="input_box">
                                        <label for="firstname" class="label">Firstname</label>
                                        <input type="text" class="input" placeholder="Enter your firstname"/>
                                    </div>
                                    <div class="input_box">
                                        <label for="lastname" class="label">Lastname</label>
                                        <input type="text" class="input" placeholder="Enter your lastname"/>
                    
                                    </div>
                                </div>
                                
                                <div class="input_group">
                                    <div class="input_box">
                                        <label for="email" class="label">Email</label>
                                        <input type="email" class="input" placeholder="grocerio@gmail.com"/>
                                    </div>
                                    <div class="input_box">
                                        <label for="subject" class="label">Subject </label>
                                        <input type="text" class="input" placeholder="e.g. Related to "/>
                    
                                    </div>
                                </div>
                                
                                <div class="message_box">
                                    <label for="project_desc" class="label">Message</label>
                                    <textarea name="project_desc" id="project_desc" cols="30" rows="6" placeholder="Feel free to write "></textarea>
                                </div>
                                <button class="btn bg_btn submit_btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- --Footer---- --> */}
            <footer>
                <div class="footer">
                    <div class="arrow-btn">
                        <a href="#nav"><span class="fas fa-angle-up"></span></a>
                    </div>
                    <div class="col-1">
                        <h3>GROCERIO</h3>
                        <a href="#"><b>Home</b></a>
                        |
                        <a href="#"><b> About</b></a>
                        |
                        <a href="#"><b>Contact</b></a>
                        |
                        <a href="#"><b>Blog</b></a>
                        &nbsp
                        <br/>
                        <p> Copyright @ 2023 <strong style={{color: 'green'}}>Grocerio</strong>
                        All rights reserved</p>
                    </div>
                    <div class="col-2">
                        <h3>NEWSLETTER</h3>
                        <form>
                            <input type="email" placeholder="Your Email Address" required/>
                            <br/>
                            <button type="submit">SUBSCRIBE NOW</button>
                        </form>
                    </div>
                    <div class="col-3">
                        <h3>CONTACT</h3>
                        <p style={{color: 'rgb(0, 100, 0)'}}>
                        <i style={{color: 'black'}} class="fa-solid fa-phone-volume"></i>
                        &nbsp
                        +91 926423XXXX
                        <br/>
                        <i style={{color: 'black'}} class="fa-solid fa-envelope"></i>
                        &nbsp
                        grocerio@gmail.com
                        </p>
                    </div>
                </div>
            </footer>
        </body>
    </div>
  )
}

export default Home
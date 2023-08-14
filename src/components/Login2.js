import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import * as Components from './components';
import "./Styles.css";

function Login2() {
    const [signIn, toggle] = React.useState(true);
    return (
    <div className="lg">
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button>Sign Up</Components.Button>
                    <p className="social-text loginp">Or Sign up with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} className='my-auto mx-auto' />
                        </a>
                    </div>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#' className="social-text">Forgot your password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                    <p className="social-text loginp"> Sign in with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} className='my-auto mx-auto' />
                        </a>
                    </div>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    </div>
    )
}

export default Login2;
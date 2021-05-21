import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Link from 'next/link';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'relative',
        maxWidth: '870px',
        marginRight: '2rem',
        padding: '.5rem',
        backgroundColor: '#fff'
    }
};

Modal.setAppElement( '#root' );

function LoginModal( props ) {
    const { addClass = "header-icon" } = props;
    const [ open, setOpen ] = useState( false );

    const openModal = ( e ) => {
        e.preventDefault();
        setOpen( true );
    }

    const closeModal = () => {
        setOpen( false );
    }

    return (
        <div>
            <Link href="#" >
                <a title="Login" className={ `login-link ${ addClass }` } role="button" onClick={ openModal }>
                <i className="icon-user-2"></i>
                </a>
            </Link>
            <Modal
                isOpen={ open }
                onRequestClose={ closeModal }
                contentLabel="login Modal"
                className="login-popup"
                id="login-popup-form"
                overlayClassName="cart-modal-overlay"
                style={ customStyles }
            >
                <div className="modal-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="title mb-2">Login</h2>

                                <form action="#" className="mb-1">
                                    <label htmlFor="login-email">Email address <span className="required">*</span></label>
                                    <input type="email" className="form-input form-wide mb-2" id="login-email" required />

                                    <label htmlFor="login-password">Password <span className="required">*</span></label>
                                    <input type="password" className="form-input form-wide mb-2" id="login-password" required />

                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-primary btn-md">LOGIN</button>

                                        <div className="custom-control custom-checkbox form-footer-right">
                                            <input type="checkbox" className="custom-control-input" id="lost-password" />
                                            <label className="custom-control-label form-footer-right" htmlFor="lost-password">Remember Me</label>
                                        </div>
                                    </div>
                                    <Link href={ `${ process.env.PUBLIC_URL }/pages/password` } > 
                                        <a className="forget-password">
                                        Forgot your password?
                                        </a>
                                    </Link>
                                </form>
                            </div>

                            <hr className="col-md-12 mt-2 mb-2 mr-3 ml-3 d-block d-md-none" />

                            <div className="col-md-6">
                                <h2 className="title mb-2">Register</h2>

                                <form action="#">
                                    <label htmlFor="register-email">Email address <span className="required">*</span></label>
                                    <input type="email" className="form-input form-wide mb-2" id="register-email" required />

                                    <label htmlFor="register-password">Password <span className="required">*</span></label>
                                    <input type="password" className="form-input form-wide mb-2" id="register-password" required />

                                    <div className="form-footer">
                                        <button type="submit" className="btn btn-primary btn-md">Register</button>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="newsletter-login-signup" />
                                            <label className="custom-control-label" htmlFor="newsletter-login-signup">Sign up our Newsletter</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="social-login-wrapper">
                        <p>Access your account through  your social networks.</p>

                        <div className="btn-group">
                            <Link href="#" >
                                <a className="btn btn-social-login btn-md btn-gplus mb-1">
                                <i className="fab fa-google"></i><span>Google</span>
                                </a>
                            </Link>
                            <Link href="#" >
                                <a className="btn btn-social-login btn-md btn-facebook mb-1">
                                <i className="icon-facebook"></i><span>Facebook</span>
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="btn btn-social-login btn-md btn-twitter mb-1">
                                <i className="icon-twitter"></i><span>Twitter</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <button title="Close (Esc)" type="button" className="mfp-close" onClick={ closeModal }>×</button>
                </div>
            </Modal>
        </div>
    )

}

export default LoginModal;
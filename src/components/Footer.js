import React from 'react';

const Footer = () => {
    return (
        <footer className = 'footer'>
            <div className="footer_info">
                <div className="contact">
                <h4>Find Us Online</h4>
                    <ul className="contact_list">
                        <li className="contact_list_item">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li> 
                        <li className="contact_list_item">
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li> 
                        <li className="contact_list_item">
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="contact_list_item">
                            <a href="#">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li> 
                        <li className="contact_list_item">
                            <a href="#">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>   
                    </ul>
                </div>
                <div className="signUp">
                    <h4>Join our newsletter</h4>
                    <form>
                        <input type="email" placeholder='E-mail' className='signUpForm'/>
                        <input type="submit" value="Submit" className='submit'/>
                    </form>
                </div>
                </div>
                <div className="mention">
                    <a href="https://icons8.com/icon/zBivzUu9mkoe/documentary" className='icons8'>Genre icons coutesy of Icons8</a> 
                </div>    
        </footer>
    )
}

export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import invoiceLogo from '@/assets/img/invoice-icon.avif';
import whatsAppImg from '@/assets/img/what\'sapp.jpg';
import facebookImg from '@/assets/img/facebook.png';
import instaImg from '@/assets/img/insta.png';
import twitterImg from '@/assets/img/twitter.png';
import linkedInImg from '@/assets/img/linkedIn.png';
import youtubeImg from '@/assets/img/youtube.png';
import background from '@/assets/img/background.jpeg';
import alexParker from '@/assets/img/alex-parker.jpeg';
import jordanLee from '@/assets/img/Jordan Lee.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFileInvoice, 
    faUsers, 
    faDownload, 
    faListCheck,
    faGift, 
    faQuoteLeft, 
    faPercent, 
    faUserAlt, 
    faCreditCard, 
    faBell, 
    faLock, 
    faBuilding, 
    faHeadset 
} from '@fortawesome/free-solid-svg-icons';


const Index = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid align-items-center">
                    <div className="col-lg-4 col-6 d-flex align-items-center">
                        <div className="col-6 col-sm-3 col-lg-2">
                            <img src={invoiceLogo} alt="" width="75px" className="rounded-circle" />
                        </div>
                        <div className="col-6 col-lg-3 col-xl-2 col-sm-2">
                            <i className="cmp-name">NILA</i>
                            <em className="invoice">Invoice</em>
                        </div>
                        <Link className="navbar-brand" to="#"></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav col-6 justify-content-center">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Billing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Blog</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#">Features</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#footer">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-flex col-6 justify-content-end" role="search">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="#footer">About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/login">
                                    <button className="btn btn-outline-primary" type="button">Login</button>
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="/signup">
                                    <button className="btn btn-outline-primary" type="button">Sign Up</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="container w-100">
                <div className="d-md-flex justify-content-center align-items-center text-center">
                    <div className="w-md-50">
                        <img src={background} alt="Background" className='w-100' />
                    </div>
                    <div className="container-child w-md-50">
                        <h1 className="my-3">Simplify Your Invoicing with Achu Invoice</h1>
                        <p className="my-4">Effortless Invoicing and Inventory Management for Businesses and Freelancers</p>
                        <Link to="/dashboard">
                            <button className="btn btn-primary px-4 py-2 rounded my-3">
                                Start Invoicing
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container my-4">
                <div className="row">

                    <div className="col-lg-4 col-md-6 my-2 text-center">
                        <div className='d-flex justify-content-center align-items-center flex-column mx-3'>
                            <div className='bg-icon-circle d-flex justify-content-center align-items-center my-3'>
                                <FontAwesomeIcon icon={faUsers} size='2x' color='white' />
                            </div>
                            <h3>Permission Sets for Staff</h3>
                            <p>Control access and maintain security.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 my-2 text-center">
                        <div className='d-flex justify-content-center align-items-center flex-column mx-3'>
                            <div className='bg-icon-circle d-flex justify-content-center align-items-center my-3'>
                                <FontAwesomeIcon icon={faFileInvoice} size='2x' color='white' />
                            </div>
                            <h3>Customizable Invoice Templates</h3>
                            <p>Personalize your invoices to match your brand.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 text-center">
                        <div className='d-flex justify-content-center align-items-center flex-column mx-3'>
                            <div className='bg-icon-circle d-flex justify-content-center align-items-center my-3'>
                                <FontAwesomeIcon icon={faDownload} size='2x' color='white' />
                            </div>
                            <h3>Easy Report Downloads</h3>
                            <p>Access detailed financial reports with just a click.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="container features-sec py-4">
                <h1 className="my-5 text-primary text-center">Features</h1>
                <div className="row ">
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>
                            <div className='bg-small-circle d-flex justify-content-center align-items-center me-3'>
                                <FontAwesomeIcon icon={faFileInvoice} size='1x' color='white' />
                            </div>
                            <h3>Customizable Templates</h3>
                        </div>
                        <p>Create professional-looking invoices that reflect your brand&apos;s identity. Choose from a variety of templates and customize them to your needs.</p>

                    </div>
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>
                            <div className='bg-small-circle d-flex justify-content-center align-items-center me-3'>
                                <FontAwesomeIcon icon={faUsers} size='1x' color='white' />
                            </div>
                            <h3>Permission Sets for Staff</h3>
                        </div>
                        <p>Set up different permission levels for your team to ensure that sensitive information is only accessible to those who need it.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>
                            <h3>Easy Download of Reports</h3>
                            <div className='bg-small-circle d-flex justify-content-center align-items-center ms-3'>
                                <FontAwesomeIcon icon={faDownload} size='1x' color='white' />
                            </div>
                        </div>

                        <p>Generate and download comprehensive reports to keep track of your business finances with ease.</p>
                    </div>
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>
                            <h3>Inventory Management</h3>
                            <div className='bg-small-circle d-flex justify-content-center align-items-center ms-3'>
                                <FontAwesomeIcon icon={faListCheck} size='1x' color='white' />
                            </div>
                        </div>

                        <p>Keep track of your stock levels and manage your inventory directly from the app. Streamline your business operations and avoid stockouts.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>
                            <div className='bg-small-circle d-flex justify-content-center align-items-center me-3'>
                                <FontAwesomeIcon icon={faGift} size='1x' color='white' />
                            </div>
                            <h3>One Month Free Trial</h3>
                        </div>

                        <p>Try all the features of our app for one month without any cost. No credit card required.</p>
                    </div>
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>

                            <div className='bg-small-circle d-flex justify-content-center align-items-center me-3'>
                                <FontAwesomeIcon icon={faQuoteLeft} size='1x' color='white' />
                            </div>
                            <h3>Quote Preparation</h3>
                        </div>

                        <p>Quickly prepare and send quotes to your clients. Convert quotes into invoices with a single click.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>
                            <h3>GST Invoice</h3>
                            <div className='bg-small-circle d-flex justify-content-center align-items-center ms-3'>
                                <FontAwesomeIcon icon={faPercent} size='1x' color='white' />
                            </div>
                        </div>

                        <p>Generate GST-compliant invoices seamlessly. Ensure your business stays compliant with tax regulations.</p>
                    </div>
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>
                            <h3>Freelancers without Company Can Use</h3>
                            <div className='bg-small-circle d-flex justify-content-center align-items-center ms-3'>
                                <FontAwesomeIcon icon={faUserAlt} size='1x' color='white' />
                            </div>
                        </div>

                        <p>Whether you&apos;re a freelancer or run a small business, our app is designed to cater to your invoicing needs without requiring a registered company.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>

                            <div className='bg-small-circle d-flex justify-content-center align-items-center me-3'>
                                <FontAwesomeIcon icon={faCreditCard} size='1x' color='white' />
                            </div>
                            <h3>Get Paid Online</h3>
                        </div>

                        <p>Integrate with various payment gateways to receive payments online. Speed up your cash flow and reduce payment delays.</p>
                    </div>
                    <div className="col-md-6 my-3">
                        <div className='d-flex align-items-center justify-content-start'>

                            <div className='bg-small-circle d-flex justify-content-center align-items-center me-3'>
                                <FontAwesomeIcon icon={faBell} size='1x' color='white' />
                            </div>
                            <h3>Send Automatic Reminders</h3>
                        </div>

                        <p>Automate your follow-ups by setting up reminders for overdue invoices. Ensure you get paid on time, every time.</p>
                    </div>
                </div>
            </section>

            <section className="container testimonial-sec my-5">
                <div className='my-5'>
                    <h1 className="text-center text-primary my-5">Testimonials</h1>
                    <div className="row">
                        <div className="col-md-6 my-3">
                            <div className='d-md-flex align-items-center justify-items-center gap-3'>
                                <div>
                                    <div className='bg-img-width'>
                                        <img src={alexParker} alt="alexParker" className='rounded-circle w-100 h-100' />
                                    </div>
                                </div>
                                <div className='px-3'>
                                    <p className="my-3">Using Achu Invoice has revolutionized the way we handle invoices. The customizable templates and easy report downloads save us so much time.</p>
                                    <span className="text-secondary">-Alex Parker</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 my-3">
                            <div className='d-md-flex align-items-center justify-items-center gap-3'>
                                <div>
                                    <div className='bg-img-width'>
                                        <img src={jordanLee} alt="alexParker" className='rounded-circle w-100 h-100' />
                                    </div>
                                </div>
                                <div className='px-3'>
                                    <p className="my-3">As a freelancer, I needed a simple yet powerful invoicing tool. Achu Invoice is perfect for my needs.</p>
                                    <span className="text-secondary">-Jordan Lee</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary">
                <div className="container text-center py-5">
                    <div className="row justify-content-center align-items-center">
                        <h2 className="text-white my-2">Start Your Free Trial Today!</h2>
                        <p className="text-white py-2">
                            Experience the full potential of Achu Invoice with a one-month free trial. No credit card required. Sign up now!
                        </p>
                        <button className="btn bg-white my-4 text-primary fw-bold w-md-25 w-75 mx-auto">Sign Up Now</button>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-white px-3" id="footer">
                <section className="container py-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-5">
                            <div className="row">
                                <div className="col-4">
                                <FontAwesomeIcon icon={faLock} className='me-2' color='white' />
                                    <span>SSL Secured</span>
                                </div>
                                <div className="col-4">
                                <FontAwesomeIcon icon={faBuilding} className='me-2' color='white' />
                                    <span>Trusted by [X] Business</span>
                                </div>
                                <div className="col-4">
                                <FontAwesomeIcon icon={faHeadset} className='me-2' color='white' />
                                    <span>24/7 Customer Support</span>
                                </div>
                            </div>
                            <ul className="text-center my-4 px-0 list-unstyled">
                                <li className="my-3">Contact Us:
                                    <ul className="text-left px-0 my-2 list-unstyled">
                                        <li>+91 9840167444</li>
                                        <li>info@tensketch.com</li>
                                    </ul>
                                </li>
                                <li className="my-3">Follow Us:
                                    <ul className="text-left px-0 row my-2 list-unstyled">
                                        <li className="col-2"><img src={whatsAppImg} alt="WhatsApp" width="30px" /></li>
                                        <li className="col-2"><img src={facebookImg} alt="Facebook" width="30px" /></li>
                                        <li className="col-2"><img src={instaImg} alt="Instagram" width="30px" /></li>
                                        <li className="col-2"><img src={twitterImg} alt="Twitter" width="30px" /></li>
                                        <li className="col-2"><img src={linkedInImg} alt="LinkedIn" width="30px" /></li>
                                        <li className="col-2"><img src={youtubeImg} alt="YouTube" width="30px" /></li>
                                    </ul>
                                </li>
                                <li className="my-3">Terms of Service | Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Index;

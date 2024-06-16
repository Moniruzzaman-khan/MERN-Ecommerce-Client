import {Link} from "react-router-dom";
import payment from '../../assets/images/payment.png'

const Footer = () => {
    return (
        <div>
            <div className="section-bottom shadow-sm bg-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Legals</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/about">About</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/refund">Refund Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Terms</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">Information</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/howtobuy">How to buy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/complain">Complain</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium">About</h1>
                            <p>Bangladesh No.1 Shopping site</p>
                            <p>Payment Methods</p>
                            <img className="w-50" src={payment}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-3 text-center">
                <p className="text-white bodySmall">All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
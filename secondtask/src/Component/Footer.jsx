import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Solartech</h5>
                    <li style={{ listStyle: "none" }}>Email:-hello@gmail.com</li>
                    <li style={{ listStyle: "none" }}>Phone:-0803333333</li>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Inside Grace Eleyae</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!">Feautures</a></li>
                        <li><a href="#!">Pricing</a></li>
                        <li><a href="#!">FAQS</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Customer Care</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">Shiping and Handling</a></li>
                        <li><a href="#!">Tearms And Condition</a></li>
                        <li><a href="#!">Why Satin</a></li>
                        <li><a href="#!">My Cart</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <hr />
    <div className="footer-copyright text-center py-3">© 2024 Copyright-All rights reserved </div>

</footer>

export default Footer   
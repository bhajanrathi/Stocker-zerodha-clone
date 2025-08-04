function Footer() {
    return (
        <>
            <style>{`
                footer a {
                    text-decoration: none;
                    color: #666;
                    padding-top: 10px;
                }
                footer i {
                    color: #666;
                    margin-right: 25px;
                    margin-top: 15px;
                    margin-bottom:15px;
                    font-size: 22px;
                }
            `}</style>
            <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                <div className="container border-top mt-5">
                    <div className="row mt-5 d-flex mt-5 justify-content-center flex-wrap">
                        <div className="col-12 col-lg-3">
                            <img src="media/images/logo.svg" style={{ width: "150px" }} />
                            <p style={{color: "#666", marginTop: "20px"}}>
                                &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
                            </p>
                            <p>
                                <i class="fa-brands fa-x-twitter"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </p>
                            <hr />
                            <p>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                                <i class="fa-brands fa-telegram"></i>
                            </p>
                        </div>
                        <div className="col-12 col-lg-3">
                            <p className="fs-5 fw-medium">Account</p>
                            <li style={{ listStyle: "none" }}>
                                <a href="">Open Demat Account</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Minor demat account</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">NRI demat account</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Commodity</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Dematerialisation</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Fund transfer</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">MTF</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Referral program</a>
                            </li>
                            <br />
                        </div>
                        <div className="col-12 col-lg-3">
                            <p className="fs-5 fw-medium">Support</p>
                            <li style={{ listStyle: "none" }}>
                                <a href="">Contact us</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Support portal</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">How to file a complaint?</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Status of your complaints</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Bulletin</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Circular</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Z-Connect blog</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Downloads</a>
                            </li>
                            <br />
                        </div>
                        <div className="col-12 col-lg-3">
                            <p className="fs-5 fw-medium">Company</p>
                            <li style={{ listStyle: "none" }}>
                                <a href="">About</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Philosophy</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Press & media</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Careers</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Zerodha Cares (CSR)</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Zerodha.tech</a>
                            </li>
                            <br />
                            <li style={{ listStyle: "none" }}>
                                <a href="">Open source</a>
                            </li>
                            <br />
                        </div>
                        
                    </div>
                    <div className="mt-5" style={{ fontSize: "14px", color: "#9B9B9B" }}>
                        <p>
                            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                            INZ000031633 CDSL: Depository services through Zerodha Securities
                            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                            complaints pertaining to securities broking please write to
                            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                            ensure you carefully read the Risk Disclosure Document as prescribed
                            by SEBI | ICF
                        </p>

                        <p>
                            Procedure to file a complaint on SEBI SCORES: Register on SCORES
                            portal. Mandatory details for filing complaints on SCORES: Name,
                            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                            Communication, Speedy redressal of the grievances
                        </p>

                        <p>
                            Investments in securities market are subject to market risks; read
                            all the related documents carefully before investing.
                        </p>

                        <p>
                            "Prevent unauthorised transactions in your account. Update your
                            mobile numbers/email IDs with your stock brokers. Receive
                            information of your transactions directly from Exchange on your
                            mobile/email at the end of the day. Issued in the interest of
                            investors. KYC is one time exercise while dealing in securities
                            markets - once KYC is done through a SEBI registered intermediary
                            (broker, DP, Mutual Fund etc.), you need not undergo the same
                            process again when you approach another intermediary." Dear
                            Investor, if you are subscribing to an IPO, there is no need to
                            issue a cheque. Please write the Bank account number and sign the
                            IPO application form to authorize your bank to make payment in case
                            of allotment. In case of non allotment the funds will remain in your
                            bank account. As a business we don't give stock tips, and have not
                            authorized anyone to trade on behalf of others. If you find anyone
                            claiming to be part of Zerodha and offering such services, please
                            create a ticket here.
                        </p>
                    </div>
                    <div className="d-flex mt-5 justify-content-center flex-wrap">
                        <li style={{ listStyle: "none", paddingLeft: "50px" }}>
                            <a href="#">NSE</a>
                        </li>
                        <li style={{ listStyle: "none", paddingLeft: "50px"  }}>
                            <a href="#">BSE</a>
                        </li>
                        <li style={{ listStyle: "none", paddingLeft: "50px"  }}>
                            <a href="#">MCX</a>
                        </li>
                        <li style={{ listStyle: "none", paddingLeft: "50px"  }}>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li style={{ listStyle: "none", paddingLeft: "50px"  }}>
                            <a href="#">Policies and Procedures</a>
                        </li>
                        <li style={{ listStyle: "none", paddingLeft: "50px"  }}>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li style={{ listStyle: "none", paddingLeft: "50px"  }}>
                            <a href="#">Disclosure</a>
                        </li>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
function Universe() {
    return (
        <div className="container mt-5">
            <style>
                {`
                :root {
                    font-family: 'Inter', sans-serif !important;
                }
                .hover-black:hover {
                    background-color: black !important;
                    border-color: black !important;
                }
                .hover-black {
                    transition-delay: 0;
                }
                `}
            </style>
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/zerodhaFundhouse.png" className="img-fluid" style={{maxWidth: "220px", minHeight: "40px"}}/>
                    <p className="text-small text-muted">Our asset management venture</p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/sensibullLogo.svg" className="img-fluid" style={{maxWidth: "220px", minHeight: "40px"}}/>
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/tijori.svg" className="img-fluid" style={{maxWidth: "220px", minHeight: "40px"}}/>
                    <p className="text-small text-muted">Investment research platform</p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/streakLogo.png" className="img-fluid" style={{maxWidth: "220px", minHeight: "40px"}}/>
                    <p className="text-small text-muted">Systematic Trading platform</p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/smallcaseLogo.png" className="img-fluid" style={{maxWidth: "220px", minHeight: "40px"}}/>
                    <p className="text-small text-muted">Thematic investment platform</p>
                </div>
                <div className="col-md-4 p-3 mt-5">
                    <img src="media/images/dittoLogo.png" className="img-fluid" style={{maxWidth: "150px", minHeight: "40px"}}/>
                    <p className="text-small text-muted">Personalized advice on life and health insurance</p>
                </div>
                <button className="p-2 btn btn-primary hover-black fs-4 text-nowrap" style={{ width: "203px", margin: "0 auto", backgroundColor: "rgb(56, 126, 209)" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;
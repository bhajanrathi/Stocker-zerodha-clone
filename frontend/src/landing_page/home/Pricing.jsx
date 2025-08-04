function Pricing() {
    return (
        <>
            <style>
                {`
                    :root {
                        font-family: 'Inter', sans-serif !important;
                    }
                    .pricing-box {
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    .pricing-box img {
                        max-width: 120px;
                        width: 100%;
                        height: auto;
                    }
                    @media (max-width: 767.98px) {
                        .pricing-box {
                            justify-content: center;
                            text-align: center;
                            flex-direction: column;
                        }
                    }
                `}
            </style>

            <div className="container p-5 mb-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="text-md-start text-center" style={{fontSize: "32px"}}>Unbeatable pricing</h1>
                    </div>
                </div>

                <div className="row">
                    {/* Left Text Section */}
                    <div className="col-12 col-md-5 mb-4 mb-md-0">
                        <p className="lead text-md-start text-center">
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                        <a href='' className="text-md-start fs-5 text-center" style={{textDecoration: "none" }}>
                            See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    {/* Pricing Boxes */}
                    <div className="col-12 col-md-7">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 pricing-box">
                                <img
                                    src="/media/images/zero_rupees.svg"
                                    alt="zero rupees"
                                    className="img-fluid"
                                />
                                <p className="m-0">Free account opening</p>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 pricing-box">
                                <img
                                    src="/media/images/zero_rupees.svg"
                                    alt="zero rupees"
                                    className="img-fluid"
                                />
                                <p className="m-0">
                                    Free equity delivery<br />
                                    and direct mutual funds
                                </p>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 pricing-box">
                                <img
                                    src="/media/images/twenty-rupees.svg"
                                    alt="twenty rupees"
                                    className="img-fluid"
                                />
                                <p className="m-0">
                                    Intraday and<br />
                                    F&O
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Pricing;
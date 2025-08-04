function Trust() {
    return (
        <>
            <style>
                {`
                :root {
                    font-family: 'Inter', sans-serif !important;
                }
                `}
            </style>
            <div className="container p-5">
                <div className="row">
                    <div className="col">
                        <div className="row pb-4">
                            <h1 className="display-4 fw-normal" style={{fontSize: "32px"}}>Trust with Confidence</h1>
                        </div>
                        <div className="row pb-4">
                            <h4>Customer-first always</h4>
                            <p className="lead">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        </div>
                        <div className="row pb-4">
                            <h4>No spam or gimmicks</h4>
                            <p className="lead">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        </div>
                        <div className="row pb-4">
                            <h4>The Zerodha universe</h4>
                            <p className="lead">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                        <div className="row pb-4">
                            <h4>Do better with money</h4>
                            <p className="lead">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <img src="/media/images/ecosystem.png" alt="Ecosystem img"  className="img-fluid"/>
                        <div className="d-flex justify-content-center m-4">
                            <a href='' className="text-md-start fs-5 text-center mx-4" style={{textDecoration: "none" }}>
                            Explore our products &nbsp;<i className="fa-solid fa-arrow-right"></i>
                            </a> 
                            <a href='' className="text-md-start fs-5 text-center mx-4" style={{textDecoration: "none" }}>
                            Try Kite Demo &nbsp;<i className="fa-solid fa-arrow-right"></i>
                            </a> 
                        </div>
                    </div>
                </div>
                <div className="row mx-auto mb-5 mt-5">
                    <div className="col-12">
                        <img src="media\images\pressLogos.png" alt="press logos" style={{ width: "710px", height: "40px", objectFit: "contain"}} className="d-block mx-auto img-fluid"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trust;
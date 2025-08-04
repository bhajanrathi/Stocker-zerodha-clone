function Team() {
    return (
        <>
            <div className="container px-5">
                <div className="row mt-5">
                    <h2 className="fs-2 text-center lh-base">People</h2>
                </div>
                <div className="row p-5" style={{fontSize: "1.15em", lineHeight: "1.8"}}>
                    <div className="col-lg-5 p-3 text-center">
                        <img src="/media/images/nithinKamath.jpg" alt="Nithin Kamath profile pic" style={{borderRadius: "50%", maxWidth: "350px"}}/>
                        <br />
                        <h4 className="mt-3 fs-5">Nithin Kamath</h4>
                        <p className="mt-3 fs-6 text-muted">Founder, CEO</p>
                    </div>
                    <div className="col-lg-7 p-5" >
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a href="" style={{textDecoration: "none"}}>Homepage</a> / <a href="" style={{textDecoration: "none"}}>TradingQnA</a> / <a href="" style={{textDecoration: "none"}}>Twitter</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
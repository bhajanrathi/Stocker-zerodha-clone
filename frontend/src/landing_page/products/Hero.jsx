function Hero() {
    return (
        <div className="container p-5 mb-5 border-bottom">
            <div className="row text-center mb-5 lh-base">
                <h1 className="mt-5 " style={{ fontSize: "48px" }}>Zerodha Products</h1>
                <p className="mt-2" style={{fontSize: "1.4em"}}>Sleek, modern, and intuitive trading platforms</p>
                <p className="mb-4 mb-5" style={{fontSize: "1.1em", lineHeight: "1.75"}}> Check out our <a href="" className="text-md-start text-center pb-4" style={{ textDecoration: "none" }}>investment offerings &nbsp;<i className="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;
function RightSection({ imageURL, imageAlt, title, description, learnMore, learnMoreURL }) {
    return (
        <div className="container d-flex justify-content-between">
            <div className="row px-5 flex-column-reverse flex-lg-row">
                <div className="col-lg-5 p-5 d-flex flex-column justify-content-center">
                    <h1 className="text-md-start m-4" style={{ fontSize: "35px" }}>{title}</h1>
                    <p className="text-md-start m-4" style={{ fontSize: "1.1em" }}>{description}</p>
                    <div className="d-flex flex-wrap">
                        <a href={learnMoreURL} className="text-md-start mx-4" style={{ textDecoration: "none", fontSize: "1.1em" }}>{learnMore} &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-7 p-5">
                    <img src={imageURL} alt={imageAlt} className="mx-auto" style={{ width: "80%" }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
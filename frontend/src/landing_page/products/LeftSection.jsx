function LeftSection({ imageURL, imageAlt, title, description, tryDemo, learnMore, googlePlayStore, appStore }) {
    return (
        <div className="container d-flex justify-content-between">
            <div className="row px-5">
                <div className="col-lg-7 p-5">
                    <img src={imageURL} alt={imageAlt} className="mx-auto" style={{ width: "80%" }} />
                </div>
                <div className="col-lg-5 p-5 d-flex flex-column justify-content-center">
                    <h1 className="text-md-start m-4" style={{ fontSize: "35px" }}>{title}</h1>
                    <p className="text-md-start m-4" style={{ fontSize: "1.1em" }}>{description}</p>
                    <div className="d-flex flex-wrap">
                        <a href={tryDemo} className="text-md-start mx-4" style={{ textDecoration: "none", fontSize: "1.1em" }}>Try Demo &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} className="text-md-start mx-4" style={{ textDecoration: "none", fontSize: "1.1em" }}>Learn More &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="d-flex">
                        <a href={googlePlayStore}><img src="/media/images/googlePlayBadge.svg" alt="" className="m-4" style={{ height: "45px" }} /></a>
                        <a href={appStore}><img src="/media/images/appstoreBadge.svg" alt="" className="m-4" style={{ height: "45px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
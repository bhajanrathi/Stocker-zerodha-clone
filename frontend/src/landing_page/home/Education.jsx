function Education() {
  return (
    <>
      <style>{`
        :root {
            font-family: 'Inter', sans-serif !important;
        }
      `}</style>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md-6">
          <img src="/media/images/education.svg" alt="Varsity image" className="img-fluid"/>
          </div>
          <div className="col-12 col-md-6">
            <h1 className="mb-4" style={{fontSize: "32px"}}>Free and open market education</h1>
            <p className="lead mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="" className="text-md-start fs-5 text-center pb-4" style={{textDecoration: "none" }}>Varsity &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
            <p className="lead mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="" className="text-md-start fs-5 text-center" style={{textDecoration: "none" }}>TradingQ&A &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
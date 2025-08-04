function Hero() {
  return (
    <section className="container-fluid py-4" id="supportHero">
      {/* Top header */}
      <div className="container mb-4" id="supportWrapper">
        <h4 className="mb-2">Support Portal</h4>
        <a
          href="#"
          className="text-decoration-none"
        >
          Track Tickets
        </a>
      </div>

      {/* Main content */}
      <div className="container">
        <div className="row gx-5 gy-4">
          {/* Left Column */}
          <div className="col-12 col-lg-6">
            <h2 className="fs-4 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              placeholder="Eg. how do I activate F&O"
              className="form-control mb-4"
            />
            <div className="d-flex flex-wrap gap-3">
              <a href="#" className="text-decoration-none">
                Track account opening
              </a>
              <a href="#" className="text-decoration-none">
                Track segment activation
              </a>
              <a href="#" className="text-decoration-none">
                Intraday margins
              </a>
              <a href="#" className="text-decoration-none">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-6">
            <h2 className="fs-4 mb-3">Featured</h2>
            <ol className="ps-3 mb-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-decoration-none"
                >
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                >
                  Latest Intraday leverages - MIS & CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

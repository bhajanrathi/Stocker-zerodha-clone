function CreateTicket() {
  const sections = [
    {
      icon: "fa-plus-circle",
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      icon: "fa-circle-user",
      title: "Your Zerodha Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      icon: "fa-chart-simple",
      title: "Kite",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      icon: "fa-indian-rupee-sign",
      title: "Funds",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      icon: "fa-terminal",
      title: "Console",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      icon: "fa-coins",
      title: "Coin",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="fs-2 mb-4">
        To create a ticket, select a relevant topic
      </h1>
      <div className="row g-4">
        {sections.map((section, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="p-3 h-100">
              <h4 className="mb-3">
                <i className={`fa ${section.icon} me-2`} aria-hidden="true"></i>
                {section.title}
              </h4>
              {section.links.map((link, idx) => (
                <div key={idx}>
                  <a
                    href="#"
                    className="d-block text-decoration-none mb-2 text-primary"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;

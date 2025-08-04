import React from "react";
function Hero() {
    return (
        <>
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
            <div className="container p-5 m-75">
                <div className="row text-center">
                    <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5 mx-auto" style={{width: "70%"}} />
                    <h1 className="mt-3 mb-3" style={{fontSize: "44px"}}>Invest in everything</h1>
                    <p className="mt-2 mb-4 fs-4 lead">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="p-2 btn btn-primary hover-black fs-4 text-nowrap" style={{ width: "203px", margin: "0 auto", backgroundColor: "rgb(56, 126, 209)" }}>Sign up for free</button>
                </div>
            </div>
        </>
    );
}

export default Hero;
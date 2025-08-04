import { useNavigate } from 'react-router-dom';
function OpenAccount() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup'); 
    };
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
            <div className="container p-5 mx-auto">
                <div className="row text-center">
                    <h1 className="mt-5 mb-4" style={{ fontSize: "32px" }}>Open a Zerodha account</h1>
                    <p className="mt-2 mb-4 fs-4 lead">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className="p-2 btn btn-primary hover-black fs-4 text-nowrap" style={{ width: "203px", margin: "0 auto", backgroundColor: "rgb(56, 126, 209)" }} onClick={handleClick}>Sign up for free</button>
                </div>
            </div>
        </>
    );
}

export default OpenAccount;
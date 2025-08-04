function NotFound() {
    return ( 
        <>
            <style>
                {`
                :root {
                    font-family: 'Inter', sans-serif !important;
                }
                `}
            </style>
            <div className="container p-5 mx-auto">
                <div className="row text-center">
                    <h1 className="mt-5 mb-4" style={{fontSize: "32px"}}>404 Not Found</h1>
                    <p className="mt-2 mb-4 fs-4 lead">Sorry, the page you are looking for does not exist.</p>
                </div>
            </div>
        </>
     );
}

export default NotFound;
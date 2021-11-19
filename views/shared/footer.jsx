var React = require('react');

function Footer() {
    return (
        <>
            <div className="container fixed-bottom">
                <footer className="d-flex flex-wrap justify-content-between align-items-right py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted ">© 2021 Amarantes Development, Inc</p>

                    {/* <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                        <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                        <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                        <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    </ul> */}
                </footer>
            </div>
        </>
    )
}

module.exports = Footer;
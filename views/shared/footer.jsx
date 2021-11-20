var React = require('react');

function Footer() {
    return (
        <>
            <div className="container fixed-bottom">
                <footer className="d-flex flex-wrap justify-content-between align-items-right py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted ">© 2021 Amarantes Development, Inc</p>
                </footer>
            </div>
        </>
    )
}

module.exports = Footer;
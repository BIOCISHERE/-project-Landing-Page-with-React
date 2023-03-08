import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Start Bootstap
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                    <a className="nav-link" href="#">
                        About
                    </a>
                    <a className="nav-link" href="#">
                        Services
                    </a>
                    <a className="nav-link" href="#">
			            Contact
			        </a>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;

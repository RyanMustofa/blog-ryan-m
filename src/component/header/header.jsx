import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            RyanBlog
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fas fa-bars"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNavAltMarkup"
                        >
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/">
                                    Home
                                </Link>
                                <Link className="nav-item nav-link" to="/article">
                                    Article
                                </Link>
                                <Link className="nav-item nav-link" to="/sekolah">
                                    Sekolah
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {props.children}
            </div>
        );
}

export default Header;

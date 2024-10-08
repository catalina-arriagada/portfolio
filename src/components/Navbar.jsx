import React from 'react';
import { Outlet, Link } from 'react-router-dom';
//import "../styles/navbar.css";

const Navbar = () => {
    return(
        <header>
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                       {/* <img src="./img/devCatGirlLogo.ico" alt="" className='logo' /> */}
                        <Link className="navbar-brand" to="/">Dev Cat Girl</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/projects">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/donations">Donations</Link>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </>
        </header>
        )
    }

export default Navbar;
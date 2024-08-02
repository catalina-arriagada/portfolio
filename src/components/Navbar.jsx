import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <header>
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Dev Cat Girl</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/about">Sobre mí</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contacto">Contacto</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/proyectos" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Proyectos     
                                    </Link>
                                    <ul className="dropdown-menu bg-body-secondary" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item bg-body-secondary" to="/web">Páginas Web</Link></li>
                                        {/*<li><Link className="dropdown-item" to="/proyectos/movil">Aplicaciones Android</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="/proyectos/software">Otros Softwares</Link></li>
                                        */}
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/donaciones">Donaciones</Link>
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
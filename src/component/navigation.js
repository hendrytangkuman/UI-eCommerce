import React from 'react'

function Navigation() {
    return (
        <div className="container border mt-4 shadow">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-secondary" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>ALL TYPES</strong>
                        </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item text-secondary" href="#">Action</a></li>
                                <li><a className="dropdown-item text-secondary" href="#">Another action</a></li>
                                <li><a className="dropdown-item text-secondary" href="#">Something else here</a></li>
                            </ul>
                        </li>
                </ul>
                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link text-secondary" aria-current="page" href="#"><strong>Popular Products</strong></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><strong>Low Price</strong></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><strong>High Price</strong></a>
                    </li>
                </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-secondary" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>PRICE</strong>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navigation;

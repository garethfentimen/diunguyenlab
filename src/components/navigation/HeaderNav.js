import React from 'react';
import { Link } from "gatsby";
import logo from '../../images/CRUK_BARTS_C_Neg_White.png';
import './HeaderNav.scss';

export default function HeaderNav() {
    function mobileMenu() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        hamburger && hamburger.classList.toggle("active");
        navMenu && navMenu.classList.toggle("active");
    }
    return <>
        <div className="pre-header"></div>
        <header>
            <Link to={`/`} className="logo nav-logo">
                <span>DiuNguyen Lab</span>
            </Link>
            <nav className="navbar">
                <ul className="nav-menu" onClick={mobileMenu}>
                    <li className="nav-item">
                        <Link to={`/`}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/research`}>
                            Research
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/people`}>
                                People
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/funding`}>
                            Funding
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/publications`}>
                            Publications
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/news`}>
                            News
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/contact`}>
                            Vacancies/Lab Contact
                        </Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    </>
}

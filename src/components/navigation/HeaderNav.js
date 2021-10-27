import React from 'react';
import { Link } from "gatsby";
import logo from '../../images/CRUK_BARTS_C_Neg_White.png';
import './HeaderNav.scss';

export default function HeaderNav() {
    return <>
        <div className="pre-header"></div>
        <header>
            <Link to={`/`} className="logo">
                <span>DiuNguyen Lab</span>
            </Link>
            <nav className="">
                <ul>
                    <li>
                        <Link to={`/`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={`/research`}>
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link to={`/people`}>
                            <div className="flex">
                                People
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/funding`}>
                            Funding
                        </Link>
                    </li>
                    <li>
                        <Link to={`/publications`}>
                            Publications
                        </Link>
                    </li>
                    <li>
                        <Link to={`/contact`}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}
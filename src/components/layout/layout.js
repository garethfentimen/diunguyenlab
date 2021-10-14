import React from 'react';
import HeaderNav from "../navigation/HeaderNav";
import Footer from "../footer/Footer";
import './layout.scss';

export default function layout({ children }) {
    return (
        <>
            <HeaderNav />
            <div className="layout">
                <div className={`flex`}>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

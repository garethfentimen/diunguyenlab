import React, { useState } from 'react'
import Layout from '../components/layout/layout';
import './contact.scss';
import { copyTextToClipboard } from '../utils/copyToClipboard';

export default function Contact() {
    const [ showTick, setShowTick ] = useState();
    const [ showTickGmail, setShowTickGmail ] = useState();
    const onClickEmail = (e, setFn) => {
        var emailSpan = e.currentTarget ? e.currentTarget.querySelector('#email') : '';
        copyTextToClipboard && emailSpan && copyTextToClipboard(emailSpan.innerText);
        setFn(true);
        if (typeof window !== 'undefined') {
            window.setTimeout(() => setFn(false), 2500);
        }
    }
    return (
        <Layout>
              <div className="flex-column" style={{marginBottom: '1rem'}}>
                <h3 style={{fontFamily: "Exo2", color: "gray"}}>Should you be interested in working with us, do not hesitate to email:</h3>
                <div style={{marginLeft: "5vw"}} className="flex">
                    <div className="flex" role="button">
                        <p tabIndex={0} style={{width: 'fit-content', padding: '.25rem 0.75rem', cursor: 'pointer', boxShadow: '1px 1px 1px 1px #001d5826'}} onClick={(e) => onClickEmail(e, setShowTickGmail)}>
                            <span id="email">thanhdiu.nguyen@gmail.com</span>
                        </p>
                        {showTickGmail && <div className="marg-left-lg flex"><span className="green-check"></span><p>Copied to clipboard</p></div>}
                    </div>
                    <div style={{margin: "1rem 2rem", fontSize: '1.4rem'}}>or</div>     
                    <div className="flex" role="button">
                        <p tabIndex={0} style={{width: 'fit-content', padding: '.1rem 0.5rem', cursor: 'pointer', boxShadow: '1px 1px 1px 1px #001d5826'}} onClick={(e) => onClickEmail(e, setShowTick)}>
                            <span id="email">nguyend@mskcc.org</span>
                        </p>
                        {showTick && <div className="marg-left-lg flex"><span className="green-check"></span><p>Copied to clipboard</p></div>}
                    </div>
                </div>      
              </div>
        </Layout>
    )
}

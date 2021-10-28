import React from 'react'
import Layout from '../components/layout/layout';
import './contact.scss';

export default function contact() {
    const showTick = false;
    return (
        <Layout>
              <div className="flex-column">
                    <div className="flex" role="button">
                            <p tabIndex={0} style={{width: 'fit-content', padding: '.1rem 0.5rem', cursor: 'pointer', boxShadow: '1px 1px 1px 1px #001d5826'}} onClick={onClickEmail} onKeyDown={onClickEmail}>
                                <span id="email">thanhdiu.nguyen@gmail.com</span>
                            </p>
                            {showTick && <div className="marg-left-lg flex"><span className="green-check"></span><p>Copied to clipboard</p></div>}
                        </div>
                        <div>or</div>     
                        <div className="flex" role="button">
                            <p tabIndex={0} style={{width: 'fit-content', padding: '.1rem 0.5rem', cursor: 'pointer', boxShadow: '1px 1px 1px 1px #001d5826'}} onClick={onClickEmail} onKeyDown={onClickEmail}>
                                <span id="email">nguyend@mskcc.org</span>
                            </p>
                            {showTick && <div className="marg-left-lg flex"><span className="green-check"></span><p>Copied to clipboard</p></div>}
                        </div>      
              </div>
        </Layout>
    )
}

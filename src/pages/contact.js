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
                <h3 style={{fontFamily: "Exo2", color: "gray"}}>Should you be interested in working with us, please contact:</h3>
                <p>      
                Dr. Diu Nguyen </p>
                <div className="lab-address">
                  <p>Barts Cancer Institute</p>
                  <p>Centre for Haemato-oncology</p>
                  <p>Queen Mary University of London</p>
                  <p>John Vane Science Centre</p>
                  <p>Charterhouse Square</p>
                  <p>London EC1M 6BQ</p>
                </div>
                <p>
                Email: thanhdiu.nguyen@gmail.com 
                </p>
                <p>
                Follow us on Twitter: @diunguyen_vn_uk
                </p>
                <p>
                More information about <a href="https://www.bartscancer.london/" target="_blank" rel="noopener noreferrer">BCI</a> and <a href="https://www.bartscancer.london/" target="_blank" rel="noopener noreferrer">CRUK Barts Centre
</a>
                </p>
                </div>    
             
        </Layout>
    )
}

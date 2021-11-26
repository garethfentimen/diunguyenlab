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
                Barts Cancer Institute, Centre for Haemato-Oncology, Queen Mary University of London, John Vane Science Centre, Charterhouse Square, London EC1M 6BQ
                
                Email: thanhdiu.nguyen@gmail.com 
                
                Follow us on Twitter: @diunguyen_vn_uk
                
                More information about BCI and <a href="https://www.bartscancer.london/" target="_blank" rel="noopener noreferrer">CRUK Barts Centre
</a>
                </div>    
             
        </Layout>
    )
}

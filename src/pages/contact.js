import React, { useState } from 'react'
import Layout from '../components/layout/layout';
import Seo from "../components/seo/seo";
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
            <Seo title="Opportunities | Contact" />
              <div className="flex-column" style={{marginBottom: '1rem'}}>
                <h3 style={{fontFamily: "Exo2", color: "gray"}}>New openings:</h3>
                <p>
                <strong> - A Postdoctoral Research Scientist </strong>
                </p>

                <p>
                <strong> - An Research Assistant </strong>
                </p>


                <p>
                <strong> - Additionally, MSc students and PhD candidates are always welcome to contact us for potential opportunities.</strong> More about MSc and PhD programs at Barts Cancer Institute are available at 
                    <a href="https://www.bartscancer.london/study-at-bci/postgraduate-research/" target="_blank" rel="noopener noreferrer"> Postgraduate Study at BCI</a>
                </p>

                <p>
                <strong> Should you be interested in working with us, please contact:</strong>
                </p>

                <p>Dr. Diu Nguyen </p>

                <div className="lab-address">
                  <p>Barts Cancer Institute</p>
                  <p>Centre for Haemato-oncology, Queen Mary University of London</p>
                  <p>John Vane Science Centre, Charterhouse Square</p>
                  <p>London EC1M 6BQ</p>
                </div>

                <p>
                Email: <a href="mailto:t.d.nguyen@qmul.ac.uk">t.d.nguyen@qmul.ac.uk</a>   or  <a href="mailto:thanhdiu.nguyen@gmail.com">thanhdiu.nguyen@gmail.com</a>
                </p>

                <p>
                Follow us on Twitter: @diunguyen_vn_uk
                </p>

                <p>
                More information about <a href="https://www.bartscancer.london/" target="_blank" rel="noopener noreferrer"> BCI</a> and <a href="https://www.bartscancer.london/" target="_blank" rel="noopener noreferrer">CRUK Barts Centre</a>
                </p>

                </div>
        </Layout>
    );
}

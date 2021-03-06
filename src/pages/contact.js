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
                <strong> - A Postdoctoral Research Scientist (5 year fixed term)</strong>
                </p>

                <p>
                <strong> - An Research Assistant (2 year fixed term with possible extension)</strong>
                </p>

                <p>
                 Applications are sought for the above positions in our group, for a Cancer Research UK funded research project to study the role of RNA binding proteins in Myeloid Leukaemia.
                This exciting project aims (1) to interrogate the hypothesis whether altered post-transcriptional regulation by RBPs leads to the 
                 development and maintenance of leukaemia, (2) to determine if they have a differential role in normal haematopoiesis, and (3) to understand the 
                 molecular mechanism(s) underlying RBPs function in blood cancer. The project will employ in vitro and in vivo hematopoietic assays, 
                     transcriptome-wide RBPs’ target identification, proteomics, imaging, molecular biology and bioinformatic analyses, 
                         using human and mouse cell cultures as well as genetic knockout/knockin models. You will be a key member of the group and enjoy a vibrant multidisciplinary environment at BCI, and will be supported to develop your scientific career and have an impact in the RNA and cancer field.
                </p>

                <p>
                Essential requirements for these posts include a PhD (for Postdoc candidates) and a BSc/MSc (for RA candidates) in a relevant biological subject and an undergraduate degree in a medical/biological subject. Significant research laboratory experience in Hematology, Cancer biology, RNA biology, as well as Cell & Molecular biology is essential. Additional experience in mouse genetic models and next-generation sequencing would be an advantage. A demonstrable ability of good scientific communication, working within a scientific team, and maintaining good laboratory records is also essential.
                </p>

                <p>
                Application deadline: Open until the positions are filled. Expected starting date: May 1st 2022 or soon after.
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

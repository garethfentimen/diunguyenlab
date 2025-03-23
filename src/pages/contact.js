import React from 'react'
import Layout from '../components/layout/layout';
import Seo from "../components/seo/seo";
import './contact.scss';

export default function Contact() {
    return (
        <Layout>
            <Seo title="Opportunities | Contact" />
              <div className="flex-column" style={{marginBottom: '1rem'}}>
                <h3 style={{fontFamily: "Exo2", color: "gray"}}>New openings:</h3>
                <p>
                <strong> Postdoctoral scientist position 1 </strong>
                </p>

                <p>
                A postdoctoral research position is available to investigate the molecular mechanisms of newly identified RNA regulators in myeloid leukaemia, and to determine their therapeutic potentials. The project is based on our laboratory’s dropout screen which identified a non-canonical RNA-binding protein (RBP), previously known a co-transcription factor, to be overexpressed and required for human acute myeloid leukaemia cell lines. Our goal now is to reveal its therapeutic potential in primary AML cells and mouse genetic models, and understand the mechanisms by which this RBP functions. We will employ cutting-edge methodologies such as iCLIP, HyperTRIBE, CRISPR-Cas9 tiling mutagenesis, and next-generation sequencing approaches, in combination with in vitro/in vivo haematopoietic assays and molecular cell biology techniques to comprehensively decipher the mechanism and fun. 
                </p>    
                <p>
                Essential requirements for this post include a PhD/near completion in a relevant biological subject, significant laboratory experience in RNA biology, molecular biology/cancer cell biology and haematology. Experience in myeloid biology, mouse models and bioinformatics would be strongly desirable. 
                </p>
                <p>
                This is a 36-month fixed term contract with the expected start date of November 2023.
                </p>

                <p>
                <strong> Postdoctoral scientist position 2 </strong>
                </p>
                <p>
                A postdoctoral research position is available to investigate the functional requirement and mechanisms of newly identified RNA regulators in B-cell lymphoma, and to determine their therapeutic potentials. Unlike in AML, the role of RNA binding proteins in the pathogenesis and progression of lymphoma is much less studied. Taking advantage of our laboratory well set-up to study RBP mechanism in AML, we collaborate with lymphoma experts in our institute including Prof. John Gribben, Dr. Jessica Okosun and Dr. John Riches, to spearhead this new research direction. Our preliminary data show RBP high expression is correlated with poor prognosis in Diffuse Large B Cell Lymphoma (DLBCL) – the most aggressive form of B-cell lymphoma and their depletion is incompatible with lymphoma cell survival. We now seek to fully determine the functional requirement and molecular mechanism of RBPs in lymphoma. 
                </p>
                <p>
                Essential requirements for this post include a PhD/near completion in a relevant biological subject, significant laboratory experience in molecular biology/cancer cell biology and haematology. Experience in lymphoma biology, mouse models and bioinformatics would be strongly desirable.
                </p>
                <p>
                This is a 30 month fixed term contract with the expected start date of November 2023. 
                </p>
                <p>
                The candidates will join a vibrant multidisciplinary, multi-institutional environment with a strong critical mass in RNA, genetics, epigenetics and cancer cell biology, and will be supported to develop their scientific career and have an impact in the fields.
                </p>
    
                <p>
                <strong> MSc students and PhD candidates are always welcome to contact us for potential opportunities.</strong> More about MSc and PhD programs at Barts Cancer Institute are available at 
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

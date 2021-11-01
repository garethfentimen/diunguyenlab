import React, { useState } from 'react'
import Layout from '../components/layout/layout';
import coverImg from '../images/CoverImage.jpg';
import vision from '../images/Research_vision.svg';
import researchPg from '../images/Research_page1.svg';
import './research.scss';

const ResearchComponent = () => {
    const [ showVision, setVision ] = useState();
    const [ showPtr, setPtr ] = useState();
    const [ showCoverImg, setCoverImg ] = useState();
    
    const showLightBox = (imageName) => {
        switch (imageName.toLowerCase()) {
            case 'vision': {
                setVision(true);
            }
            break;
            case 'ptr': {
                setPtr(true); 
            }
            break;
            case 'cover': {
                setCoverImg(true); 
            }
            break;
        }

        if (typeof window !== `undefined`) {
            window.scrollTo(0,0);
        }
    }

    
    return (
        <Layout>
            <div class="research marg-top-md">

                <div className="flex">
                    <div><p>Stem cells are key to our normal development. When a stem cells divides into two, it creates one progenitor and one renews itself. The progenitor continues differentiating into mature specialized cells. Stem cells survive much longer than ordinary cells, increasing the chance of accumulating mutations. It might take only a few mutations for one cell to lose control over its self-renewal, divide uncontrollably and become the source of cancer.</p>
                    <p>Cancer stem cells (CSCs) are a small population of rare cells that can self-renew and differentiate into cancerous cells that proliferate uncontrollably, supplying the tumor mass. Conventional chemotherapies often target proliferating cells, leaving CSCs untouched. Therefore, CSCs are the underlying source of drug resistance and disease relapse. </p>
                    </div>
                    
                    <div style={{ padding: "0 .5rem", minWidth: ".5rem"}}>
                    </div>
                    <img alt="Cancer Stem Cell Theory" src={researchPg} />
                    <div style={{ padding: "0 .25rem", minWidth: ".5rem"}}>
                    </div>
                </div>

                <div className="flex">
                    <div>
                    <p><strong>The overarching goal of our laboratory is to understand the biology of normal haematopoietic (HSCs) and leukaemic stem cells (LSCs) in order to selectively kill cancer stem cells for better leukaemia treatment.
                        </strong></p>  
                        <p>Gene expression defines the fate and function of each cell. Our recent work and others have demonstrated that post-transcriptional regulation of gene expression by RNA-binding proteins (RBPs) plays a critical role in cancer including leukemia (Vu,…, Nguyen et al. 2017; Nguyen et al. Nat. Comms 2020; Cheng,…, Nguyen et al. Cancer Cells 2021; Prieto and Nguyen et al. Nat Cancer 2021). Importantly, the identification of dysregulated RBPs in leukemia has led to the rapid development of therapeutic strategies to specifically target several RBPs (Minuesa et al. 2019; Han et al. 2017; Assouline et al. 2015). Despite their importance and therapeutic potential, only a small fraction of RNA regulators (>1,700 known RBPs, Castello et al. 2012; Graindorge et al 2019) has been investigated in leukemia. 
                        </p>
                        <p>Our lab aims to expand understanding of how dysregulated post-transcriptional processes contribute to the initiation and progression of various types of leukemia. We particularly focus on acute myeloid leukaemia (AML) which has been one of the most aggressive and fatal types of blood cancer. To achieve this aim, we will:
                        </p>

                        <ul>
                            <li>Determine the role of a subset of aberrantly expressed RBPs in LSC survival and whether they contribute to leukaemia pathogenesis.</li>
                            <li>Investigate how these RBPs control normal HSCs behaviours.</li>
                            <li>Elucidate the molecular basis for RBP functions in blood cancer.</li>
                        </ul>
                    </div>
                    <div style={{ padding: "0 .5rem", minWidth: ".5rem"}}>
                    </div>
                    <img alt="" src={vision} /> 
                    <div style={{ padding: "0 .25rem", minWidth: ".5rem"}}>
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <p>We will address this question using state-of-the-art tools including unbiased omic approaches to map RBPs’ binding sites and activities including HyperTRIBE (Nguyen et al., Nat Comms, 2020), Ribo-STAMP (Brannan et al. Nat Methods 2021) and high-end Mass spectrometry, combined with molecular biology techniques, on animal models, human primary samples and xenografts. </p>
                        <p><strong>The ultimate goal of our research is to determine the potential targetable RBPs and their molecular mechanisms of action. Once validated, these targets can be used for designing innovative drugs that selectively eradicate LSCs in AML, while sparing normal HSCs.</strong></p>
                        
                    </div>
                
                    <div style={{ padding: "0 .5rem", minWidth: ".5rem"}}>
                    </div>
                    <img alt="Cover Image" src={coverImg} />
                    <div style={{ padding: "0 .25rem", minWidth: ".5rem"}}>
                    </div>
                </div>
                <div style={{ margin: "2rem", minWidth: ".5rem"}}>
                    </div>
            </div>
        </Layout>
    )
}

export default ResearchComponent;

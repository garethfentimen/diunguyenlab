import React from 'react'
import Layout from '../components/layout/layout';
import Seo from "../components/seo/seo";
import coverImg from '../images/CoverImage.jpg';
import vision from '../images/Research_vision.svg';
import researchPg from '../images/Research_page1.svg';
import './research.scss';

const ResearchComponent = () => {
    return (
        <Layout>
            <Seo title="Research" />
            <div className="research marg-top-md">

                <div className="flex">
                    <div>
                        <p>Gene expression defines the fate and function of each cell. Our recent work and
others have demonstrated that post-transcriptional regulation of gene expression
by RNA-binding proteins (RBPs) plays a critical role in cancer including leukaemia
and lymphoma <i>(Vu,…, Nguyen et al. 2017; Nguyen et al. Nat. Comms 2020; Cheng,…,
Nguyen et al. Cancer Cells 2021; Prieto and Nguyen et al. Nat Cancer 2021;
Mlynarczyk,…Nguyen et al. Science. 2023)</i>. </p><p>Importantly, the identification of
dysregulated RBPs in cancer has led to the rapid development of therapeutic
strategies to specifically target several RBPs. Despite their importance and
therapeutic potential, only a small fraction of RNA regulators (more than 1,700 known RBPs)
has been investigated, highlighting the potential for further exploration of novel
vulnerabilities.</p>
                    </div>
                    
                    <div style={{ padding: "0 .5rem", minWidth: ".5rem"}}>
                    </div>
                    <img alt="Cancer Stem Cell Theory" src={researchPg} />
                    <div style={{ padding: "0 .25rem", minWidth: ".5rem"}}>
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <h2>Post-transcriptional regulation of normal haematopoietic and acute myeloid leukaemic stem cells</h2>
                        {/* <p>
                            <strong>The overarching goal of our laboratory is to understand the biology of normal haematopoietic (HSCs) and leukaemic stem cells (LSCs) in order to selectively kill cancer stem cells for better leukaemia treatment.
                            </strong>
                        </p>   */}
                        <p>Stem cells are key to our normal development. When a stem cell divides into two, it
creates one progenitor and one renews itself. The progenitor continues
differentiating into mature specialized cells while the stem cell repeats the division
cycle of making progenitors and reproducing themselves. Stem cells survive much
longer than ordinary cells, increasing the chance of accumulating mutations. It
might take only a few mutations for one cell to lose control over its self-renewal,
divide uncontrollably and become the source of cancer. 
                        </p>
                        <p>Cancer stem cells (CSCs) are a small population of rare cells that can self-renew and
differentiate into cancerous cells that proliferate uncontrollably, supplying the
tumor mass. Conventional therapies, such as chemo- or radiotherapy, often target
proliferating cells, leaving CSCs untouched. Therefore, CSCs are the underlying
source of drug resistance and disease relapse. CSC theory has been experimentally
well proven in the context of Acute Myeloid Leukaemia. <b>
Understanding the
biology of normal haematopoietic (HSCs) and leukaemic stem cells (LSCs) is
the key to developing selective strategies to kill cancer stem cells.
</b>
                        </p>

                        <p>Our lab aims to expand understanding of how dysregulated post-transcriptional
                        processes contribute to the initiation and progression of various types of
                        leukaemia. We particularly focus on acute myeloid leukaemia (AML) which has been
                        one of the most aggressive and fatal types of blood cancer. To achieve this aim, we
                        will:</p>
                        <ul>
                            <li>1. Determine the role of a subset of aberrantly expressed RBPs in LSC
survival and whether they contribute to leukaemia pathogenesis.</li>
                            <li>2. Investigate how these RBPs control normal HSCs behaviours.</li>
                            <li>3. Elucidate the molecular basis for RBP functions in AML cells.</li>
                        </ul>
                    </div>
                    <div style={{ padding: "0 .5rem", minWidth: ".5rem"}}>
                    </div>
                    <img alt="" src={vision} /> 
                    <div style={{ padding: "0 .25rem", minWidth: ".5rem"}}>
                    </div>
                </div>
                <h2>Post-transcriptional regulation of B-cell lymphoma</h2>
                <div className="flex">
                    <div>
                        <p>Non-Hodgkin Lymphoma, of which majority arise from B cells transiting the
germinal centre (GC) reaction, ranks between the 5th to 9th most common cancer
in most countries worldwide. GC is a structure in which B lymphoid cells mature
into plasma or memory B cells to build our immunological memory for future
antigen recalls. GC-derived lymphoma are aggressive and rapidly progressing
diseases with some form almost never cured. Standard treatment includes
combination of anti-CD20 monoclonal antibody with chemotherapy. Approximately
30%-40% of patients either relapse or are refractory to this treatment and die of
their disease. This highlights the unmet clinical needs for novel targeted therapies
in B-cell lymphoma.</p>
                        <p>While somatic alterations in genetic and epigenetic mechanisms regulating
transcription in tumorigenesis have been intensively studied, the role of post-
transcriptional regulation (PTR) of gene expression in cancer development has only
emerged recently (Mlynarczyk et al. Science. 2023). <b>This study aims to identify the
functional requirement of newly identified RBPs in B-cell lymphoma, and to
determine their therapeutic potential in lymphoma treatment.</b></p>


                    </div>
                
                    <div style={{ padding: "0 .5rem", minWidth: ".5rem"}}>
                    </div>
                    <img alt="Cover Image" style={{maxHeight: "22rem", width: "24rem"}} src={coverImg} />
                    <div style={{ padding: "0 .25rem", minWidth: ".5rem"}}>
                    </div>
                </div>
                <div style={{ margin: "1rem", minWidth: ".5rem"}}>
                    </div>

                    <h2>Our Methods</h2>
                        <p>We will address our aims using state-of-the-art tools including unbiased
                        omic approaches to map RBPs’ binding sites and activities including
                        HyperTRIBE (Nguyen et al., Nat Comms, 2020), Ribo-STAMP (Brannan et
                        al. Nat Methods 2021) and high-end Mass spectrometry, combined with
                        haematopoietic assays, molecular/cell biology techniques, on human
                        cell lines, primary patient samples and patient-derived xenografts and
                        mouse genetic models.</p>

                        <p><b>The ultimate goal of our research is to determine the potential
                        targetable RBPs and their molecular mechanisms of action. Once
                        validated, these targets can be used for designing innovative drugs
                        that selectively cancer cells, while sparing normal stem cells.</b></p>

                        <div style={{ margin: "2rem", minWidth: ".5rem"}}>
                    </div>
            </div>
        </Layout>
    )
}

export default ResearchComponent;

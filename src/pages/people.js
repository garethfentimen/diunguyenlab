import React from 'react';
import Layout from '../components/layout/layout'
import Seo from "../components/seo/seo"
import diu from '../images/people/diu-nguyen.jpeg';
import aiman from '../images/people/Aa.jpg';
import phuong from '../images/people/Phuong.jpeg';
import lauren from '../images/people/LO.jpg';
import bertina from '../images/people/BD.jpg';
import bor from '../images/people/Bor.jpg';
import './people.scss'

export default function People() {
    return (
        <Layout>
            <Seo title="People" />
            <div className="flex-column">
                <div className="flex-column text-center">
                    <h1>Meet the team</h1>
                </div>

                <div className="people-grid">
                    <div className="flex grid-bg">
                        <div className="member">
                            <div class="name-title">
                                <h3>Diu T.T. Nguyen, PhD</h3>
                                <h4>Principle Investigator</h4>
                            </div>
                            <div className="member-desc">
                                    <p>
                                    Diu obtained her MSc in Biomolecular Sciences from Vrije Universiteit Amsterdam and the Whitehead Institute for Biomedical Research, MIT. 
                                    She was then awarded a Marie Curie fellowship to complete her PhD (DPhil) from the University of Oxford, UK. 
                                    Diu then moved to the Memorial Sloan-Kettering Cancer Center in New York, USA for her postdoc, investigating the role of post-transcriptional regulation in normal and malignant cancer stem cells. 
                                    </p>
                                    <p>
                                        She pioneered the use of RNA-editing based approaches to identify RNA targets of RNA-Binding Proteins (RBPs) in mammalian stem cells, which has provided new insights into RBP function in rare cells and opened a new avenue for stem cell research. 
                                    She also discovered the oncogenic role of a number of RBPs in blood cancer. 
                                    Diu is a recipient of the American Society of Hematology (ASH) Scholar Fellowship that supports her transition to independence. 
                                    In 2022, Diu started her own group at the Centre for Haemato-Oncology, Barts Cancer Institute, with the support of a Career Development Fellowship from Cancer Research UK.
                                    </p>
                                    <p>For more information about Diu,please find her on <a href="https://twitter.com/diunguyen_vn_uk?s=20" target="_blank" rel="noopener noreferrer">Twitter</a>,<span> </span>
                                        <a href="https://orcid.org/0000-0001-8328-0009" target="_blank" rel="noopener noreferrer">Orcid</a>,<span> </span>
                                        <a href="https://www.researchgate.net/profile/Diu-Nguyen" target="_blank" rel="noopener noreferrer">Research Gate</a>,<span> </span>
                                        <a href="https://scholar.google.com/citations?user=yZb8MqEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
                                    </p> 
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={diu} alt="Dr Diu Nguyen" />
                        </div>
                    </div>

                    <div className="flex grid-bg">
                        <div className="member">
                            <div class="name-title">
                                <h3>Kim-Phuong To</h3>
                                <h4>Postdoctoral fellow</h4>
                            </div>
                            <div>
                            <p>
                            Phuong is originally from Vietnam. She did her PhD at Chonnam National University, Medical School, South Korea where she worked on identifying roles of zinc in prostate cancer and its potential therapeutics.  
                            She then returned to Vietnam to join the Department of Regenerative Medicine at Tra Vinh University, as a lecturer of School of Medicine and Pharmacy. 
                            She joined the Nguyen group in September 2022 and is working on investigating the role and mechanism of MYB-Binding Protein 1A in human AML and normal mouse haematopoiesis.
                            </p>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={phuong} alt="Kim-Phuong To" />
                        </div>
                    </div>

                    <div className="flex grid-bg">
                        <div className="member">
                            <div class="name-title">
                                <h3>Bertina Dragunaite</h3>
                                <h4>PhD student</h4>
                            </div>
                            <div>
                            <p>
                            Bertina Dragunaite relocated to the UK from Lithuania to pursue her undergraduate’s degree in Pharmacology and Molecular Genetics in King’s College London. 
                            After that, she simultaneously has been working as an associate practitioner in the Department of Haemostasis, UCLH, and doing her full-time MRes degree in Cancer Biology and Cancer Informatics at Imperial College London. 
                            Prior to starting her PhD in Diu Nguyen’s lab, Bertina worked as a Research Technician in Haemostasis Research Unit, University College London, where she contributed to numerous clinical research projects investigating thrombotic thrombocytopenic purpura disorder. 
                            In her PhD, she is aiming to identify the role and mechanisms of MYB-Binding Protein 1A in acute myeloid leukaemia (AML) using various murine conditional knockout in vivo and in vitro models, as well as employing omics-based approaches. 
                            Additionally, she is interested in exploring the translational reprogramming during AML development using a novel RNA editing-based approach.
                            </p>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img src={bertina} className="pad-md people-image" alt="Bertina Dragnunaite" />
                        </div>
                    </div>

                    <div className="flex grid-bg">
                        <div className="member">
                            <div class="name-title">
                                <h3>Lauren Harrison-Oakes</h3>
                                <h4>PhD student</h4>
                            </div>
                            <div>
                            <p>
                            Lauren Harrison Oakes joined the Nguyen lab as a PhD student in September 2024. Her research in the lab focuses on the role of RNA binding proteins in B-cell lymphoma. 
                            Before joining BCI, Lauren completed her BA and MSci in Biochemistry at the University of Cambridge. 
                            During which she worked in Professor Jussi Taipale’s lab investigating transcription factor binding and chromatin regulation, followed by work in Professor Sir Tony Kouzarides’ lab exploring the role of an RNA binding protein in pancreatic cancer.
                            </p>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={lauren} alt="Lauren Harrison-Oakes" />
                        </div>
                    </div>
        
                    <div className="flex grid-bg">
                        <div className="member">
                            <div class="name-title">
                                <h3>Aiman Ahmad</h3>
                                <h4>Clinician Research Training Fellow</h4>
                                <div></div>
                            </div>
                            <div>
                            <p>
                            Aiman joined the Diu Nguyen lab as a CTRF/PhD in November 2024. His PhD is focussed on identifying novel RNA-binding protein dependencies in acute myeloid leukaemia. 
                            Before joining the BCI, Aiman completed an intercalated MBBS/BMedSc at Monash University Malaysia in 2013, during which he did research with carbonate-apatite nanoparticles as a novel drug delivery device for insulin. 
                            He then underwent medical training followed by 3 years of haematology specialty training in Doha, Qatar. 
                            Aiman relocated to the UK in 2022 to continue haematology training under the East-of-England deanery, and completed 2 years before pursuing a PhD degree at BCI.
                            </p>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={aiman} alt="Aiman Ahmad" />
                        </div>
                    </div>

                    <div className="flex grid-bg">
                        <div className="member">
                            <div class="name-title">
                                <h3>Bor Makše</h3>
                                <h4>UG placement student</h4>
                                <div></div>
                            </div>
                            <div>
                            <p>
                            Bor Makše is doing a BSc in Medical & Pharmaceutical Biotechnology at the University of Applied Sciences IMC Krems, Austria. 
                            He joined the lab in July 2025 for half a year of industrial placement. He hopes to gain experience in molecular and cancer cell biology field. 
                            Paricularly, he will be working closely with Lauren to create fluorescence tag and dTAG knock-in cell line models to investigate the role and interactions of RNA-binding proteins in blood cancer cells.
                            </p>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={bor} style={{height: '90%'}} alt="Bor Makše" />
                        </div>
                    </div>
        
                </div>

                <div className="flex-column grid-bg pad-btm-lg marg-top-xl">
                    <div className='flex marg-left-lg'>
                        <div>
                            <div className="flex pi">
                                <div className="flex-column">
                                    <h3 style={{color: 'gray'}}>Past members:</h3>
                                </div>
                                
                            </div>
                            
                            <div className="diu-desc">
                                <p>
                                Quang-Anh Hoang - Research Technician. Current position: PhD student at University of British Columbia
                                </p>
                                <p>
                                Khadidja Habel - Research Technician. Current position: Laboratory Research Technician at Francis Crick Institute
                                </p>
                                <p>
                                James Boncan - PDRA. Current position: PDRA at Queen Mary University of London
                                </p>
                                <p>
                                Wisdom Igiogbe - Undergraduate intern. Current position: Clinic/Pathway Coordinator(Oncology) at the MTW NHS Trust.
                                </p>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
                {/* 
                <img style={{ width: "30%" }} className="" src={bertina} alt="Bertina Dragnunaite" />
                <div style={{ width: "20%" }} className="image-text marg-left-lg">
                   <p>Bertina Dragnunaite</p>
                   <h4 style={{color: 'gray'}}>PhD student</h4>
                </div>
                <img style={{ width: "30%" }} className="" src={lauren} alt="Lauren Harrison-Oakes" />
                <div style={{ width: "20%" }} className="image-text marg-left-lg">
                   <p>Lauren Harrison-Oakes</p>
                   <h4 style={{color: 'gray'}}>PhD student</h4>
                </div>
                </div> */}

            

            {/* <div className="flex" style={{ width: "100%" }}>
                <p>The Diu Nguyen lab is part of <a href="https://www.bartscancer.london/our-research/rna-biology/" target="_blank" rel="noopener noreferrer">Barts RNA Cancer Hub</a>.</p>
                <p>We are always looking for highly motivated and enthusiastic people who are fascinated by cancer biology, RNA biology and novel cancer therapies. If you are interested in joining us, please do not hesitate to get in touch.</p> 
                <p>
                    We currently have openings for the following positions:
                </p>
                <ul>
                    <li>Research assistants</li>
                    <li>PhD students</li>
                    <li>Masters students</li>
                </ul>
            </div> */}
        </Layout>
    )
}

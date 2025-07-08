import React from 'react'
import Layout from '../components/layout/layout'
import Seo from "../components/seo/seo"
import diu from '../images/people/diu-nguyen.jpeg';
import aiman from '../images/people/Aiman.jpeg';
import phuong from '../images/people/Phuong.jpeg';
import lauren from '../images/people/Lauren2.jpeg';
import bertina from '../images/people/Bertina.jpg';
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
                        <div class="marg-left-sm">
                            <div class="text-center">
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
                        <div class="marg-left-sm">
                            <div class="text-center">
                                <h3>Kim-Phuong To</h3>
                                <h4>Postdoctoral fellow</h4>
                            </div>
                            <div></div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={phuong} alt="Kim-Phuong To" />
                        </div>
                    </div>

                    <div className="flex grid-bg">
                        <div class="marg-left-sm">
                            <div class="text-center">
                                <h3>Bertina Dragunaite</h3>
                                <h4>PhD student</h4>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img src={bertina} className="pad-md people-image" alt="Bertina Dragnunaite" />
                        </div>
                    </div>

                    <div className="flex grid-bg">
                        <div class="marg-left-sm">
                            <div class="text-center">
                                <h3>Lauren Harrison-Oakes</h3>
                                <h4>PhD student</h4>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={lauren} alt="Lauren Harrison-Oakes" />
                        </div>
                    </div>
                    <div className="flex grid-bg">
                        <div class="marg-left-sm">
                            <div class="text-center">
                                <h3>Aiman Ahmad</h3>
                                <h4>Clinician Research Training Fellow</h4>
                                <div></div>
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-md people-image" src={aiman} alt="Aiman Ahmad" />
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
                                Wisdom Igiogbe - Undergraduate intern. Current position: undergraduate student at Kent University
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

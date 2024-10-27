import React from 'react'
import Layout from '../components/layout/layout'
import Seo from "../components/seo/seo"
import diu from '../images/people/diu-nguyen.jpeg';
import aiman from '../images/people/Aiman.jpeg';
import phuong from '../images/people/Phuong.jpeg';
import lauren from '../images/people/Lauren2.jpeg';
import bertina from '../images/people/Bertina.jpg';
import groupPhoto from '../images/NguyenLab_group_photo_140223.jpg';
import './people.scss'

export default function People() {
    return (
        <Layout>
            <Seo title="People" />
            <div className="flex-column">
                <div className="flex-column text-center">
                    <h1>Meet the team</h1>
                </div>
                <div className="flex-column">
                    <div className='flex'>
                        <div>
                            <div className="flex pi">
                                <div className="flex-column">
                                    <h3 style={{color: 'gray'}}>Principle Investigator:</h3>
                                </div>
                                <div>
                                    <h3 className="marg-left-xs">Diu T.T. Nguyen, PhD</h3>  
                                </div>
                            </div>
                            
                            <div className="diu-desc">
                                <p>
                                Diu obtained her MSc in Biomolecular Sciences from Vrije Universiteit Amsterdam and the Whitehead Institute for Biomedical Research, MIT. 
                                She was then awarded a Marie Curie fellowship to complete her PhD (DPhil) from the University of Oxford, UK. 
                                Diu then moved to the Memorial Sloan-Kettering Cancer Center in New York, USA for her postdoc, investigating the role of post-transcriptional regulation in normal and malignant cancer stem cells. 
                                She pioneered the use of RNA-editing based approaches to identify RNA targets of RNA-Binding Proteins (RBPs) in mammalian stem cells, which has provided new insights into RBP function in rare cells and opened a new avenue for stem cell research. 
                                She also discovered the oncogenic role of a number of RBPs in blood cancer. 
                                Diu is a recipient of the American Society of Hematology (ASH) Scholar Fellowship that supports her transition to independence. 
                                In 2022, Diu started her own group at the Centre for Haemato-Oncology, Barts Cancer Institute, with the support of a Career Development Fellowship from Cancer Research UK.
                                </p>
                                <p>For more information about Diu,please find her on <a href="https://twitter.com/diunguyen_vn_uk?s=20" target="_blank" rel="noopener noreferrer">Twitter</a>,<span> </span>
                                    <a href="https://orcid.org/0000-0001-8328-0009" target="_blank" rel="noopener noreferrer">Orchid</a>,<span> </span>
                                    <a href="https://www.researchgate.net/profile/Diu-Nguyen" target="_blank" rel="noopener noreferrer">Research Gate</a>,<span> </span>
                                    <a href="https://scholar.google.com/citations?user=yZb8MqEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>.</p> 
                            </div>
                        </div>
                        <div className="align-right image-right">
                            <img className="pad-lg" style={{height: "35%"}} src={diu} alt="Dr Diu Nguyen" />
                            <div className="image-text marg-left-lg">
                                {/* <p>Group Leader</p>
                                <p>Lecturer</p> */}
                                <p>CRUK Career Development Fellow</p>
                                <p>ASH Scholar Fellow</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="people-grid">
                    <div className="text-center grid-bg">
                        <h3 className="no-margin">Kim-Phuong To</h3>
                        <h3 style={{color: 'gray'}} className="no-margin">Postdoctoral fellow</h3>
                        <div className="pad-md">
                            <img style={{ width: "40%" }} className="" src={phuong} alt="Kim-Phuong To" />
                        </div>
                    </div>

                    <div className="text-center grid-bg">
                        <h3 className="no-margin">Bertina Dragunaite</h3>
                        <h3 style={{color: 'gray'}} className="no-margin">PhD student</h3>
                        <div className="pad-md">
                            <img style={{ width: "40%" }} className="" src={bertina} alt="Bertina Dragnunaite" />
                        </div>
                    </div>

                    <div className="text-center grid-bg">
                        <h3 className="no-margin">Lauren Harrison-Oakes</h3>
                        <h3 style={{color: 'gray'}} className="no-margin">PhD student</h3>
                        <div className="pad-md">
                            <img style={{ width: "40%" }} className="" src={lauren} alt="Lauren Harrison-Oakes" />
                        </div>
                    </div>
                    <div className="text-center grid-bg">
                        <h3 className="no-margin">Aiman Ahmad</h3>
                        <h3 style={{color: 'gray'}} className="no-margin">Clinician Research Training Fellow</h3>
                        <div className="pad-md">
                            <img style={{ width: "35%" }} className="" src={aiman} alt="Aiman Ahmad" />
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

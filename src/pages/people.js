import React from 'react'
import Layout from '../components/layout/layout'
import Seo from "../components/seo/seo"
import diu from '../images/people/diu-nguyen.jpeg';
import khadidja from '../images/people/khadidja-habel.jpg';
import rana from '../images/people/rana-elnady.jpg';
import phuong from '../images/people/IMG_9343_Phuong.jpg';
import james from '../images/people/IMG_9332_James.jpg';
import wisdom from '../images/people/IMG_9330_Wisdom.jpg';
import './people.scss'

export default function People() {
    return (
        <Layout>
            <Seo title="People" />
            <div>
                <div className='flex'>
                    <div>
                        <div className="flex pi">
                            <div className="flex-column">
                                <h3 style={{color: 'gray'}}>Principle Investigator:</h3>
                        
                            </div>
                            <div>
                                <h3 className="marg-left-xs">Diu T.T. Nguyen, PhD</h3>
                                <div className="edu">
                                    <div>Vrije Universiteit Amsterdam - MSc</div>
                                    <div>University of Oxford – PhD </div>
                                    <div>Memorial Sloan-Kettering Cancer Center – Postdoctoral Scholar</div>
                                </div>
                                
                            </div>
                        </div>
                        <p>
                            <strong>Diu T.T. Nguyen, PhD., is a Group Leader and Lecturer at the Barts Cancer Centre, Queen Mary University of London in 2022. 
                            </strong>
                        </p>
                        <p>
                          Diu received her undergraduate degree in Biology from Hanoi University of Science. 
                          She obtained her MSc in Biomolecular Sciences from Vrije Universiteit Amsterdam and the Whitehead Institute for Biomedical Research, MIT, under support from Huygens Scholarship. 
                          She was awarded an EC Marie Curie fellowship to complete her PhD (DPhil) from the University of Oxford, UK. 
                          Her PhD work focused on the role of chromatin remodeling factor ATRX in congenital genetic disorders and cancers. 
                          She uncovered the genomic regions ATRX interacts with and how ATRX loss leads to genome instability.
                        </p>
                        <p>
                          Diu then moved to the Memorial Sloan-Kettering Cancer Center in New York, USA for her postdoctoral training in Dr. Michael Kharas’ laboratory, investigating the role of post-transcriptional regulation in normal and malignant cancer stem cells. 
                          She pioneered the use of RNA-editing based approaches to identify RNA targets of RNA-Binding Proteins (RBPs) in mammalian stem cells, which has provided new insights into RBP function in rare cells and opened a new avenue for stem cell research. 
                          She also discovered the oncogenic role of a number of RBPs in blood cancer. 
                          Diu is a recipient of the American Society of Hematology (ASH) Scholar Fellowship that supports her transition to independence. 
                          In August 2020, Diu was awarded the prestigious Career Development Fellowship from Cancer Research UK to start her own group at the Centre for Haemato-Oncology, Barts Cancer Institute.
                        </p>
                        <p>For more information about Diu,please find her on <a href="https://twitter.com/diunguyen_vn_uk?s=20" target="_blank" rel="noopener noreferrer">Twitter</a>,<span> </span>
                            <a href="https://orcid.org/0000-0001-8328-0009" target="_blank" rel="noopener noreferrer">Orchid</a>,<span> </span>
                            <a href="https://www.researchgate.net/profile/Diu-Nguyen" target="_blank" rel="noopener noreferrer">Research Gate</a>,<span> </span>
                            <a href="https://scholar.google.com/citations?user=yZb8MqEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>.</p> 
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
                    </div>
                    <div className="align-right image-right">
                        <img className="pad-lg" src={diu} alt="Dr Diu Nguyen" />
                        <div className="image-text marg-left-lg">
                            {/* <p>Group Leader</p>
                            <p>Lecturer</p> */}
                            <p>CRUK Career Development Fellow</p>
                            <p>ASH Scholar Fellow</p>
                        </div>
                    </div>
                </div>
            <hr />
            <div className="flex">
                <img style={{ width: "30%" }} className="" src={james} alt="James Boncan" />
                <div style={{ width: "20%" }} className="image-text marg-left-lg">
                   <p>James Boncan</p>
                   <h4 style={{color: 'gray'}}>Postdoctoral Research Scientist</h4>
                </div>
                <img style={{ width: "30%" }} className="" src={phuong} alt="Kim-Phuong To" />
                <div style={{ width: "20%" }} className="image-text marg-left-lg">
                   <p>Kim-Phuong To</p>
                   <h4 style={{color: 'gray'}}>Research Technician</h4>
               </div>
                <img style={{ width: "30%" }} className="" src={khadidja} alt="Khadidja Habel" />
                <div style={{ width: "20%" }} className="image-text marg-left-lg">
                   <p>Khadidja Habel</p>
                   <h4 style={{color: 'gray'}}>Research Technician</h4>
                </div>
                <img style={{ width: "30%" }} className="" src={wisdom} alt="Wisdom Igiogbe" />
                <div style={{ width: "20%" }} className="image-text marg-left-lg">
                   <p>Wisdom Igiogbe</p>
                   <h4 style={{color: 'gray'}}>Undergraduate placement student</h4>
                </div>
                <img style={{ width: "30%" }} className="" src={rana} alt="Rana Elnady" />
                <div style={{ width: "20%" }} className="image-text marg-left-lg">
                   <p>Rana Elnady</p>
                   <h4 style={{color: 'gray'}}>MSc Student</h4>
                </div>
            </div>
            <div className="flex">
                
            </div>

            </div>
        </Layout>
    )
}

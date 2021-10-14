import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import diu from '../images/nguyen-diu.jpeg';
import { copyTextToClipboard } from '../utils/copyToClipboard';
import './people.scss'

export default function People() {
    const [ showTick, setShowTick ] = useState();
    const onClickEmail = (e) => {
        var emailSpan = document.getElementById('email');
        copyTextToClipboard && emailSpan && copyTextToClipboard(emailSpan.innerText);
        setShowTick(true);
        if (typeof window !== 'undefined') {
            window.setTimeout(() => setShowTick(false), 2500);
        }
    }
    return (
        <Layout>
            <div>
                <div className="flex pi">
                    <h3 style={{color: 'gray'}}>Principle Investigator:</h3>
                    <div className="edu">
                        <h3 className="marg-left-xs">Diu T.T. Nguyen, PhD</h3>
                        <div>Vrije Universiteit Amsterdam - MSc</div>
                        <div>University of Oxford – PhD </div>
                        <div>Memorial Sloan-Kettering Cancer Center – Postdoctoral Scholar</div>
                    </div>
                </div>
                <div className="flex" role="button">
                    <p tabIndex={0} style={{width: 'fit-content', padding: '.1rem 0.5rem', cursor: 'pointer', boxShadow: '1px 1px 1px 1px #001d5826'}} onClick={onClickEmail} onKeyDown={onClickEmail}>
                        <strong>Email:</strong> <span id="email">thanhdiu.nguyen@gmail.com</span>
                    </p>
                    {showTick && <div className="marg-left-lg flex"><span className="green-check"></span><p>Copied to clipboard</p></div>}
                </div> 
                <p>Diu T.T. Nguyen, PhD., joined the Barts Cancer Centre, Queen Mary University of London as a Group Leader and Lecturer in the Centre for Haemato-Oncology in April 2022. 
                </p>
                <p>Diu Nguyen received her undergraduate degree in Biology from Hanoi University of Science, and obtained her MSc in Biomolecular Sciences from Vrije Universiteit Amsterdam and the Whitehead Institute for Biomedical Research, MIT, under support from Huygens Scholarship. </p>
                <p>Diu was awarded an EC Marie Curie fellowship to complete her PhD (DPhil) from the University of Oxford, UK. She then moved to the Sloan Cancer Center in New York, USA for her postdoctoral work in Dr. Michael Kharas’ laboratory. Diu was awarded a Scholar Fellowship from the American Society of Hematology (ASH) for her transition to independence. In August 2020, Diu received a Career Development Fellowship from the Cancer Research UK to start her own group at the Barts Cancer Institute. 
                </p>
                <p>For more information about Diu: <a href="https://www.researchgate.net/profile/Diu-Nguyen" target="_blank" rel="noopener noreferrer">Research Gate</a>, <a href="https://scholar.google.com/citations?user=yZb8MqEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>, <a href="https://twitter.com/diunguyen_vn_uk?s=20" target="_blank" rel="noopener noreferrer">Twitter</a>.</p> 
                <p>The Diu Nguyen lab is part of <a href="https://www.bartscancer.london/our-research/rna-biology/" target="_blank" rel="noopener noreferrer">Barts RNA Cancer Hub</a>.</p>
                <p>
                    We currently have openings for the following positions:
                </p>
                <ul>
                    <li>Postdoctoral scientists</li>
                    <li>Research assistants</li>
                    <li>
                    PhD students
                    </li>
                    <li>Masters students</li>
                </ul>
            </div>
            <div className="align-right">
                <img className="pad-lg" src={diu} alt="Dr Diu Nguyen" />
            </div>
        </Layout>
    )
}

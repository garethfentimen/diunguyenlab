import React, { useEffect, useState } from "react";
import { graphql, Link } from 'gatsby';
import './home.scss';
import expImg2 from '../images/shLuc11_exp_1_edit.jpg';
import homeResearchImg from '../images/Homepage_image.svg';

const Home = ({data}) => {
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const imageBanner = document.querySelector('.exp-images');
        const topHeader = document.getElementById('ScrollCheck');

        const observer = new IntersectionObserver(entries => {  
          entries.forEach(entry => {
            // We will fill in the callback later...
            console.log(entry);
            if (!entry.isIntersecting) {
              // It's visible. Add the animation class here!
              imageBanner.classList.add('animate');
              setTimeout(() => {
                imageBanner.classList.remove('animate');
                imageBanner.classList.add('hidden');
              }, 1000);
            }
          });
        });

        observer.observe(topHeader);
      }
    });

    return (
        <div className="home">
          <div id="ScrollCheck" className="scroll-check"></div>
          <div className="exp-images">
          <div className="banner">
            <span className="welcome">Welcome to the Diu Nguyen Lab</span>
          </div>
          <img alt="Welcome to the Diu Nguyen lab: superimposed on an image from a microscope" className={`exp-img`} src={expImg2} />
        </div>
        <div className="content">
          <h3 style={{fontFamily: 'Exo2', color: 'gray'}}>Research Overview</h3>
          <div className="flex">
            <div>
              <p>The overarching goal of the DiuNguyen laboratory is to understand the control of stem cells in normal development and human diseases. Our research program focuses on uncovering the role of post-transcriptional regulation (PTR) by RNA binding proteins (RBPs) in normal and malignant stem cells using hematopoiesis as a model system. While somatic alterations in genetic and epigenetic mechanisms in tumorigenesis have been intensively studied, little is known about how processes that affect PTR of gene expression impact cancer development. We aim (1) to identify novel RBPs required for normal blood development and leukemogenesis, and (2) to understand the molecular mechanisms for how altered activities of RBPs contribute to malignant transformation, with the ultimate goal of developing innovative targeted therapies for cancer.</p>
              {/* <div className="flex align-center">
                <Link className="btn" to={`/research`}>Research</Link>
              </div> */}
            </div>
            <div className="align-right">
              <img src={homeResearchImg} 
                    alt="Research Figure" 
                    className="research-figure" 
              />
            </div>
          </div>
          
          <h3 style={{fontFamily: 'Exo2', color: 'gray'}}>Long term vision</h3>

          <p>Key questions that we will address in our lab are:</p>

          <ul>
            <li>Despite their relevance in diseases and great therapeutic potential, the function of majority of RBPs (of >1700 RBPs in the cells), including non-canonical RBPs lacking RNA binding domains (RBD) in normal and cancer stem cells, has not been studied.</li>
            <li>Although some RBPs have been demonstrated to be critical for stem cell behavior, the molecular basis for their function in PTR, in particular translational regulation, and how it alters during malignant transformation is poorly understood.</li>
            <li>How the cell-context dependent activity of RBPs play role in determining heterogeneity of stem cell population and cell fate decision.</li>
          </ul>

          <p>To answer these questions, we will undertake a multidisciplinary approach integrating hematopoietic assays, RNA-editing based technology, proteomics and molecular biology in cell lines, mouse genetic models and patient primary cells and -derived xenografts.</p>
          <p>We aim to build a strong team of curious and highly motivated scientists who are driven to study RNA biology in normal development and cancer and to identify new therapeutic opportunities. We support and help our team members’ to achieve their career goals and personal development.</p>

          <p>
            <Link className="btn" to={`/funding`}>Funding</Link>
          </p>
          <p>
            
          <Link className="btn" to={`/funding`}>About us</Link>
          </p>
        </div>
      </div>
    )
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default Home;
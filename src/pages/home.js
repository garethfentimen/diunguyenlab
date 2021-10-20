import React, { useEffect } from "react";
import { graphql, Link } from 'gatsby';
import './home.scss';
import expImg2 from '../images/shLuc11_exp_1_text_crop.jpg';

const Home = ({data}) => {

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const observer = new IntersectionObserver(entry => {  
          // We will fill in the callback later...
          if (entry.isIntersecting) {
            // It's visible. Add the animation class here!
            entry.target.classList.add('animation');
          }
        });
        
        // Tell the observer which elements to track
        observer.observe(document.querySelector('.exp-images'));
      }
    });

    return (
        <div>
          <div className="exp-images">
          {/* <div className="banner">
            <span className="welcome">Welcome</span> 
            <span className="tothe">to the</span>
            <span className="dn-lab">Diu Nguyen</span>
            <span className="lab">Lab</span>
          </div> */}
          <img alt="Welcome to the Diu Nguyen lab: superimposed on an image from a microscope" className={`exp-img`} src={expImg2} />
        </div>
        <div className="content">
          <p>
            <Link className="btn" to={`/research`}>Research</Link>
          </p>
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
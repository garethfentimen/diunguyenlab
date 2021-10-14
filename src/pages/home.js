import * as React from "react";
import { graphql } from 'gatsby';
import './home.scss';
import expImg2 from '../images/shLuc11_exp_1_edit.jpg';

const home = ({data}) => {
    console.log(data);
    return (
        <div className="exp-images">
          <div className="banner">
            <span className="welcome">Welcome</span> 
            <span className="tothe">to the</span>
            <span className="dn-lab">Diu Nguyen</span>
            <span className="lab">Lab</span>
          </div>
          <img alt="lab experiment" className={`exp-img`} src={expImg2} />
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

export default home;
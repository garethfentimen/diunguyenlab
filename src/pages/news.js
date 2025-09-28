import goape1 from '../images/goape1.jpg';
import goape2 from '../images/goape2.jpg';
import goape3 from '../images/goape3.jpg';
import goape4 from '../images/goape4.jpg';
import anniversary3 from '../images/Anniversary3.jpg';
import eharecon25 from '../images/EHARecon25.jpg';
import lab_lunch from '../images/Lab_lunch.png';
import campus_winter from '../images/Campus_winter.jpg';
import summer2023_1 from '../images/Summer2023_1.jpg';
import summer2023_2 from '../images/Summer2023_2.jpg';
import Joint_labs_Christmas_lunch_2023 from '../images/Joint_labs_Christmas_lunch_2023.jpg';

import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import './news.scss'

export default function News() {
    return (
     <Layout>
        <Seo title="News" />
        <div className="flex-column">

            <div className="flex-column">
            <h2>August 2025</h2>
            <p> Summer outing 2025: We went go-aping in the beautiful Alexandra palace park!</p> 
            </div>
            <div className="flex lab-images">
            <img style={{ width: "30%" }} src={goape1} alt="Go Ape 1"/>
            <img style={{ width: "30%" }} src={goape2} alt="Go Ape 2"/>
            <img style={{ width: "30%" }} src={goape3} alt="Go Ape 3"/>
            <img style={{ width: "30%" }} src={goape4} alt="Go Ape 4"/>
            </div>
        
            <div className="flex-column">
            <h2>April 2025</h2>
            <p>We celebrated the 3rd anniversary of our lab in beautiful sunny weather and bimbimbap!</p> 
            </div>
            <div className="flex lab-images">
            <img style={{ width: "30%" }} src={anniversary3} alt="Anniversary 3rd" />
            </div>
        
            <div className="flex-column">
            <h2>March 2025</h2>
            <p>Diu presented Bertina and Phuong's work at the EHA Research conference in Malaga!</p> 
            </div>
            <div className="flex lab-images">
            <img style={{ width: "30%" }} src={eharecon25} alt="EHA Recon 2025" />
            </div>
        
            <div className="flex-column">
            <h2>October 2024</h2>
            <p>Congratulations to Bertina for passing her 9 month viva!</p> 
              </div>
        
          <h4>Joint lab Christmas lunch with Deniz's and Rio-Machin's labs</h4>
    
          <div className="flex lab-images">
              <img style={{ width: "30%" }} src={Joint_labs_Christmas_lunch_2023} alt="Christmas lunch 2023 with Deniz's and Rio-Machin's labs" />
          </div>
    
          <div className="flex-column">
            <h2>November 2023</h2>
            <p>Congratulations to Khadidja for landing a great position at the Francis Crick institute and Nilo for becoming an NHS medical scientist at Bedfordshire hospital!</p> 
          </div>
        
          <div className="flex-column">
            <h2>September 2023</h2>
            <p>We celebrated the successful lab project completion of our three amazing students, Wisdom, Nilo and Siddhi. Well done!</p>
          </div>

          <h4>Pizza on the green</h4>
          <div className="flex lab-images">
            <img style={{ width: "30%" }} src={summer2023_1} alt="Pizza party" />
            <img style={{ width: "50%" }} src={summer2023_2} alt="Pizza party star" />
          </div>

          <h2>March 2023</h2>

          <p>Our lab won a Barts Charity research grant, which will allow us to work on the role of RNA-
binding proteins in B-cell lymphoma. Recruitment of a PhD student position in progress! The
project starts in October 2023 or January 2024. Please get in touch for more information.</p>

          <h4>Our first Christmas lab lunch</h4>
    
          <div className="flex lab-images">
              <img style={{ width: "30%" }} src={lab_lunch} alt="lab lunch" />
              <img style={{ width: "50%" }} src={campus_winter} alt="campus winter" />
          </div>

          <div className="flex-column">
              <h2>December 2022</h2>
              <p>We welcomed two members of the DiuNguyen lab: Khadidja Habel joined the lab as a research
              technician under ASH funding and James Boncan, PhD as a postdoctoral research assistant
              under our CRUK CDF grant.</p>
          </div>

          <div className="flex-column">
              <h2>October 2022</h2>
              <p>Wisdom Igiogbe, undergraduate student at Kent University, started his one-year
              placement as part of his sandwich programme at Queen Mary.</p>
          </div>

          <div className="flex-column">
              <h2>September 2022</h2>
              <p>Our first official member Kim-Phuong To, PhD joined the lab. She arrived in London on her
              birthday, how special!</p>
          </div>
    
          <div className="flex-column">
              <h2>August 2022</h2>
              <p>Our lab was awarded a CRUK City of London (CoL) Development Fund which started a brand-
              new exciting direction of research in the lab – investigating the role of translational regulation
              in cancer progression.</p>
          </div>
    
          <div className="flex-column">
            <h2>July 2022</h2>
            <p>Rana Elnady and Khadidja Habel joined the lab as MSc placement students.</p>
          </div>
    
          <div className="flex-column">
            <h2>May 2022</h2>
            <p>Bench and equipment are ready for experiments!</p>
          </div>
    
          <div className="flex-column">
              <h2>1st April 2022</h2>
              <p>The DiuNguyen laboratory is officially opened at the Centre for Haemato-Oncology, Barts
              Cancer Institute, QMUL.</p>
          </div>
       </div>
    </Layout>
    )
}

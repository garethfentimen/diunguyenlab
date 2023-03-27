import lab_lunch from '../images/Lab_lunch.png';
import campus_winter from '../images/Campus_winter.jpg';

import React from 'react'
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import './news.scss'

export default function News() {
    return (
     <Layout>
            <Seo title="News" />
      <div className="flex-column">
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

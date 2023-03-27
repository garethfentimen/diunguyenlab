import lab_lunch from '../images/Lab_lunch.png';
import campus_winter from '../images/Campus_winter.png';

import React from 'react'
import Layout from '../components/layout/layout'
import Seo from "../components/seo/seo"

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
<img style={{ width: "50%" }} src={lab_lunch} alt="lab lunch" />
<img style={{ width: "50%" }} src={campus_winter} alt="campus winter" />
    </div>


                   </Layout>
    )
}

import * as React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo/seo";

export default function funding() {
    return (
        <Layout>
            <Seo title="Funding" />
            <div className="width-100 flex-column marg-top-md">
                <div className="marg-top-sm width-100" style={{width: "20rem", marginLeft: "calc(50% - 10rem)"}}>
                            
                </div>
                <p class="text-center">
                    <strong>Cancer Research UK (CRUK) Career Development Fellowship</strong>
                </p>
                <div className="width-100 flex-column text-center">
                    <p>“Targeting Post-transcriptional Regulators to Eradicate Leukemic Stem Cells in Acute Myeloid Leukemia”. 2022-2028</p>
                    <p><strong>American Society of Hematology Scholar Award. </strong></p>
                    <p>“Uncovering differential translational program in AML”. 2021-2023</p>
                    <p><strong>CRUK Development Fund. </strong></p>
                    <p>“Generation of a novel in vivo tool to investigate translational alterations during tumorigenesis and in response to chemotherapy”. 2023</p>
                    <p><strong>Barts Charity. </strong></p>
                    <p>“Post-transcriptional regulation in B-cell lymphoma”. 2023-2027</p>
                </div>
            </div>
        </Layout>
    )
}

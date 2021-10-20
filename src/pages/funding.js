import * as React from "react";
import Layout from "../components/layout/layout";
import crukLogo from "../images/cruk-logo.svg"

export default function funding() {
    return (
        <Layout>
            <div className="width-100 flex-column">
            <div className="marg-top-sm width-100" style={{width: "20rem", marginLeft: "calc(50% - 10rem)"}}>
                <img src={crukLogo} alt="CRUK Logo" />
                
            </div>
<h2>Cancer Research UK (CRUK) Career Development Fellowship</h2>
            <div className="width-100 flex-column text-center">
                <p>“Targeting Post-transcriptional Regulators to Eradicate Leukemic Stem Cells in Acute Myeloid Leukemia”. 1,258,197GBP. 2022-2028</p>
                <p>"American Society of Hematology Scholar Award". $100,000. 2021-2023</p>
            </div>
            </div>
        </Layout>
    )
}

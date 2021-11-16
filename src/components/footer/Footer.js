import React from 'react';
import './Footer.scss';
import barts from '../../images/BCI.png';
import colc from '../../images/colc.png';
import qmul from '../../images/qmul.png'

export default function HeaderNav() {
    return <footer>
        <div className="flex">
            <div className="lab-detail"><p>The DiuNguyen Lab</p>
                <p>Centre for Haemato-oncology</p>
                <p>Cancer Research UK Barts Centre</p>
                <p>Barts and The London School of Medicine and Dentistry</p>
                <p>Queen Mary University of London</p>
            </div>
            <div className="flex-column align-center social-media" title="Follow Dr Diu Nguyen on Twitter">
                <span>Follow us:</span>
                <a href="https://twitter.com/diunguyen_vn_uk?s=20" target="_blank" rel="noopener noreferrer">
                    <svg id="icon-twitter" viewBox="0 0 24 24">
                        <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/diunguyen/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
            </div>
        </div>
        <div style={{justifyContent: "space-evenly"}} className="flex logos">
            <div>
                <img src={barts} alt="Barts" />
            </div>
            <div>
                <img src={colc} alt="colc" />
            </div>
            <div>
                <img src={qmul} alt="Queen Mary University" />
            </div>
        </div>
        <div className="flex align-center copyright">
            ©2021 DiuNguyen Lab, Cancer Research UK Barts Centre
        </div>
    </footer>;
}

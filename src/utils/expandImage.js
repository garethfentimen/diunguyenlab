import React from 'react';
import './expandImage.scss';

export default function showExpandImage(imageName, imgSmall) {
    return <img 
            src={imgSmall} 
            alt={imageName} 
        />
}


        // <div class="light-box">
        //     <div class="flex">
        //         <h3 className="text-center width-100">{imageName}</h3>
        //         <button className="close" ariaLabel="Close" onClick={() => setClose(false)}>
        //             <span ariaHidden="true">&times;</span>
        //         </button>
        //     </div>
        //     <img src={imgLarge} className="vision-detail" alt={imageName} />
        // </div> : \
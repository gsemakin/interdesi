"use client";

import React, {useRef} from 'react';
import styles from './styles.module.sass';









export const Cta = () => {
    const ref= useRef(null);


    function makeColor(e, color) {

        const svgEl = ref.current;
        svgEl?.querySelector('svg  path')?.setAttribute('stroke', color);

    }

return (

    <div className={styles.cta} ref={ref} onMouseEnter={(e, color1) => makeColor(e, '#CDA274')} onMouseLeave={(e, color1) => makeColor(e, '#292F36')}>
     <div className={styles.cta__svg}>
         <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M1.771 14.6859L7.71386 8.00017L1.771 1.31445" stroke="#292F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
     </div>
    </div>
)};


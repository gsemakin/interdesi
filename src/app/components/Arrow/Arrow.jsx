"use client";


import styles from "./arrow.module.sass";
import {useRef} from "react";


export const Arrow = ({children, href}) => {

    const ref= useRef(null);

    function animaSvg () {
        const svgEl = ref.current;
        svgEl?.querySelector('path:first-child')?.setAttribute('d', 'm2 8.9l19.9-0.1' );
        svgEl?.querySelector('path:last-child')?.setAttribute('d', 'm15.4 2.4l8.3 6.5-8.5 6.7' );

    }

    function backAnimaSvg () {
        const svgEl = ref.current;
        svgEl?.querySelector('path:first-child')?.setAttribute('d', 'M2.52625 8.93006L19.8608 8.79321' );
        svgEl?.querySelector('path:last-child')?.setAttribute('d', 'M13.4124 2.40601L21.6519 8.92899L13.2465 15.5834' );
    }





    return (
        <div onMouseEnter={animaSvg} onMouseLeave={backAnimaSvg} ref={ref} className={styles.arrow} onClick={()=>window.location.href = (href)}>
            {children}
            <svg className={styles.arrow__svg} xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17" fill="none">
                <path d="M2.52625 8.93006L19.8608 8.79321" stroke="#CDA274" strokeWidth="2"
                      strokeLinecap="square" />
                <path d="M13.4124 2.40601L21.6519 8.92899L13.2465 15.5834" stroke="#CDA274" strokeWidth="2"
                      strokeLinecap="square" />
            </svg>



        </div>
    );
};



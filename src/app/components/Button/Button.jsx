"use client";

import styles from "./button.module.sass";
import {useRef} from "react";
import classNames from "classnames";

export const Button = ({children, className, href}) => {

    const ref= useRef(null);

function animaSvg () {
const svgEl = ref.current;
    svgEl?.querySelector('path')?.setAttribute('d', 'm2 21 45-1M37.217 2 48 19.82 37 38' );
}

    function backAnimaSvg () {
        const svgEl = ref.current;
        svgEl?.querySelector('path')?.setAttribute('d', 'm2 21 24-1M16.217 2 27 19.82 16 38' );
    }





    return (
        <div onMouseEnter={animaSvg} onMouseLeave={backAnimaSvg} ref={ref} onClick={()=>window.location.href = (href)} className={classNames(styles.btn, className)}>
            <p>{children}</p>
            <svg className={styles.btn__svg} xmlns="http://www.w3.org/2000/svg" width="79" height="40" fill="none">
                <path id="btn__path"  stroke="#CDA274" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="m2 21 24-1M16.217 2 27 19.82 16 38"/>

            </svg>



        </div>
    );
};



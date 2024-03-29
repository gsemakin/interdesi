import React from 'react';
// import Image from "next/image";
import styles from "./styles.module.sass";
// 👇 import local font
import localFont from 'next/font/local';

//👇 Configure our local font object
const logoFont = localFont({ src: './TsukimiRounded-Bold.ttf' })


export const Logo = ({onClick}) => {
    return (<div className={styles.root} onClick={onClick}>
        {/*<Image className={styles.logo} width={177} height={51} src="/images/logo.png"></Image>*/}

            <div className={`${logoFont.className} ${styles.main__logo_txt}`}> Semakina Irina</div>


    </div>)
}






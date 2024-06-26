
import Image from "next/image";
import styles from "./hero.module.sass";
import {Button} from "../Button/Button";
import React from "react";

export const Hero =
    () => {
        return (
            <>
<div className={styles.root}>
    <Image className={styles.root__banner} src='/images/hero-banner.jpg' alt='' width={1920} height={1080}></Image>
    <div className={styles.root__text}>
        <div>
            <h1>Создаю оригинальные, уютные и&nbsp;необычные пространства</h1>
            <p>Разработка интерьеров для&nbsp;кафе, ресторанов и&nbsp;баров</p>
        </div>
        <Button className={styles.text__button} href={'#'}>Сделать расчёт</Button>

    </div>

</div>
            </>
        );
    };

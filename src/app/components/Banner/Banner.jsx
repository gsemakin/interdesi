import React from 'react';
import {Button} from "@/app/components/Button/Button";
import styles from './styles.module.sass'

export const Banner = () => {
    const dataBanner = {
        title: 'Остались вопросы?',
        subtitle: 'Напишите мне, и я постараюсь проконсультировать вас в ближайшее время.',
        cta_txt: 'Написать',
        cta_link: '#',
    }

    return (
        <div className={styles.banner}>
            <h3>{dataBanner.title}</h3>
            <p>{dataBanner.subtitle}</p>
            <Button className={styles.btn_orange}>{dataBanner.cta_txt}</Button>
        </div>
    )
};


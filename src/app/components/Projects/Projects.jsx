import React from 'react';
import styles from './styles.module.sass';
import Image from "next/image";
import {Cta} from "@/app/components/CTA/CTA";


export const Projects = () => {

    const data = [
        {
            id: 1,
            src: '/images/proj_1.jpg',
            title: 'MONAMI',
            subtitle: 'Art Modern',
            cta_link: '/projects'
        },
        {
            id: 2,
            src: '/images/proj_2.jpg',
            title: 'MESTO',
            subtitle: 'Minimalist',
            cta_link: '/projects'
        },
        {id: 3, src: '/images/proj_3.jpg', title: 'GUDINY', subtitle: 'Modern', cta_link: '/projects'},
        {
            id: 4,
            src: '/images/proj_4.jpg',
            title: 'GORILAZ',
            subtitle: 'Minimalist',
            cta_link: '/projects'
        },
    ]

    return (
        <div className={styles.projects}>

            <h2>Завершённые проекты</h2>

            <p>Фотографии с объектов, сделанные уже спустя время после завршения проектов.</p>

            <div className={styles.cards}>
                {
                    data.map((item) =>  {
                        return   (
                            <div className={styles.card} key={item.id}>
                                <Image width={590} height={661} alt={item.alt} src={item.src}></Image>
                               <div className={styles.cta_wrapper}>
                                  <div className={styles.titles}>
                                      <h3>{item.title}</h3>
                                      <p>{item.subtitle}</p>
                                  </div>
                                   <Cta></Cta>
                               </div>
                            </div>)
                    })
                }
            </div>

        </div>
    )
};


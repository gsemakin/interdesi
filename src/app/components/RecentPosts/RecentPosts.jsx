import React from 'react';
import styles from './styles.module.sass';
import Image from "next/image";
import {Cta} from "@/app/components/CTA/CTA";


export const RecentPosts = () => {

    const data = [


        {
            id: 2,
            src: '/images/posts_1.png',
            title: 'Магазин рыбы и пива',
            postDate: 'Октябрь 23, 2020',
            cta_link: '',
            category: 'Проект',

        },

        {
            id: 3,
            src: '/images/posts_2.png',
            title: 'Летняя веранда',
            postDate: 'Декабрь 07, 2021',
            cta_link: '',
            category: 'Проект',

        },

        {
            id: 4,
            src: '/images/posts_3.png',
            title: 'Ресторан пива “Гринбир”',
            postDate: 'Февраль 10, 2022',
            cta_link: '',
            category: 'Проект',

        },

        {
            id: 5,
            src: '/images/posts_4.png',
            title: 'Проект школы',
            postDate: 'Март 07, 2022',
            cta_link: '',
            category: 'Проект',

        },

        {
            id: 6,
            src: '/images/recentPosts/posts_6.jpg',
            title: 'Attain The Best Finish For The Kitchen Cabinets',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Новости',

        },

        {
            id: 1,
            src: '/images/recentPosts/posts_1.jpg',
            title: 'Residential Interior Designer In New York, USA',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Новости',

        },

    ]

    return (
        <div className={styles.posts}>

            <h2>Недавние статьи</h2>

            <p>Проекты в работе, новости, полезная информация</p>

            <div className={styles.cards}>
                {
                    data.map((item) =>  {
                        return   (
                            <div className={styles.card} key={item.id}>
                                <div className={styles.imgWrapper}>
                                    <Image width={200} height={200} alt={item.alt} src={item.src}></Image>
                                </div>
                                <div className={styles.category}>
                                    {item.category}
                                </div>
                               <div className={styles.cta_wrapper}>
                                  <div className={styles.titles}>
                                      <h3>{item.title}</h3>
                                      <p>{item.postDate}</p>
                                      <Cta></Cta>
                                  </div>

                               </div>
                            </div>)
                    })
                }
            </div>

        </div>
    )
};


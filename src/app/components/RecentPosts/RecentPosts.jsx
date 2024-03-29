import React from 'react';
import styles from './styles.module.sass';
import Image from "next/image";
import {Cta} from "@/app/components/CTA/CTA";


export const RecentPosts = () => {

    const data = [
        {
            id: 1,
            src: '/images/recentPosts/posts_1.jpg',
            title: 'Residential Interior Designer In New York, USA',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Kitchen Design',

        },

        {
            id: 2,
            src: '/images/recentPosts/posts_2.jpg',
            title: 'How To Choose The Best Wall Art & Decor House?',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Living Room',

        },

        {
            id: 3,
            src: '/images/recentPosts/posts_3.jpg',
            title: 'Tips To Increase The Interior Value Of Your House',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Minimalist Interior',

        },

        {
            id: 4,
            src: '/images/recentPosts/posts_4.jpg',
            title: 'Best Solution For Any Office & Business Interior',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Kitchen Design',

        },

        {
            id: 5,
            src: '/images/recentPosts/posts_5.jpg',
            title: 'Get Solution For Building Construction Work',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Living Room',

        },

        {
            id: 6,
            src: '/images/recentPosts/posts_6.jpg',
            title: 'Attain The Best Finish For The Kitchen Cabinets',
            postDate: 'November 23, 2021',
            cta_link: '',
            category: 'Minimalist Interior',

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
                                <Image width={590} height={661} alt={item.alt} src={item.src}></Image>
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


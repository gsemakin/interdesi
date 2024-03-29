import React from 'react';
import styles from './styles.module.sass';
import Image from "next/image";

export const Brands = () => {
    const data = [
        {id: 1, src: '/images/brands/brands_1.png', dimensions: [132, 43], alt: 'Партнёры лого 1'},
        {id: 2, src: '/images/brands/brands_2.png', dimensions: [103, 103], alt: 'Партнёры лого 2'},
        {id: 3, src: '/images/brands/brands_3.png', dimensions: [164, 43], alt: 'Партнёры лого 3'},
        {id: 4, src: '/images/brands/brands_4.png', dimensions: [145, 45], alt: 'Партнёры лого 4'},
        {id: 5, src: '/images/brands/brands_5.png', dimensions: [117, 48], alt: 'Партнёры лого 5'}]
    return (
        <div className={styles.brands}>
            {
                data.map((item) => <Image width={item.dimensions[0]} height={item.dimensions[1]} src={item.src} key={item.id} alt={item.alt}></Image>)
            }
        </div>


    );

}


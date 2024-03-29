import React from 'react';
import styles from './styles.module.sass'
import Image from "next/image";

const testimonial__data = [{img:'/images/users/user_1.jpg', id:1, title:'Lisa Clairton', subtitle:'New York, USA', text:'We selected Interno interior because of rigorous design background & education.'},
    {img:'/images/users/user_2.jpg', id:2, title:'David Knight', subtitle:'Sydney, Australia', text:'The team exceeded our expectations and emerged as leaders of our project’s.'},
    {img:'/images/users/user_3.jpg', id:3, title:'Lisa Clairton', subtitle:'Paris, France', text:'They balanced the architectural vision and the project realities beautifully.'}]

export const Testimonial = () => {
    return (
        <div className={styles.testimonial}>
            <h2>Что говорят заказчики<br></br>
                </h2>
            <div className={styles.cards}>
                {testimonial__data.map((item) => {
                    return  <div key={item.id} className={styles.card}>
                        <div className={styles.card__header}>
                            <Image src={item.img} width={77} height={77}></Image>
                            <div className={styles.username}>
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                        <div className={styles.card__text}>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}


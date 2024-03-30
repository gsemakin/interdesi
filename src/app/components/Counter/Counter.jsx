import React from 'react';
import styles from './styles.module.sass';

const counterData = [{
    id: 1,
    number: 15,
    afterNumber: '',
    txt: 'Лет опыта'
},{
    id: 2,
    number: 350,
    afterNumber: '+',
    txt: 'Успешных проектов'
},
//     {
//     id: 3,
//     number: 3,
//     afterNumber: '',
//     txt: 'Севастополь, Москва, Нижний Новгород'
// },
    {
        id: 4,
        number: 150, afterNumber: '+',
    txt: 'Довольных клиентов'
}
]

export const Counter = () => {

    return (
        <div className={styles.counter}>
            <div className={styles.counter__items}>
                {counterData.map((item) => {

                    return (
                        <div className={styles.counter__item}>
                            <h3 className={styles.title}>{item.number + item.afterNumber}</h3>
                            <div className={styles.subtitle}><p>{item.txt}</p></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

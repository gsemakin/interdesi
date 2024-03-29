import styles from './description.module.sass';
import {Arrow} from '../Arrow/Arrow';

export const Description = () => {
    return (

            <div className={styles.root}>

                <div className={styles.col}>
                    <h3>Дизайн интерьера</h3>
                    <p>
                        Создание оригинального интерьера для конкретных целей.</p>
                    <Arrow href='/blog'>Подробнее</Arrow>
                </div>

                <div className={styles.col}>
                    <h3>Подбор материалов</h3>
                    <p>Поиск материалов, объектов мебели в соответствии с концепцией.</p>
                    <Arrow href='/blog'>Подробнее</Arrow>
                </div>

                <div className={styles.col}>
                    <h3>Комплектация</h3>
                    <p>Всё, что необходимо для реализации дизайн-проекта с авторским надзором.</p>
                    <Arrow href='/blog'>Подробнее</Arrow>
                </div>

            </div>

    );
};

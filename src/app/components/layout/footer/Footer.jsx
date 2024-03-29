'use client'
import Link from "next/link";
import styles from "./styles.module.sass";
import {usePathname} from "next/navigation";
import {Logo} from "@/app/components/Logo/Logo";


export const Footer = () => {

    const footer__data = {menu: [['/', 'Главная', '1'], ['/projects', 'Проекты', '2'], ['/contacts', 'Контакты', '3']]};

    const pathname = usePathname();
    return (
        <div className={styles.root}>
            <div className={styles.col}>
                <Logo></Logo>
                <p>Разработка интерьеров для кафе, ресторанов и баров</p>
            </div>
            <div className={styles.col}>
                <h3>Страницы</h3>
                <nav>
                    {
                        footer__data.menu.map((item) => <Link className={pathname === item[0] ? styles.active : ''}
                                                              key={item[2]} href={item[0]}> {item[1]} </Link>)
                    }
                </nav>
            </div>

            <div className={styles.col}>
                <h3>Контакты</h3>
                <div>
                    <p><a href='mailto:test@bk.ru'>test@bk.ru</a></p>
                    <p><a href='tel:+7999999999'>+7 999 99-99-99</a></p>
                </div>
            </div>
        </div>
    );
};

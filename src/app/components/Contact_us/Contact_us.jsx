
import styles from './contact_us.module.sass';
import {Button} from "../Button/Button";
import Image from "next/image";

export const Contact_us = () => {
    return (
        <>
            <div className={styles.root}>
                <div className={styles.col}>
                    <h2>Вместе мы реализуем самые амбициозные проекты</h2>
                    <p className={styles.col__txt}>Новаторство, индивидуальный подход, авторский стиль и большой опыт дают воплощение моим самым сложным проектам. </p>
                    <div className={styles.callto}>


                        <Button className={styles.callCta} href={'tel:+79999999999'}>Звоните </Button>
                            <div className={styles.phoneInfo}>
                                <div className={styles.phoneIcon}>
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzJfOTQpIj4KPHBhdGggZD0iTTMyLjAwMTIgMjYuMDc0OUMzMC43Nzk2IDI0Ljg0NDIgMjcuODIxMSAyMy4wNDgyIDI2LjM4NTcgMjIuMzI0M0MyNC41MTY0IDIxLjM4MjggMjQuMzYyNSAyMS4zMDU5IDIyLjg5MzMgMjIuMzk3NEMyMS45MTMzIDIzLjEyNTggMjEuMjYxNyAyMy43NzY2IDIwLjExNDggMjMuNTMyQzE4Ljk2NzggMjMuMjg3NCAxNi40NzU0IDIxLjkwODIgMTQuMjkzMSAxOS43MzI5QzEyLjExMDcgMTcuNTU3NiAxMC42NTE0IDE0Ljk5MzEgMTAuNDA2MSAxMy44NTAxQzEwLjE2MDcgMTIuNzA3MSAxMC44MjIyIDEyLjA2MzIgMTEuNTQzOCAxMS4wODFDMTIuNTYwNyA5LjY5NjQyIDEyLjQ4MzggOS40NjU2NiAxMS42MTQ1IDcuNTk2NTFDMTAuOTM2OCA2LjE0MjczIDkuMDg4MzMgMy4yMTIwOCA3Ljg1MjkxIDEuOTk2NzVDNi41MzEzNCAwLjY5MTQyMiA2LjUzMTM0IDAuOTIyMTgxIDUuNjc5NzkgMS4yNzYwMUM0Ljk4NjUyIDEuNTY3NjggNC4zMjE0MSAxLjkyMjIyIDMuNjkyODEgMi4zMzUyQzIuNDYyMDEgMy4xNTI4NSAxLjc3ODkyIDMuODMyMDYgMS4zMDEyMiA0Ljg1Mjc4QzAuODIzNTEyIDUuODczNTEgMC42MDg4OTIgOC4yNjY0OCAzLjA3NTg4IDEyLjc0NzhDNS41NDI4NiAxNy4yMjkyIDcuMjczNjcgMTkuNTIwNiAxMC44NTYxIDIzLjA5MjhDMTQuNDM4NSAyNi42NjQ5IDE3LjE5MzEgMjguNTg1NiAyMS4yMjAyIDMwLjg0NEMyNi4yMDE4IDMzLjYzMzkgMjguMTEyNiAzMy4wOSAyOS4xMzY1IDMyLjYxMzFDMzAuMTYwNCAzMi4xMzYyIDMwLjg0MjcgMzEuNDU5MyAzMS42NjIgMzAuMjI4NkMzMi4wNzYgMjkuNjAxMSAzMi40MzE0IDI4LjkzNjggMzIuNzIzNSAyOC4yNDQxQzMzLjA3ODEgMjcuMzk1NyAzMy4zMDg5IDI3LjM5NTcgMzIuMDAxMiAyNi4wNzQ5WiIgc3Ryb2tlPSIjQ0RBMjc0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzJfOTQiPgo8cmVjdCB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="/>
                                </div>
                                <div className={styles.phoneTxt}>
                                    <p className={styles.col__txt}><a href="tel:79999999999">+7999 999-99-99</a> </p>
                                </div>
                            </div>




                    </div>

                </div>
                <div className={styles.col}>
                    <Image className="callto_image" src='/images/contact_us.jpg' width={592} height={635} alt=""></Image>
                </div>
            </div>
        </>
    );
};

'use client'
import Link from "next/link";
import styles from "./styles.module.sass";
import { usePathname } from "next/navigation";
import {Logo} from "@/app/components/Logo/Logo";
import {useEffect, useRef, useState} from "react";


export const Header = () => {

    const ref = useRef(null);

    const menu = [['/', 'Главная', '1'], ['/projects', 'Проекты', '2'], ['/blog', 'Блог', '3'], ['/contacts', 'Контакты', '4']];

    const pathname = usePathname();



    let [isExpanded, setIsExpanded] = useState(false);


    // Keyframes
    const values1 = [
        "M 84,24 C 84,24 61.333333,24.001 50,24.001 38.666667,24.001 16,24 16,24",
        "M 82,24 C 82,24 66.957389,30.5 50,30.5 33.042611,30.5 18,24 18,24",
        "M 80,24 C 80,24 61.663104,37 50,37 38.336896,37 20,24 20,24",
        "M 78,24 C 78,24 55.685686,43.5 50,43.5 44.314314,43.5 22,24 22,24",
        "M 76,24 C 76,24 50.055365,50 50,50 49.94463,50 24,24 24,24"
    ];
    const values2 = [
        "M 84,50 H 50 16",
        "M 75.5,50 H 50 24.5",
        "M 67,50 H 50 33",
        "M 58.5,50 H 50 41.5",
        "M 50.001,50 H 50 49.99"
    ];
    const values3 = [
        "M 84,76 C 84,76 61.333333,76.001 50,76.001 38.666667,76.001 16,76 16,76",
        "M 82,76 C 82,76 66.957389,69.5 50,69.5 33.042611,69.5 18,76 18,76",
        "M 80,76 C 80,76 61.663104,63 50,63 38.336896,63 20,76 20,76",
        "M 78,76 C 78,76 55.685686,56.5 50,56.5 44.314314,56.5 22,76 22,76",
        "M 76,76 C 76,76 50.055365,50 50,50 49.944635,50 24,76 24,76"
    ];



    function toggleAnimation(values, animate) {
        if (animate) {
            animate.setAttribute(
                "values",
                !isExpanded ? values.join("; ") : values.slice().reverse().join("; ")
            );
            animate.beginElement();
        }

    }

    function handleClick(e) {
        const target = e.currentTarget;
        const animate1 = target?.querySelector(".animate1");
        const animate2 = target?.querySelector(".animate2");
        const animate3 = target?.querySelector(".animate3");

        // isExpanded = row.getAttribute("aria-expanded") === "true";
        // const card = ref.current
        // if (isExpanded) {
        //     card.classList.remove("js_active");
        // } else {
        //     card.classList.add("js_active");
        // }

        setIsExpanded(!isExpanded);

        // row.setAttribute("aria-expanded", !isExpanded);
        // row.setAttribute("aria-label", !isExpanded ? "Close Menu" : "Open Menu");

        toggleAnimation(values1, animate1);
        toggleAnimation(values2, animate2);
        toggleAnimation(values3, animate3);
    }

    function initPath(clazz, descriptor) {
        const path = card?.querySelector(clazz);
        if (path)
        {
            path.setAttribute("d", descriptor);
        }
    }



    // row.addEventListener("keydown", (event) => {
    //     if (event.key === "Enter" || event.key === " ") {
    //         event.preventDefault();
    //         row.click();
    //     }
    // });





    return (
        <div className={styles.root}>
            <Logo onClick={()=>window.location.href = ('/')}></Logo>
            <div className={styles.menu}>
                <svg onClick={handleClick} width="32" height="32" viewBox="0 0 100 100" className={styles.icon} ref={ref}>
                    <path d="M 84,24 C 84,24 61.333333,24.001 50,24.001 38.666667,24.001 16,24 16,24" className="path1">
                        <animate className="animate1" attributeName="d" dur="0.35s" repeatCount="1" fill="freeze"/>
                    </path>
                    <path d="M 84,50 H 50 16" className="path2">
                        <animate className="animate2" attributeName="d" dur="0.35s" repeatCount="1" fill="freeze"/>
                    </path>
                    <path d="M 84,76 C 84,76 61.333333,76.001 50,76.001 38.666667,76.001 16,76 16,76" className="path3">
                        <animate className="animate3" attributeName="d" dur="0.35s" repeatCount="1" fill="freeze"/>
                    </path>
                </svg>
                <nav className={`${styles.menu__items} ${isExpanded ? styles.js__active : ''}`}>
                    {
                        menu.map((item) => <Link className={pathname ===  item[0] ? styles.active : ''} key={item[2]} href={item[0]}> {item[1]} </Link>)
                    }
                </nav>

            </div>

        </div>
    );
};

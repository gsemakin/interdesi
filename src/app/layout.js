// import { Inter } from "next/font/google";
import {Jost} from 'next/font/google'
import "./globals.css";
import Head from 'next/head'
// const inter = Inter({ subsets: ["latin"] });
// const jost = Jost({weight: "400", subsets: ["cyrillic"]});

export const metadata = {
    title: "Интерьеры для кафе, ресторанов и баров",
    description: "Дизайн интерьеров под ключ. Создаю оригинальные, уютные и необычные пространства",
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <head>
            <Head>
                <title>metadata.title</title>
                <description>metadata.description</description>
                {/*<link rel="preconnect" href="https://fonts.googleapis.com"></link>*/}
                {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>*/}
                {/*<link href="https://fonts.googleapis.com/css2?family=Tsukimi+Rounded&display=swap"*/}
                {/*      rel="stylesheet"></link>*/}

                {/*<link href="https://fonts.googleapis.com/css2?family=Tsukimi+Rounded&display=swap"*/}
                {/*    rel="stylesheet"></link>*/}
            </Head>
        </head>
        {/*<body className={jost.className}>{children}</body>*/}
       <body >{children}</body>
        </html>
    );
}

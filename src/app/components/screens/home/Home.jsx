import styles from "./styles.module.sass"
// import {workerMain} from "next/dist/build/webpack-build/impl";
import Head from 'next/head'
import {Hero} from "../../Hero/Hero";
import {Description} from "../../Description/Description";
import {Contact_us} from "../../Contact_us/Contact_us";
import {Testimonial} from "../../Testimonial/Testimonial";
import {Brands} from "../../Brands/Brands";
import {Projects} from "../../Projects/Projects";
import {Counter} from "../../Counter/Counter";
import {RecentPosts} from "../../RecentPosts/RecentPosts";
import {Banner} from "@/app/components/Banner/Banner";
export const Home = () => {

        return (
            <main className={styles.root}>
                <Hero></Hero>
                <Description></Description>
                <Contact_us></Contact_us>
                <Testimonial></Testimonial>
                <Brands></Brands>
                <Projects></Projects>
                <Counter></Counter>
                <RecentPosts></RecentPosts>
                <Banner></Banner>
            </main>
        );
    }
;

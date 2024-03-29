import Image from "next/image";
import styles from "./page.module.css";

import {Home} from './components/screens/home/Home'
import {Layout} from "./components/layout/Layout";


export default function HomePage() {
  return (
      <Layout>
        <Home/>
      </Layout>
  )
}

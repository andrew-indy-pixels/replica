import Image from "next/image";
import styles from "./page.module.css";
import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import Cards from '@/components/Cards'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <SubHeader />
      <Cards />
    </div>
  );
}
